'use client'

import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center bg-black bg-cover bg-center py-16 md:py-20 lg:py-20"
      id="work"
    >
      <h2 className="mb-8 md:mb-16 lg:mb-16 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground leading-tight druk-font text-center">
        Наши Проекты
      </h2>

      <ProjectGrid />
    </section>
  );
};

export default Work;

