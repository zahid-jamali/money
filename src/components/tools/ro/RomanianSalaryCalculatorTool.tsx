'use client';

import React, { useState } from 'react';
import {
  Calculator,
  HelpCircle,
  Building2,
  Users,
  ShieldCheck,
  TrendingUp,
  RotateCcw,
} from 'lucide-react';
import {
  calculateRomanianSalary,
  calculateNetToGrossRo,
} from '@/lib/salary/ro';
import { ROMANIA_SALARY_RULES_2026 } from '@/rules/ro/salary-2026';
import { formatCurrency } from '@/lib/formatters';

interface RomanianSalaryCalculatorToolProps {
  initialGross?: number;
}

export function RomanianSalaryCalculatorTool({ initialGross = 8000 }: RomanianSalaryCalculatorToolProps) {
  const [calcDirection, setCalcDirection] = useState<'grossToNet' | 'netToGross'>('grossToNet');
  const [salaryInput, setSalaryInput] = useState<string>(initialGross.toString());
  const [dependants, setDependants] = useState<number>(0);
  const [isUnder26, setIsUnder26] = useState<boolean>(false);
  const [schoolChildrenCount, setSchoolChildrenCount] = useState<number>(0);
  const [applyMinWageExemption, setApplyMinWageExemption] = useState<boolean>(true);

  const parsedInput = parseFloat(salaryInput.replace(/\s+/g, '').replace(',', '.')) || 0;

  let effectiveGross = parsedInput;
  if (calcDirection === 'netToGross') {
    effectiveGross = calculateNetToGrossRo(parsedInput, {
      dependants,
      isUnder26,
      schoolChildrenCount,
      applyMinWageExemption,
    });
  }

  const result = calculateRomanianSalary({
    grossSalary: effectiveGross,
    dependants,
    isUnder26,
    schoolChildrenCount,
    applyMinWageExemption,
  });

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5 dark:border-slate-800">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <Calculator className="h-6 w-6 text-teal-600" />
          Calculator Salariu 2026: Brut în Net și Cost Total Firmă
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Calculează salariul net pe baza Codului Fiscal (Legea 227/2015), salariul minim de 4.050 lei cu facilitarea de 300 lei netaxabili, CAS 25%, CASS 10%, impozit 10% și deducerile personale.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* INPUT FORM */}
        <div className="space-y-5 lg:col-span-5">
          {/* DIRECTION SWITCH */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Direcția Calculului
            </label>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setCalcDirection('grossToNet')}
                className={`rounded-xl py-2 text-xs font-bold transition ${
                  calcDirection === 'grossToNet'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                Brut în Net
              </button>
              <button
                type="button"
                onClick={() => setCalcDirection('netToGross')}
                className={`rounded-xl py-2 text-xs font-bold transition ${
                  calcDirection === 'netToGross'
                    ? 'bg-teal-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                Net în Brut (Invers)
              </button>
            </div>
          </div>

          {/* SALARY INPUT */}
          <div>
            <label htmlFor="ro-salary-input" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              {calcDirection === 'grossToNet' ? 'Salariul Brut (RON)' : 'Salariul Net Dorit (RON)'}
            </label>
            <div className="relative mt-1.5">
              <input
                id="ro-salary-input"
                type="text"
                inputMode="decimal"
                value={salaryInput}
                onChange={(e) => setSalaryInput(e.target.value)}
                placeholder="Ex. 8000"
                className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base font-semibold text-slate-900 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                RON / lună
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {[4050, 5000, 7000, 8000, 10000, 15000].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setSalaryInput(preset.toString())}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {formatCurrency(preset, 'ro')}
                </button>
              ))}
            </div>
          </div>

          {/* DEPENDANTS SELECT */}
          <div>
            <label htmlFor="ro-dependants-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Persoane în Întreținere (Deducere Personală)
            </label>
            <select
              id="ro-dependants-select"
              value={dependants}
              onChange={(e) => setDependants(parseInt(e.target.value, 10))}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value={0}>0 persoane în întreținere (Fără)</option>
              <option value={1}>1 persoană în întreținere</option>
              <option value={2}>2 persoane în întreținere</option>
              <option value={3}>3 persoane în întreținere</option>
              <option value={4}>4 sau mai multe persoane</option>
            </select>
          </div>

          {/* CHILDREN ENROLLED IN EDUCATION */}
          <div>
            <label htmlFor="ro-children-school-select" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Copii Înscriși în Învățământ (+100 lei/copil deducere)
            </label>
            <select
              id="ro-children-school-select"
              value={schoolChildrenCount}
              onChange={(e) => setSchoolChildrenCount(parseInt(e.target.value, 10))}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-800 focus:border-teal-500 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value={0}>0 copii la școală / grădiniță</option>
              <option value={1}>1 copil înscris în învățământ</option>
              <option value={2}>2 copii înscriși în învățământ</option>
              <option value={3}>3 copii înscriși în învățământ</option>
              <option value={4}>4 sau mai mulți copii</option>
            </select>
          </div>

          {/* TOGGLES */}
          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isUnder26}
                onChange={(e) => setIsUnder26(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Tânăr sub 26 de ani (+15% din salariul minim deducere)
              </span>
            </label>

            {effectiveGross === ROMANIA_SALARY_RULES_2026.minimumWageGross && (
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={applyMinWageExemption}
                  onChange={(e) => setApplyMinWageExemption(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Aplică scutirea de 300 lei netaxabili (OUG 115/2023)
                </span>
              </label>
            )}
          </div>
        </div>

        {/* RESULTS SUMMARY */}
        <div className="space-y-6 lg:col-span-7">
          {/* NET TAKE-HOME BANNER */}
          <div className="rounded-2xl bg-gradient-to-br from-teal-600 to-emerald-700 p-6 text-white shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-100">
                Salariul Net (Bani în Mână)
              </span>
              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold">
                Rata Netă: {((1 - result.effectiveTaxRate) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="mt-2 text-3xl font-extrabold sm:text-4xl">
              {formatCurrency(result.netSalary, 'ro')}
            </div>
            <p className="mt-1 text-xs text-teal-100">
              Salariu Brut calculat: {formatCurrency(result.grossSalary, 'ro')} | Cost Total Firmă: {formatCurrency(result.totalEmployerCost, 'ro')}
            </p>
          </div>

          {/* DEDUCTIONS BREAKDOWN */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Rețineri Salariat din Salariul Brut
            </h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-1.5 dark:border-slate-700">
                <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  CAS – Asigurări Sociale / Pensii (25%)
                </span>
                <span className="font-semibold text-rose-600">
                  -{formatCurrency(result.casEmployee, 'ro')}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5 dark:border-slate-700">
                <span className="text-slate-600 dark:text-slate-400">
                  CASS – Asigurări de Sănătate (10%)
                </span>
                <span className="font-semibold text-rose-600">
                  -{formatCurrency(result.cassEmployee, 'ro')}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5 dark:border-slate-700">
                <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                  Deducere Personală Acordată (Art. 77 Cod Fiscal)
                </span>
                <span className="font-semibold text-emerald-600">
                  {formatCurrency(result.personalDeduction, 'ro')}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1.5 dark:border-slate-700">
                <span className="text-slate-600 dark:text-slate-400">
                  Impozit pe Venit (10% din venitul impozabil)
                </span>
                <span className="font-semibold text-rose-600">
                  -{formatCurrency(result.incomeTax, 'ro')}
                </span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-slate-900 dark:text-white">
                <span>Total Taxe Reținute Salariat:</span>
                <span className="text-rose-600">
                  -{formatCurrency(result.casEmployee + result.cassEmployee + result.incomeTax, 'ro')}
                </span>
              </div>
            </div>
          </div>

          {/* EMPLOYER COSTS */}
          <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-800">
            <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              <Building2 className="h-4 w-4 text-teal-600" />
              Costul Total al Angajatorului (Buget Salariu)
            </h3>
            <div className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-100 pb-1.5 dark:border-slate-700">
                <span className="text-slate-600 dark:text-slate-400">Salariu Brut Angajat</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {formatCurrency(result.grossSalary, 'ro')}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1.5 dark:border-slate-700">
                <span className="text-slate-600 dark:text-slate-400">
                  CAM – Contribuția Asiguratorie pentru Muncă (2,25%)
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  +{formatCurrency(result.camEmployer, 'ro')}
                </span>
              </div>
              <div className="flex justify-between pt-1 font-bold text-slate-900 dark:text-white">
                <span>Cost Total Suportat de Angajator:</span>
                <span className="text-teal-600">
                  {formatCurrency(result.totalEmployerCost, 'ro')}
                </span>
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Poverea fiscală totală (angajat + angajator) reprezintă {(result.totalTaxWedge * 100).toFixed(1)}% din costul complet al locului de muncă.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
