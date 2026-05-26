export default function SaiaDaMatrixLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent blur-3xl" />

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 z-10">
          SAIA DA
          <span className="text-green-400 block">MATRIX</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-2xl text-zinc-300 z-10 leading-relaxed">
          O manifesto da liberdade mental na era digital.
          Descubra como recuperar foco, disciplina e construir uma vida fora do automático.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10 z-10">
          <button className="bg-green-400 hover:bg-green-300 transition text-black font-bold px-8 py-4 rounded-2xl text-lg shadow-2xl">
            COMPRAR AGORA
          </button>

          <button className="border border-zinc-700 hover:border-green-400 transition px-8 py-4 rounded-2xl text-lg">
            VER MAIS
          </button>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-20 py-20">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-400">DESPERTE</h2>
          <p className="text-zinc-300 leading-relaxed">
            Entenda como distrações, redes sociais e hábitos automáticos controlam sua mente diariamente.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-400">DISCIPLINA</h2>
          <p className="text-zinc-300 leading-relaxed">
            Aprenda a desenvolver foco extremo, consistência e mentalidade forte para evoluir.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold mb-4 text-green-400">LIBERDADE</h2>
          <p className="text-zinc-300 leading-relaxed">
            Descubra como usar internet, conhecimento e habilidades para construir independência.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-20 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-5xl font-black mb-8 leading-tight">
            VOCÊ ESTÁ
            <span className="text-green-400 block">NO AUTOMÁTICO?</span>
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            A maioria das pessoas passa anos vivendo sem perceber que está presa em padrões invisíveis.
          </p>

          <p className="text-zinc-300 text-lg leading-relaxed mb-6">
            Este ebook foi criado para pessoas que querem despertar mentalmente, recuperar o controle da própria vida e construir algo real.
          </p>

          <ul className="space-y-3 text-zinc-200 text-lg">
            <li>✔ Como recuperar seu foco</li>
            <li>✔ Como desenvolver disciplina extrema</li>
            <li>✔ Como usar a internet para ganhar dinheiro</li>
            <li>✔ Como parar de viver no automático</li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-gradient-to-b from-green-400 to-green-700 rounded-3xl p-[2px] shadow-[0_0_50px_rgba(74,222,128,0.5)]">
            <div className="bg-black rounded-3xl p-10 w-[320px] h-[480px] flex flex-col justify-between">
              <div>
                <p className="text-green-400 uppercase tracking-[0.3em] text-sm mb-4">Ebook</p>

                <h3 className="text-5xl font-black leading-none">
                  SAIA DA
                  <span className="block text-green-400">MATRIX</span>
                </h3>
              </div>

              <p className="text-zinc-400 text-sm">
                O Manifesto da Liberdade Mental na Era Digital
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-20">
        <div className="bg-zinc-900 border border-green-400/20 rounded-[2rem] p-10 md:p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6">A DECISÃO É SUA.</h2>

          <p className="max-w-3xl mx-auto text-zinc-300 text-lg md:text-2xl leading-relaxed mb-10">
            Continuar vivendo distraído...
            <br />
            ou despertar e construir sua própria realidade.
          </p>

          <button className="bg-green-400 hover:bg-green-300 transition text-black font-black px-10 py-5 rounded-2xl text-xl shadow-[0_0_40px_rgba(74,222,128,0.6)]">
            QUERO SAIR DA MATRIX
          </button>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-10 text-center text-zinc-500">
        © 2026 — Saia da Matrix
      </footer>
    </div>
  )
}
  