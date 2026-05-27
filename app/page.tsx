"use client"

import { useEffect, useRef, useState } from "react"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const letters =
      "アカサタナハマヤラABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*"

    const fontSize = 14
    const columns = canvas.width / fontSize

    const rainDrops: number[] = []

    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.06)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#22c55e"
      ctx.font = fontSize + "px monospace"

      for (let i = 0; i < rainDrops.length; i++) {
        const text = letters.charAt(
          Math.floor(Math.random() * letters.length)
        )

        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize)

        if (
          rainDrops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          rainDrops[i] = 0
        }

        rainDrops[i]++
      }
    }

    const interval = setInterval(draw, 30)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* MATRIX BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-40"
      />

      {/* GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18),transparent_70%)]" />

      {/* INTRO */}
      {!loaded && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black">

          <div className="absolute inset-0 animate-pulse bg-green-500/5" />

          <p className="mb-6 animate-pulse tracking-[0.6em] text-green-500">
            SYSTEM HACKED
          </p>

          <h1 className="animate-pulse text-6xl font-black text-green-400 md:text-8xl">
            ACCESSING...
          </h1>

          <div className="mt-10 h-[2px] w-64 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full animate-[loading_2s_linear] bg-green-400 shadow-[0_0_30px_rgba(34,197,94,1)]" />
          </div>

          <style jsx>{`
            @keyframes loading {
              from {
                width: 0%;
              }
              to {
                width: 100%;
              }
            }
          `}</style>

          <audio autoPlay>
            <source
              src="https://files.catbox.moe/8b5n5v.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
      )}

      {/* MAIN SITE */}
      {loaded && (
        <>
          {/* HERO */}
          <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

            <div className="absolute h-[500px] w-[500px] rounded-full bg-green-500/20 blur-3xl" />

            <div className="relative z-10 max-w-6xl">

              <p className="mb-6 animate-pulse tracking-[0.6em] text-green-500">
                THE SYSTEM IS CONTROLLING YOU
              </p>

              <h1 className="text-7xl font-black uppercase leading-none tracking-[0.1em] md:text-[10rem]">
                SAIA DA
                <span className="block text-green-400 drop-shadow-[0_0_35px_rgba(34,197,94,1)]">
                  MATRIX
                </span>
              </h1>

              <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
                Um guia brutalmente honesto sobre foco, disciplina,
                independência financeira, mentalidade forte e liberdade
                mental em um mundo programado para destruir sua atenção.
              </p>

              <div className="mt-14 flex flex-col items-center justify-center gap-5 md:flex-row">

                <a
                  href="https://google.com"
                  target="_blank"
                  className="rounded-2xl border border-green-400 bg-green-500/10 px-12 py-6 text-2xl font-black text-green-400 backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-green-500/20 hover:shadow-[0_0_50px_rgba(34,197,94,0.8)]"
                >
                  COMPRAR AGORA
                </a>

                <a
                  href="#ebook"
                  className="rounded-2xl border border-zinc-700 px-12 py-6 text-2xl transition hover:border-green-400"
                >
                  DESCUBRIR
                </a>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section
            id="ebook"
            className="relative z-10 px-6 py-32 md:px-20"
          >
            <div className="mx-auto max-w-7xl">

              <div className="grid items-center gap-20 md:grid-cols-2">

                <div>
                  <p className="mb-4 tracking-[0.4em] text-green-500">
                    O MANIFESTO
                  </p>

                  <h2 className="text-5xl font-black leading-tight md:text-7xl">
                    VOCÊ ESTÁ
                    <span className="block text-green-400">
                      NO AUTOMÁTICO?
                    </span>
                  </h2>

                  <p className="mt-8 text-lg leading-relaxed text-zinc-300">
                    A maioria das pessoas passa anos vivendo presa
                    em padrões invisíveis sem perceber.
                  </p>

                  <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                    Redes sociais, distrações, dopamina barata,
                    procrastinação e hábitos destrutivos estão
                    consumindo sua mente diariamente.
                  </p>

                  <ul className="mt-10 space-y-4 text-lg text-zinc-200">
                    <li>✔ Como recuperar seu foco</li>
                    <li>✔ Como desenvolver disciplina extrema</li>
                    <li>✔ Como ganhar dinheiro online</li>
                    <li>✔ Como reconstruir sua mente</li>
                    <li>✔ Como sair do automático</li>
                    <li>✔ Como dominar sua atenção</li>
                    <li>✔ Como construir liberdade</li>
                  </ul>

                  <a
                    href="https://google.com"
                    target="_blank"
                    className="mt-12 inline-block rounded-2xl bg-green-400 px-12 py-6 text-2xl font-black text-black shadow-[0_0_60px_rgba(34,197,94,0.8)] transition hover:scale-105"
                  >
                    QUERO DESPERTAR
                  </a>
                </div>

                {/* BOOK */}
                <div className="relative flex justify-center">

                  <div className="absolute h-[550px] w-[550px] rounded-full bg-green-500/20 blur-3xl" />

                  <div className="relative rounded-[2.5rem] border border-green-400/30 bg-zinc-900/70 p-5 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,197,94,0.4)]">

                    <div className="flex h-[600px] w-[360px] flex-col justify-between rounded-[2rem] border border-zinc-800 bg-black p-8">

                      <div>
                        <p className="mb-6 tracking-[0.4em] text-green-500">
                          EBOOK
                        </p>

                        <h3 className="text-6xl font-black leading-none">
                          SAIA
                          <span className="block text-green-400">
                            DA
                          </span>
                          MATRIX
                        </h3>
                      </div>

                      <p className="text-zinc-500">
                        O manifesto da liberdade mental.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="relative z-10 grid gap-8 px-6 py-24 md:grid-cols-3 md:px-20">

            {[
              {
                title: "DESPERTE",
                text: "Entenda como o sistema destrói sua atenção diariamente.",
              },
              {
                title: "DISCIPLINA",
                text: "Construa hábitos fortes e foco extremo.",
              },
              {
                title: "LIBERDADE",
                text: "Use internet e conhecimento para crescer.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-10 backdrop-blur-xl transition hover:-translate-y-2 hover:border-green-400/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.2)]"
              >
                <h3 className="mb-6 text-3xl font-black text-green-400">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-zinc-300">
                  {item.text}
                </p>
              </div>
            ))}
          </section>

          {/* FINAL */}
          <section className="relative z-10 px-6 py-32 md:px-20">

            <div className="relative overflow-hidden rounded-[3rem] border border-green-400/20 bg-zinc-900/70 p-16 text-center backdrop-blur-2xl">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),transparent_70%)]" />

              <div className="relative">

                <p className="mb-4 tracking-[0.5em] text-green-500">
                  THE CHOICE IS YOURS
                </p>

                <h2 className="text-5xl font-black leading-tight md:text-7xl">
                  CONTINUAR
                  <span className="block text-green-400">
                    DORMINDO?
                  </span>
                </h2>

                <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-zinc-300">
                  Ou despertar para construir sua própria realidade.
                </p>

                <a
                  href="https://google.com"
                  target="_blank"
                  className="mt-12 inline-block rounded-2xl bg-green-400 px-12 py-6 text-2xl font-black text-black shadow-[0_0_60px_rgba(34,197,94,0.9)] transition hover:scale-105"
                >
                  SAIR DA MATRIX
                </a>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="relative z-10 border-t border-zinc-900 py-10 text-center text-zinc-500">
            © 2026 — EXIT MATRIX
          </footer>
        </>
      )}
    </main>
  )
}