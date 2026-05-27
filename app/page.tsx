export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-4 tracking-[0.5em] text-green-500">
            THE SYSTEM IS LYING TO YOU
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none">
            SAIA DA
            <span className="block text-green-400">
              MATRIX
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg md:text-2xl leading-relaxed text-zinc-300">
            Descubra como recuperar foco, disciplina e liberdade
            mental em um mundo programado para destruir sua atenção.
          </p>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5">
            <a
              href="https://google.com"
              target="_blank"
              className="rounded-2xl bg-green-400 px-10 py-5 text-xl font-black text-black"
            >
              COMPRAR AGORA
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-8 px-6 py-24 md:grid-cols-3 md:px-20">
        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-10">
          <h3 className="mb-6 text-3xl font-black text-green-400">
            DESPERTE
          </h3>

          <p className="leading-relaxed text-zinc-300">
            Entenda como distrações controlam sua mente diariamente.
          </p>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-10">
          <h3 className="mb-6 text-3xl font-black text-green-400">
            DISCIPLINA
          </h3>

          <p className="leading-relaxed text-zinc-300">
            Desenvolva foco extremo e mentalidade forte.
          </p>
        </div>

        <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-10">
          <h3 className="mb-6 text-3xl font-black text-green-400">
            LIBERDADE
          </h3>

          <p className="leading-relaxed text-zinc-300">
            Use internet e conhecimento para crescer.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-500">
        © 2026 — EXIT MATRIX
      </footer>
    </main>
  )
}