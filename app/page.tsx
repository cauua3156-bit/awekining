export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl md:text-8xl font-black">
        SAIA DA
        <span className="block text-green-400">
          MATRIX
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg md:text-2xl text-zinc-300">
        Desperte. Recupere seu foco. Reconstrua sua mente.
      </p>

      <a
        href="https://google.com"
        target="_blank"
        className="mt-10 rounded-2xl bg-green-400 px-10 py-5 text-xl font-black text-black"
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
    </main>
  )
}
