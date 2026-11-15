'use client';

import React, { useState } from 'react';
import { Users, HelpCircle, Table, CheckCircle2 } from 'lucide-react';
import { calculatePersonalDeduction } from '@/lib/salary/ro';
import { formatCurrency } from '@/lib/formatters';

export function DeducerePersonalaInfoTool() {
  const [testGross, setTestGross] = useState<number>(4500);
  const [dependants, setDependants] = useState<number>(1);
  const [isUnder26, setIsUnder26] = useState<boolean>(false);
  const [schoolChildren, setSchoolChildren] = useState<number>(1);

  const currentDeduction = calculatePersonalDeduction(
    testGross,
    dependants,
    isUnder26,
    schoolChildren,
  );

  const sampleSalaries = [4050, 4500, 5000, 5500, 6000, 6050, 7000];

  return (
    <div className="space-y-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      {/* HEADER */}
      <div className="border-b border-slate-100 pb-5 dark:border-slate-800">
        <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
          <Users className="h-6 w-6 text-teal-600" />
          Deducere Personală 2026: Grilă Oficială și Simulator Art. 77 Cod Fiscal
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Află exact ce deducere personală de bază și suplimentară îți revine în funcție de salariul brut, persoanele în întreținere, vârstă și numărul de copii școlarizați.
        </p>
      </div>

      {/* INTERACTIVE SIMULATOR */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 rounded-xl bg-slate-50 p-6 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
        <div className="space-y-4 md:col-span-6">
          <div>
            <label htmlFor="ro-deducere-gross" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Salariu Brut de Test: {formatCurrency(testGross, 'ro')}
            </label>
            <input
              id="ro-deducere-gross"
              type="range"
              min={4050}
              max={7000}
              step={50}
              value={testGross}
              onChange={(e) => setTestGross(parseInt(e.target.value, 10))}
              className="mt-2 w-full accent-teal-600 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>Minim: 4.050 lei</span>
              <span>Plafon: 6.050 lei</span>
              <span>Peste 6.050 lei (0 lei)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="ro-deducere-dep" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Persoane Întreținute
              </label>
              <select
                id="ro-deducere-dep"
                value={dependants}
                onChange={(e) => setDependants(parseInt(e.target.value, 10))}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value={0}>0 întreținuți (20%)</option>
                <option value={1}>1 întreținut (25%)</option>
                <option value={2}>2 întreținuți (30%)</option>
                <option value={3}>3 întreținuți (35%)</option>
                <option value={4}>4+ întreținuți (45%)</option>
              </select>
            </div>

            <div>
              <label htmlFor="ro-deducere-children" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Copii la Școală (+100 lei)
              </label>
              <select
                id="ro-deducere-children"
                value={schoolChildren}
                onChange={(e) => setSchoolChildren(parseInt(e.target.value, 10))}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value={0}>0 copii</option>
                <option value={1}>1 copil (+100 lei)</option>
                <option value={2}>2 copii (+200 lei)</option>
                <option value={3}>3 copii (+300 lei)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={isUnder26}
                onChange={(e) => setIsUnder26(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Tânăr până în 26 de ani (+15% din salariul minim deducere de bază)
              </span>
            </label>
          </div>
        </div>

        {/* SIMULATOR RESULT BOX */}
        <div className="flex flex-col justify-center rounded-xl bg-teal-50 border border-teal-200 p-5 dark:border-teal-900 dark:bg-teal-950/40 md:col-span-6">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
            Deducere Personală Totală Acordată
          </span>
          <div className="mt-2 text-3xl font-extrabold text-teal-700 dark:text-teal-300">
            {formatCurrency(currentDeduction.totalDeduction, 'ro')}
          </div>
          <div className="mt-3 space-y-1.5 text-xs text-teal-900 dark:text-teal-200">
            <div className="flex justify-between">
              <span>Deducere de bază (regresivă):</span>
              <span className="font-semibold">{formatCurrency(currentDeduction.baseDeduction, 'ro')}</span>
            </div>
            <div className="flex justify-between">
              <span>Deducere suplimentară (copii + sub 26):</span>
              <span className="font-semibold">{formatCurrency(currentDeduction.supplementalDeduction, 'ro')}</span>
            </div>
            <div className="flex justify-between border-t border-teal-200 pt-1 font-bold dark:border-teal-800">
              <span>Economie lunară la impozit (10%):</span>
              <span className="text-emerald-700 dark:text-emerald-400">
                +{formatCurrency(currentDeduction.totalDeduction * 0.1, 'ro')} bani în mână
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* STATUTORY MATRIX TABLE */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
          Tabel de Sinteză a Deducerilor Personale de Bază (Art. 77 Alin. 4)
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              <tr>
                <th className="px-3 py-2.5">Salariu Brut</th>
                <th className="px-3 py-2.5">Fără Întreținuți (20%)</th>
                <th className="px-3 py-2.5">1 Întreținut (25%)</th>
                <th className="px-3 py-2.5">2 Întreținuți (30%)</th>
                <th className="px-3 py-2.5">3 Întreținuți (35%)</th>
                <th className="px-3 py-2.5">4+ Întreținuți (45%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {sampleSalaries.map((s) => {
                const d0 = calculatePersonalDeduction(s, 0).baseDeduction;
                const d1 = calculatePersonalDeduction(s, 1).baseDeduction;
                const d2 = calculatePersonalDeduction(s, 2).baseDeduction;
                const d3 = calculatePersonalDeduction(s, 3).baseDeduction;
                const d4 = calculatePersonalDeduction(s, 4).baseDeduction;

                return (
                  <tr key={s} className={s === 4050 ? 'bg-teal-50/40 font-semibold dark:bg-teal-950/20' : ''}>
                    <td className="px-3 py-2 font-bold text-slate-900 dark:text-white">
                      {formatCurrency(s, 'ro')}
                    </td>
                    <td className="px-3 py-2">{formatCurrency(d0, 'ro')}</td>
                    <td className="px-3 py-2">{formatCurrency(d1, 'ro')}</td>
                    <td className="px-3 py-2">{formatCurrency(d2, 'ro')}</td>
                    <td className="px-3 py-2">{formatCurrency(d3, 'ro')}</td>
                    <td className="px-3 py-2 font-semibold text-teal-600">{formatCurrency(d4, 'ro')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
