'use client';

import React, { useState } from 'react';
import {
  Calculator,
  HelpCircle,
  Building2,
  Calendar,
  AlertCircle,
  TrendingUp,
} from 'lucide-react';
import {
  calculatePolishSalary,
  ContractTypePl,
  KupTypePl,
  Pit2OptionPl,
} from '@/lib/salary/pl';
import { POLAND_SALARY_RULES_2026 } from '@/rules/pl/salary-2026';
import { formatCurrency } from '@/lib/formatters';

const MONTH_NAMES_PL = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
];

interface PolishSalaryCalculatorToolProps {
  initialGross?: number;
}

export function PolishSalaryCalculatorTool({ initialGross = 8000 }: PolishSalaryCalculatorToolProps) {
  const [grossInput, setGrossInput] = useState<string>(initialGross.toString());
  const [contractType, setContractType] = useState<ContractTypePl>('uop');
  const [kupType, setKupType] = useState<KupTypePl>('standard');
  const [pit2Option, setPit2Option] = useState<Pit2OptionPl>('full');
  const [isUnder26, setIsUnder26] = useState<boolean>(false);
  const [includePpk, setIncludePpk] = useState<boolean>(false);
  const [showYearlyTable, setShowYearlyTable] = useState<boolean>(true);

  const parsedGross = parseFloat(grossInput.replace(/\s+/g, '').replace(',', '.')) || 0;

  const calculation = calculatePolishSalary({
    grossSalary: parsedGross,
    contractType,
    kupType,
    pit2Option,
    isUnder26,
    ppkEmployeeRate: includePpk ? 0.02 : 0,
    ppkEmployerRate: includePpk ? 0.015 : 0,
  });

  const firstMonth = calculation.monthlyBreakdown[0] || {
    grossSalary: parsedGross,
    netSalary: 0,
    totalZusSocialEmployee: 0,
    zusEmerytalneEmployee: 0,
    zusRentoweEmployee: 0,
    zusChoroboweEmployee: 0,
    zdrowotnaAmount: 0,
    pitAdvance: 0,
    ppkEmployeeAmount: 0,
    totalEmployerCost: 0,
    totalZusSocialEmployer: 0,
  };

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <Calculator className="h-6 w-6 text-red-600" />
          Kalkulator Wynagrodzeń 2026: Brutto na Netto
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Oblicz dokładną pensję netto (na rękę), składki ZUS, NFZ, zaliczkę na PIT oraz łączny koszt pracodawcy zgodnie z Polskim Ładem i stawkami na 2026 rok.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* INPUT FORM */}
        <div className="space-y-5 lg:col-span-5">
          {/* GROSS SALARY INPUT */}
          <div>
            <label htmlFor="pl-gross-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Wynagrodzenie brutto (PLN)
            </label>
            <div className="relative mt-1.5">
              <input
                id="pl-gross-input"
                type="text"
                inputMode="decimal"
                value={grossInput}
                onChange={(e) => setGrossInput(e.target.value)}
                placeholder="np. 8000"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base font-semibold text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                PLN / mies.
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[4666, 6000, 8000, 10000, 15000, 20000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setGrossInput(preset.toString())}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100"
                >
                  {preset === 4666 ? 'Min. 4 666 zł' : `${preset.toLocaleString('pl-PL')} zł`}
                </button>
              ))}
            </div>
          </div>

          {/* CONTRACT TYPE */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
              Forma umowy
            </label>
            <div className="mt-1.5 grid grid-cols-3 gap-2">
              {[
                { id: 'uop', label: 'Umowa o pracę' },
                { id: 'zlecenie', label: 'Zlecenie' },
                { id: 'dzielo', label: 'Dzieło' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setContractType(c.id as ContractTypePl)}
                  className={`rounded-xl border p-2.5 text-xs font-semibold transition-all ${
                    contractType === c.id
                      ? 'border-red-600 bg-red-50/60 text-red-700 shadow-xs'
                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* KUP OPTIONS (Only for UoP / Dzieło) */}
          {contractType === 'uop' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                Koszty uzyskania przychodów (KUP)
              </label>
              <select
                aria-label="Koszty uzyskania przychodów (KUP)"
                value={kupType}
                onChange={(e) => setKupType(e.target.value as KupTypePl)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:border-red-500 focus:outline-none"
              >
                <option value="standard">Standardowe (250 zł / mies. – praca w miejscu zamieszkania)</option>
                <option value="podwyzszone">Podwyższone (300 zł / mies. – dojazd z innej miejscowości)</option>
                <option value="autorskie_50">50% autorskie koszty twórcze (prace B+R, programiści)</option>
              </select>
            </div>
          )}

          {/* PIT-2 (KWOTA WOLNA OD PODATKU) */}
          {contractType !== 'dzielo' && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700">
                PIT-2 (Kwota zmniejszająca podatek)
              </label>
              <select
                aria-label="PIT-2 (Kwota zmniejszająca podatek)"
                value={pit2Option}
                onChange={(e) => setPit2Option(e.target.value as Pit2OptionPl)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-800 focus:border-red-500 focus:outline-none"
              >
                <option value="full">1/12 (300 zł / mies. – jeden pracodawca, standard)</option>
                <option value="half">1/24 (150 zł / mies. – dwóch pracodawców)</option>
                <option value="third">1/36 (100 zł / mies. – trzech pracodawców)</option>
                <option value="none">Brak (0 zł / mies. – brak złożonego oświadczenia PIT-2)</option>
              </select>
            </div>
          )}

          {/* TOGGLES: ULGA DLA MŁODYCH & PPK */}
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50/60 p-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Ulga dla młodych (do 26 lat)</span>
                <span className="text-[11px] text-slate-500">Zwolnienie z podatku PIT do limitu 85 528 zł rocznie</span>
              </div>
              <input
                type="checkbox"
                id="under-26-checkbox"
                checked={isUnder26}
                onChange={(e) => setIsUnder26(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
              />
            </div>

            {contractType === 'uop' && (
              <div className="border-t border-slate-200/80 pt-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Pracownicze Plany Kapitałowe (PPK)</span>
                  <span className="text-[11px] text-slate-500">Wpłata pracownika (2%) + wpłata pracodawcy (1,5%)</span>
                </div>
                <input
                  type="checkbox"
                  id="ppk-checkbox"
                  checked={includePpk}
                  onChange={(e) => setIncludePpk(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
                />
              </div>
            )}
          </div>
        </div>

        {/* RESULTS HERO */}
        <div className="space-y-6 lg:col-span-7">
          {/* NET HERO CARD */}
          <div className="rounded-2xl border-2 border-red-600/30 bg-gradient-to-br from-red-50/60 via-white to-rose-50/30 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-red-800">
                Wynagrodzenie netto (na rękę)
              </span>
              <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-bold text-red-800">
                Efektywne obciążenie: {(calculation.effectiveEmployeeTaxRate * 100).toFixed(1)}%
              </span>
            </div>

            <div className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              {formatCurrency(firstMonth.netSalary, 'pl', 'PLN')}
            </div>
            <p className="mt-1 text-xs text-slate-500">
              Średnia miesięczna na rękę w skali roku: {formatCurrency(calculation.averageMonthlyNet, 'pl', 'PLN')} (rocznie: {formatCurrency(calculation.annualNet, 'pl', 'PLN')})
            </p>

            {calculation.thresholdCrossedMonth && (
              <div className="mt-3 flex items-start gap-2 rounded-xl bg-amber-50 p-2.5 text-xs text-amber-800 border border-amber-200">
                <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                <span>
                  W <strong>{MONTH_NAMES_PL[calculation.thresholdCrossedMonth - 1]}</strong> przekroczysz próg 120 000 zł dochodu – stawka podatku PIT wzrośnie z 12% do 32%.
                </span>
              </div>
            )}
          </div>

          {/* DEDUCTIONS BREAKDOWN GRID */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {/* UBEZPIECZENIA SPOŁECZNE ZUS */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <span className="text-xs font-bold text-slate-700 block">Składki ZUS pracownika (13,71%)</span>
              <div className="mt-1 text-lg font-bold text-slate-900">
                {formatCurrency(firstMonth.totalZusSocialEmployee, 'pl', 'PLN')}
              </div>
              <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                <div className="flex justify-between">
                  <span>Emerytalna (9,76%):</span>
                  <span className="font-medium text-slate-700">{formatCurrency(firstMonth.zusEmerytalneEmployee, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rentowa (1,50%):</span>
                  <span className="font-medium text-slate-700">{formatCurrency(firstMonth.zusRentoweEmployee, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Chorobowa (2,45%):</span>
                  <span className="font-medium text-slate-700">{formatCurrency(firstMonth.zusChoroboweEmployee, 'pl', 'PLN')}</span>
                </div>
              </div>
            </div>

            {/* ZDROWOTNA I PIT */}
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <span className="text-xs font-bold text-slate-700 block">NFZ & Zaliczka na PIT</span>
              <div className="mt-1 text-lg font-bold text-slate-900">
                {formatCurrency(firstMonth.zdrowotnaAmount + firstMonth.pitAdvance, 'pl', 'PLN')}
              </div>
              <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                <div className="flex justify-between">
                  <span>Składka zdrowotna (9%):</span>
                  <span className="font-medium text-slate-700">{formatCurrency(firstMonth.zdrowotnaAmount, 'pl', 'PLN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Zaliczka na PIT ({firstMonth.taxRatePercent}%):</span>
                  <span className="font-medium text-slate-700">{formatCurrency(firstMonth.pitAdvance, 'pl', 'PLN')}</span>
                </div>
                {includePpk && (
                  <div className="flex justify-between">
                    <span>Wpłata na PPK (2%):</span>
                    <span className="font-medium text-slate-700">{formatCurrency(firstMonth.ppkEmployeeAmount, 'pl', 'PLN')}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* TOTAL EMPLOYER COST CARD */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-600" />
                <span className="text-xs font-bold text-slate-800">Łączny koszt pracodawcy</span>
              </div>
              <span className="text-base font-extrabold text-slate-900">
                {formatCurrency(firstMonth.totalEmployerCost, 'pl', 'PLN')}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              Pracodawca dopłaca dodatkowo <strong>{formatCurrency(firstMonth.totalEmployerCost - firstMonth.grossSalary, 'pl', 'PLN')}</strong> miesięcznie (ZUS emerytalny 9,76%, rentowy 6,5%, wypadkowy 1,67%, FP 2,45%, FGSP 0,1%).
            </p>
          </div>
        </div>
      </div>

      {/* 12-MONTH SCHEDULE TABLE */}
      {showYearlyTable && (
        <div className="border-t border-slate-200 pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-700" />
              Rozbicie roczne miesiąc po miesiącu (2026)
            </h3>
            <span className="text-xs text-slate-500">
              Prognoza uwzględniająca progi podatkowe i limit składek ZUS
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-600 border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-3">Miesiąc</th>
                  <th className="py-2.5 px-3">Brutto</th>
                  <th className="py-2.5 px-3">ZUS Społeczne</th>
                  <th className="py-2.5 px-3">NFZ (9%)</th>
                  <th className="py-2.5 px-3">PIT</th>
                  <th className="py-2.5 px-3 font-bold text-slate-900">Netto (Na rękę)</th>
                  <th className="py-2.5 px-3">Koszt pracodawcy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {calculation.monthlyBreakdown.map((m) => (
                  <tr
                    key={m.monthIndex}
                    className={`hover:bg-slate-50/80 ${
                      m.isThresholdCrossed ? 'bg-amber-50/40' : ''
                    }`}
                  >
                    <td className="py-2 px-3 font-medium text-slate-900">
                      {MONTH_NAMES_PL[m.monthIndex - 1]}
                      {m.isThresholdCrossed && (
                        <span className="ml-1.5 rounded bg-amber-100 px-1.5 py-0.2 text-[10px] font-bold text-amber-800">
                          32% PIT
                        </span>
                      )}
                      {m.is30xCapReached && (
                        <span className="ml-1.5 rounded bg-emerald-100 px-1.5 py-0.2 text-[10px] font-bold text-emerald-800">
                          Limit 30x
                        </span>
                      )}
                    </td>
                    <td className="py-2 px-3">{formatCurrency(m.grossSalary, 'pl', 'PLN')}</td>
                    <td className="py-2 px-3">{formatCurrency(m.totalZusSocialEmployee, 'pl', 'PLN')}</td>
                    <td className="py-2 px-3">{formatCurrency(m.zdrowotnaAmount, 'pl', 'PLN')}</td>
                    <td className="py-2 px-3">{formatCurrency(m.pitAdvance, 'pl', 'PLN')}</td>
                    <td className="py-2 px-3 font-bold text-slate-900">{formatCurrency(m.netSalary, 'pl', 'PLN')}</td>
                    <td className="py-2 px-3 text-slate-600">{formatCurrency(m.totalEmployerCost, 'pl', 'PLN')}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-slate-50 font-bold text-slate-900 border-t border-slate-200">
                <tr>
                  <td className="py-2.5 px-3">Roczne podsumowanie:</td>
                  <td className="py-2.5 px-3">{formatCurrency(calculation.annualGross, 'pl', 'PLN')}</td>
                  <td className="py-2.5 px-3">{formatCurrency(calculation.annualZusSocialEmployee, 'pl', 'PLN')}</td>
                  <td className="py-2.5 px-3">{formatCurrency(calculation.annualZdrowotnaEmployee, 'pl', 'PLN')}</td>
                  <td className="py-2.5 px-3">{formatCurrency(calculation.annualPitAdvance, 'pl', 'PLN')}</td>
                  <td className="py-2.5 px-3 text-red-700">{formatCurrency(calculation.annualNet, 'pl', 'PLN')}</td>
                  <td className="py-2.5 px-3">{formatCurrency(calculation.annualTotalEmployerCost, 'pl', 'PLN')}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
