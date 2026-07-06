interface SectionRailProps {
  current: number;
  total?: number;
  label?: string;
}

export function SectionRail({ current, total = 7, label }: SectionRailProps) {
  const formatNum = (num: number) => String(num).padStart(2, "0");

  return (
    /* Adicionado: mx-auto para centralizar e max-w-[1340px] (ou o valor que preferir) para encurtar */
    <div className="mx-auto mt-20 flex max-w-[1340px] items-center justify-between font-mono-label text-[11px] tracking-[0.2em] text-foreground/40 border-t border-white/[0.03] pt-8 w-full">
      {/* Indicador da seção anterior/atual */}
      <span className="tabular-nums">{formatNum(current)}</span>
      
      {/* O Rail Dinâmico */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, idx) => {
          const isCurrent = idx + 1 === current;
          const barWidth = isCurrent 
            ? "w-16 bg-jw-yellow opacity-100" 
            : "w-8 bg-white/15";

          return (
            <span
              key={idx}
              className={`h-[1px] transition-all duration-500 ${barWidth}`}
            />
          );
        })}
      </div>

      {/* Indicador da próxima seção ou total */}
      <span className="tabular-nums">
        {label ? label : formatNum(Math.min(current + 1, total))}
      </span>
    </div>
  );
}