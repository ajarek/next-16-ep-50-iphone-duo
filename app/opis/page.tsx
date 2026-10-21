import Image from 'next/image';
import React from 'react'

const page = () => {
  return (
    <main
      className="
        relative isolate min-h-screen overflow-hidden
        bg-[#020617] text-white
        before:pointer-events-none before:absolute
        before:inset-0 before:-z-10
        before:bg-[radial-gradient(ellipse_at_15%_10%,rgba(59,130,246,0.32),transparent_42%),radial-gradient(ellipse_at_85%_45%,rgba(14,165,233,0.16),transparent_38%),radial-gradient(ellipse_at_50%_100%,rgba(37,99,235,0.22),transparent_45%)]
        after:pointer-events-none after:absolute
        after:inset-0 after:-z-10
        after:bg-[linear-gradient(180deg,#020617_0%,#071426_48%,#020617_100%)]
      "
    >
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-center text-sm uppercase tracking-[0.4em] text-blue-200">
          iPhone Duo
        </p>

        <h1 className="mt-6 text-center text-5xl font-bold tracking-tight md:text-8xl">
          A new dimension of{" "}
          <span className="w-full flex items-center justify-center bg-linear-to-b from-white via-sky-200 to-blue-500 bg-clip-text text-transparent">
            <Image src="/ui/iphone+duo.png" alt="Logo" width={500} height={750} className="" />
          </span>
        </h1>

        <p className="mt-6 text-center text-lg tracking-[0.25em] text-slate-300">
          FOLD. OPEN. EXPERIENCE MORE.
        </p>
      </section>
    </main>
  );
}

export default page;