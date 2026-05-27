export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

      <div className="relative z-10">
        <p className="mb-6 tracking-[0.5em] text-green-500 animate-pulse">
          THE SYSTEM IS LYING TO YOU
        </p>

        <h1 className="text-6xl md:text-8xl font-black leading-none">
          SAIA DA
          <span className="block text-green-400 drop-shadow-[0_0_25px_rgba(34,197,94,0.8)]">
            MATRIX
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg md:text-2xl leading-relaxed text-zinc-300">
          Desperte agora. Recupere seu foco, disciplina e liberdade mental.
        </p>

        <a
          href="https://google.com"
          target="_blank"
          className="mt-10 inline-block rounded-2xl bg-green-400 px-10 py-5 text-xl font-black text-black shadow-[0_0_40px_rgba(34,197,94,0.8)] transition hover:scale-105"
        >
          COMPRAR AGORA
        </a>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-black text-green-400">
              DESPERTE
            </h2>

            <p className="mt-4 text-zinc-300">
              Saia do automático e recupere sua atenção.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-black text-green-400">
              DISCIPLINA
            </h2>

            <p className="mt-4 text-zinc-300">
              Desenvolva foco extremo e mentalidade forte.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-black text-green-400">
              LIBERDADE
            </h2>

            <p className="mt-4 text-zinc-300">
              Use internet e conhecimento para crescer.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
