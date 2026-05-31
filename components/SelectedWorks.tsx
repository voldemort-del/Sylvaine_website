import Image from "next/image";
import Link from "next/link";

const featured = [
  { img: "/souls-of-the-park.jpg",  title: "The Souls of the Park", series: "Divine Presence",  href: "/study/divine-presence" },
  { img: "/timeless-craft.jpg",     title: "Timeless Craft",        series: "Living Moments",   href: "/study/living-moments" },
  { img: "/whispering-passage.jpg", title: "Whispering Passage",    series: "Enchanted Path",   href: "/study/enchanted-path" },
];

export default function SelectedWorks() {
  return (
    <section className="px-6 md:px-14 section-space border-t border-black/10">
      <div className="flex justify-between items-baseline border-b border-black/10 pb-5 mb-12 md:mb-14 reveal">
        <span className="text-[9px] tracking-[.22em] uppercase text-[#9a9188]">Selected works</span>
        <Link href="/study" className="text-[9px] md:text-[9.5px] tracking-[.16em] md:tracking-[.18em] uppercase text-[#9a9188] hover:text-[#1a1816] transition-colors duration-300">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
        {featured.map((p) => (
          <Link key={p.title} href={p.href} className="group reveal">
            <div className="artwork-frame w-full mb-5">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <p className="font-serif italic text-[16px] md:text-[17px] text-[#1a1816] mb-1.5">{p.title}</p>
            <p className="text-[9px] md:text-[9.5px] tracking-[.12em] uppercase text-[#9a9188]">{p.series} · Acrylic painting</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
