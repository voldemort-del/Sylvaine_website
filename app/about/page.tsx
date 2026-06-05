import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Sylviane Paris",
  description:
    "About Sylviane Paris, painter born in France and based in Minneapolis, Minnesota. Theater designer turned fine artist exploring space, light, and memory.",
};

export default function AboutPage() {
  return (
    <main>
      <Nav />

      {/* ── PAGE HEADER ── */}
      <div className="pt-28 md:pt-40 pb-10 md:pb-14 px-6 md:px-14 border-b border-black/10">
        <span className="block text-[9px] tracking-[.28em] uppercase text-[#9a9188] mb-6 md:mb-8">
          About
        </span>
        <h1
          className="font-serif italic font-light text-[#1a1816] leading-[.9]"
          style={{ fontSize: "clamp(40px, 8vw, 88px)" }}
        >
          Sylviane<br />Paris
        </h1>
      </div>

      {/* ── ABOUT THE ARTIST ── */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] border-b border-black/10">
        <div className="px-6 md:px-14 py-12 md:py-20 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-start">
          <span className="block text-[9px] tracking-[.28em] uppercase text-[#9a9188]">
            About the Artist
          </span>
        </div>
        <div className="px-6 md:px-16 py-12 md:py-20">
          <div className="space-y-6 text-[15px] text-[#6a6560] leading-[1.95] max-w-xl">
            <p>
              Born in France and now based in Minnesota, Sylviane Dickson has
              followed a creative path that spans both theater and fine art.
            </p>
            <p>
              My artistic path began in France, where I worked as a theater
              designer, developing a sensitivity to space, composition, and the
              role of light in shaping perception. This early experience
              continues to influence my painting practice.
            </p>
            <p>
              Whether depicting a park, a sculpture garden, an architectural
              space, or a still life, I am drawn to places that reveal a sense
              of presence, memory, and quiet reflection. Through careful
              attention to light, perspective, and atmosphere, my work seeks to
              uncover the subtle connections between people, places, and time.
            </p>
            <p>
              My paintings have been exhibited in France, Denmark, and the
              United States and are held in private collections.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-black/8">
            <p className="font-serif italic text-[13.5px] text-[#9a9188] leading-[1.8] max-w-lg">
              Earlier works may be signed Sylviane Dickson. All works are by
              the same artist, Sylviane Paris.
            </p>
          </div>
        </div>
      </div>

      {/* ── STUDIO ── */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] border-b border-black/10 bg-[#f8f5ef]">
        <div className="px-6 md:px-14 py-10 md:py-14 border-b md:border-b-0 md:border-r border-black/10 flex items-center">
          <span className="block text-[9px] tracking-[.28em] uppercase text-[#9a9188]">
            Studio
          </span>
        </div>
        <div className="px-6 md:px-16 py-10 md:py-14">
          <p
            className="font-serif italic font-light text-[#1a1816] leading-[1.8]"
            style={{ fontSize: "clamp(17px, 2vw, 22px)" }}
          >
            Painter · Minneapolis, Minnesota<br />
            Northrup King Building · Studio 439
          </p>
        </div>
      </div>

      {/* ── ARTIST STATEMENT ── */}
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] border-b border-black/10">
        <div className="px-6 md:px-14 py-12 md:py-20 border-b md:border-b-0 md:border-r border-black/10 flex flex-col justify-start">
          <span className="block text-[9px] tracking-[.28em] uppercase text-[#9a9188] mb-8">
            Artist Statement
          </span>
          <h2
            className="font-serif italic font-light text-[#1a1816] leading-[1.2]"
            style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
          >
            On space,<br />light,<br />and presence.
          </h2>
        </div>
        <div className="px-6 md:px-16 py-12 md:py-20">
          {/* Opening pull-quote */}
          <p
            className="font-serif italic font-light text-[#1a1816] leading-[1.6] mb-10 pb-10 border-b border-black/8"
            style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
          >
            I am drawn to spaces shaped by human hands — parks, architectural
            structures, sculptures, and constructed environments that carry
            intention, care, and time.
          </p>

          <div className="space-y-6 text-[15px] text-[#6a6560] leading-[1.95] max-w-xl">
            <p>
              In my paintings, I explore these places not only for their visual
              presence, but for what they hold beyond it: the quiet imprint of
              those who created them and those who have passed through them.
            </p>
            <p>
              These environments, often familiar and open to all, become sites
              of contemplation where absence and presence coexist.
            </p>
            <p>
              Alongside these public and shared spaces, I am also drawn to more
              intimate scenes — still lifes that reflect a quieter, personal
              dimension of experience. Within these moments, I see a gentle
              celebration of life, where simple objects and arrangements hold
              traces of living, time, and attention.
            </p>
            <p>
              Light, perspective, and composition guide my process. I am
              particularly interested in moments where a shift in angle or
              atmosphere reveals something subtle — when a place or an object
              begins to feel inhabited, even in stillness.
            </p>
            <p>
              Through painting, I seek to honor these spaces and moments by
              capturing their atmosphere and allowing their silent presence to
              emerge. My work invites a slower way of seeing, where the
              ordinary becomes quietly significant and where memory — and a
              quiet celebration of life — can be sensed within both the built
              environment and intimate spaces.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
