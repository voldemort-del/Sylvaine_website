export default function NorthrupStrip() {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 px-6 md:px-14 py-4 md:py-5 bg-[#141210] border-b border-white/6">
      <span className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-white/20 shrink-0" />
      <p className="text-[8.5px] md:text-[10px] tracking-[.14em] md:tracking-[.18em] uppercase text-white/45 text-center leading-relaxed">
        Permanent exhibition at the{" "}
        <span className="text-white/65">Northrup King Building</span>
        <span className="hidden md:inline"> · Studio 439 · Minneapolis</span>
        <span className="md:hidden"><br />Studio 439 · Minneapolis</span>
      </p>
      <span className="w-[4px] h-[4px] md:w-[5px] md:h-[5px] rounded-full bg-white/20 shrink-0" />
    </div>
  );
}
