import Image from "next/image";

const FossilFiles = () => {
  return (
    <div className="flex md:flex-row flex-col md:h-screen h-full w-full">
      <div className="w-full md:h-full border-r border-stone-900 dark:border-stone-300 relative">
        <div className="relative w-full md:h-full aspect-square">
          <Image
            src="https://ik.imagekit.io/danielcmadeley/dino/mxdeley_pixar_styled_32bit_pixelated_dinosaur_themed_notice_b_ef872751-925f-4cff-8282-dde37a3891b2_3.png"
            alt="Desert landscape"
            fill
            className="opacity-50 object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-stone-950/30 backdrop-blur-sm" />

        {/* Overlay divs */}
        <div className="absolute inset-0 flex items-end">
          <div className="flex flex-col p-4">
            <h1 className="md:text-8xl text-5xl text-stone-50 font-nanum">
              Fossil Files
            </h1>
            <p className="md:text-sm text-xs text-stone-50 md:max-w-sm max-w-xs">
              Fossil Files is our comprehensive knowledge hub dedicated to all
              facets of the web industry.
            </p>
          </div>
          <div className="absolute bottom-4 right-4 flex items-end">
            <a href="/fossil-files">
              <Image
                src="https://ik.imagekit.io/danielcmadeley/dino/Group%209.svg"
                alt="Navigation icon"
                width={300}
                height={300}
                className="w-[100px] h-[100px] md:w-[300px] md:h-[300px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-full md:h-full z-10">
        <a
          href="/fossil-files?item=Frontend"
          className="md:w-[100px] w-full h-full bg-[#F9E4B3] md:border-r border-stone-900  flex items-end md:py-[8rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors"
        >
          <h1 className="text-stone-900 md:text-6xl text-4xl font-nanum md:-rotate-90 py-2 md:py-0">
            Frontend.
          </h1>
        </a>

        <a
          href="/fossil-files?item=Backend"
          className="md:w-[100px] w-full h-full bg-[#F9E4B3] md:border-r border-stone-900  flex items-end md:py-[8rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors"
        >
          <h1 className="text-stone-900 md:text-6xl text-4xl font-nanum md:-rotate-90 py-2 md:py-0">
            Backend.
          </h1>
        </a>

        <a
          href="/fossil-files?item=Design"
          className="md:w-[100px] w-full h-full bg-[#F9E4B3] md:border-r border-stone-900  flex items-end md:py-[6.5rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors"
        >
          <h1 className="text-stone-900 md:text-6xl text-4xl font-nanum md:-rotate-90 py-2 md:py-0">
            Design.
          </h1>
        </a>

        <a
          href="/fossil-files?item=Market"
          className="md:w-[100px] w-full h-full bg-[#F9E4B3] md:border-r border-stone-900  flex items-end md:py-[9rem] justify-center hover:bg-[#F9E4B3]/80 transition-colors"
        >
          <h1 className="text-stone-900 md:text-6xl text-4xl font-nanum md:-rotate-90 py-2 md:py-0">
            Marketing.
          </h1>
        </a>
      </div>
    </div>
  );
};

export default FossilFiles;
