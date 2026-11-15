'use client';

import React, { useMemo } from 'react';
import {
  dateToEpochDay,
  epochDayToDate,
  diffDays,
  SchengenStay,
} from '@/lib/travel/schengen';

interface SchengenTimelineProps {
  stays: SchengenStay[];
  plannedStay?: { entry: string; exit: string } | null;
  checkDate: string;
  overstayDates?: string[];
  lang?: 'en' | 'tr';
}

export function SchengenTimeline({
  stays,
  plannedStay,
  checkDate,
  overstayDates = [],
  lang = 'en',
}: SchengenTimelineProps) {
  const isTr = lang === 'tr';

  const {
    viewStartEpoch,
    viewEndEpoch,
    totalViewDays,
    windowStartEpoch,
    checkDateEpoch,
    staySegments,
    plannedSegment,
    overstaySegments,
    monthTicks,
  } = useMemo(() => {
    const checkEpoch = dateToEpochDay(checkDate);
    const winStartEpoch = checkEpoch - 179;

    // Determine min and max epoch across window, stays, and planned stay
    let minEpoch = winStartEpoch - 15; // 15 days padding to the left
    let maxEpoch = checkEpoch + 30;    // 30 days padding to the right

    // If planned stay extends beyond checkEpoch + 30
    if (plannedStay && plannedStay.exit) {
      try {
        const planExitEpoch = dateToEpochDay(plannedStay.exit);
        if (planExitEpoch + 15 > maxEpoch) {
          maxEpoch = planExitEpoch + 15;
        }
      } catch {
        // ignore invalid planned dates
      }
    }

    // Include any stays that are near
    for (const s of stays) {
      try {
        const sEntry = dateToEpochDay(s.entry);
        const sExit = dateToEpochDay(s.exit);
        if (sEntry - 10 < minEpoch) minEpoch = Math.max(minEpoch - 30, sEntry - 10);
        if (sExit + 10 > maxEpoch) maxEpoch = Math.min(maxEpoch + 30, sExit + 10);
      } catch {
        // ignore
      }
    }

    const totalDays = Math.max(1, maxEpoch - minEpoch);

    // Compute segments
    const computeBar = (startStr: string, endStr: string) => {
      try {
        const s = dateToEpochDay(startStr);
        const e = dateToEpochDay(endStr);
        const startDay = Math.min(s, e);
        const endDay = Math.max(s, e);
        const leftPercent = ((startDay - minEpoch) / totalDays) * 100;
        const widthPercent = Math.max(0.5, ((endDay - startDay + 1) / totalDays) * 100);
        return {
          leftPercent: Math.max(0, Math.min(100, leftPercent)),
          widthPercent: Math.max(0.5, Math.min(100, widthPercent)),
          startDay,
          endDay,
          startStr,
          endStr,
        };
      } catch {
        return null;
      }
    };

    const pastBars = stays
      .map((s) => computeBar(s.entry, s.exit))
      .filter((b): b is NonNullable<typeof b> => b !== null);

    const planBar =
      plannedStay && plannedStay.entry && plannedStay.exit
        ? computeBar(plannedStay.entry, plannedStay.exit)
        : null;

    const overstayBars = overstayDates
      .map((d) => computeBar(d, d))
      .filter((b): b is NonNullable<typeof b> => b !== null);

    // Generate monthly ticks
    const ticks: { epoch: number; label: string; leftPercent: number }[] = [];
    const startDateObj = new Date(minEpoch * 86400000);
    const endDateObj = new Date(maxEpoch * 86400000);

    const curr = new Date(Date.UTC(startDateObj.getUTCFullYear(), startDateObj.getUTCMonth(), 1));
    while (curr <= endDateObj) {
      const tickEpoch = Math.floor(curr.getTime() / 86400000);
      if (tickEpoch >= minEpoch && tickEpoch <= maxEpoch) {
        const leftPercent = ((tickEpoch - minEpoch) / totalDays) * 100;
        const monthName = curr.toLocaleDateString(isTr ? 'tr-TR' : 'en-US', {
          month: 'short',
          timeZone: 'UTC',
        });
        const yearShort = String(curr.getUTCFullYear()).slice(-2);
        ticks.push({
          epoch: tickEpoch,
          label: `${monthName} '${yearShort}`,
          leftPercent,
        });
      }
      curr.setUTCMonth(curr.getUTCMonth() + 1);
    }

    return {
      viewStartEpoch: minEpoch,
      viewEndEpoch: maxEpoch,
      totalViewDays: totalDays,
      windowStartEpoch: winStartEpoch,
      checkDateEpoch: checkEpoch,
      staySegments: pastBars,
      plannedSegment: planBar,
      overstaySegments: overstayBars,
      monthTicks: ticks,
    };
  }, [stays, plannedStay, checkDate, overstayDates, isTr]);

  // Window bracket positions
  const windowLeftPercent = Math.max(
    0,
    ((windowStartEpoch - viewStartEpoch) / totalViewDays) * 100,
  );
  const windowWidthPercent = Math.min(
    100 - windowLeftPercent,
    (180 / totalViewDays) * 100,
  );

  const checkDatePercent = Math.max(
    0,
    Math.min(100, ((checkDateEpoch - viewStartEpoch) / totalViewDays) * 100),
  );

  return (
    <div className="w-full bg-slate-900 text-slate-100 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-800">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-100 tracking-wide uppercase">
            {isTr ? '180 Günlük Hareketli Pencere Zaman Çizelgesi' : '180-Day Rolling Window Timeline'}
          </h3>
          <p className="text-xs text-slate-400">
            {isTr
              ? 'Mavi: Geçmiş seyahatler | Yeşil: Planlanan seyahat | Kırmızı: Kural ihlali (overstay)'
              : 'Indigo: Past stays | Green: Planned stay | Red: Overstay violation'}
          </p>
        </div>
        <div className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
          {isTr ? 'Kontrol Tarihi: ' : 'Check Date: '}
          <span className="text-teal-400 font-semibold">{checkDate}</span>
        </div>
      </div>

      {/* SVG Interactive Visualizer */}
      <div className="relative w-full overflow-hidden select-none">
        <svg
          viewBox="0 0 1000 160"
          className="w-full h-auto"
          preserveAspectRatio="none"
          role="img"
          aria-label={isTr ? 'Schengen zaman çizelgesi görseli' : 'Schengen timeline visualizer'}
        >
          <defs>
            <linearGradient id="windowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0d9488" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.03" />
            </linearGradient>
            <pattern id="stripes" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#10b981" strokeWidth="2" strokeOpacity="0.6" />
            </pattern>
          </defs>

          {/* Timeline Background Track */}
          <rect x="0" y="70" width="1000" height="20" rx="4" fill="#1e293b" />

          {/* Rolling 180-day window highlight */}
          <rect
            x={`${windowLeftPercent * 10}`}
            y="20"
            width={`${windowWidthPercent * 10}`}
            height="100"
            rx="6"
            fill="url(#windowGradient)"
            stroke="#14b8a6"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          {/* Rolling window label */}
          <text
            x={`${(windowLeftPercent + windowWidthPercent / 2) * 10}`}
            y="35"
            fill="#5eead4"
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="monospace"
          >
            {isTr ? '180 Günlük İnceleme Penceresi' : '180-Day Rolling Window [D-179, D]'}
          </text>

          {/* Monthly Ticks */}
          {monthTicks.map((tick, idx) => (
            <g key={idx}>
              <line
                x1={`${tick.leftPercent * 10}`}
                y1="64"
                x2={`${tick.leftPercent * 10}`}
                y2="70"
                stroke="#475569"
                strokeWidth="1.5"
              />
              <text
                x={`${tick.leftPercent * 10}`}
                y="110"
                fill="#94a3b8"
                fontSize="10"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                {tick.label}
              </text>
            </g>
          ))}

          {/* Past Stays Bars */}
          {staySegments.map((seg, idx) => (
            <g key={`stay-${idx}`}>
              <rect
                x={`${seg.leftPercent * 10}`}
                y="72"
                width={`${seg.widthPercent * 10}`}
                height="16"
                rx="3"
                fill="#6366f1"
                className="transition-all hover:opacity-80"
              >
                <title>{`${seg.startStr} -> ${seg.endStr}`}</title>
              </rect>
            </g>
          ))}

          {/* Planned Stay Bar */}
          {plannedSegment && (
            <g>
              <rect
                x={`${plannedSegment.leftPercent * 10}`}
                y="72"
                width={`${plannedSegment.widthPercent * 10}`}
                height="16"
                rx="3"
                fill="#10b981"
                stroke="#34d399"
                strokeWidth="1"
              >
                <title>{`Planned: ${plannedSegment.startStr} -> ${plannedSegment.endStr}`}</title>
              </rect>
            </g>
          )}

          {/* Overstay Highlights (Red) */}
          {overstaySegments.map((seg, idx) => (
            <g key={`overstay-${idx}`}>
              <rect
                x={`${seg.leftPercent * 10 - 1}`}
                y="68"
                width={`${Math.max(3, seg.widthPercent * 10 + 2)}`}
                height="24"
                rx="2"
                fill="#ef4444"
                stroke="#fca5a5"
                strokeWidth="1"
              >
                <title>{`Overstay Violation: ${seg.startStr}`}</title>
              </rect>
            </g>
          ))}

          {/* Check Date Marker Line */}
          <line
            x1={`${checkDatePercent * 10}`}
            y1="45"
            x2={`${checkDatePercent * 10}`}
            y2="125"
            stroke="#f59e0b"
            strokeWidth="2.5"
          />
          <polygon
            points={`${checkDatePercent * 10 - 5},45 ${checkDatePercent * 10 + 5},45 ${checkDatePercent * 10},53`}
            fill="#f59e0b"
          />
          <text
            x={`${checkDatePercent * 10}`}
            y="138"
            fill="#fbbf24"
            fontSize="10"
            fontWeight="bold"
            textAnchor="middle"
            fontFamily="monospace"
          >
            {isTr ? 'Kontrol' : 'Check Date'}
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-indigo-500 inline-block" />
          <span>{isTr ? 'Geçmiş Seyahatler' : 'Past Stays'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-emerald-500 border border-emerald-400 inline-block" />
          <span>{isTr ? 'Planlanan Seyahat' : 'Planned Trip'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded border border-teal-400 border-dashed bg-teal-500/10 inline-block" />
          <span>{isTr ? '180 Günlük Pencere' : '180-Day Window'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-1 bg-amber-500 inline-block" />
          <span>{isTr ? 'Kontrol Tarihi' : 'Check Date'}</span>
        </div>
        {overstaySegments.length > 0 && (
          <div className="flex items-center gap-2 text-rose-400 font-semibold">
            <span className="w-3.5 h-3.5 rounded bg-rose-500 inline-block" />
            <span>{isTr ? 'Kural İhlali (Overstay)' : 'Overstay Violation'}</span>
          </div>
        )}
      </div>
    </div>
  );
}
