"use client"

import { useEffect, useRef, useState } from "react"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [entered, setEntered] = useState(false)

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
      "アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*"

    const fontSize = 14
    const columns = Math.floor(window.innerWidth / fontSize)

    const drops: number[] = []

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "#22c55e"
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)]

        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* MATRIX */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-40"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.15),transparent_70%)]" />

      {/* SCANLINES */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light">
        <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.35)_50%)] bg-[length:100%_4px]" />
      </div>

      {/* INTRO */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="absolute h-[450px] w-[450px] rounded-full bg-green-500/20 blur-3xl" />

        <div className="relative">
          <p className="mb-6 animate-pulse tracking-[0.6em] text-green-500">
            SYSTEM ACTIVE
          </p>

          <h1 className="text-7xl font-black uppercase tracking-[0.2em] text-green-400 drop-shadow-[0_0_35px_rgba(34,197,94,1)] md:text-[10rem]">
            EXIT
          </h1>

          <div className="mx-auto mt-10 h-[2px] w-40 bg-green-500 shadow-[0_0_20px_rgba(34,197,94,1)]" />

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-2xl">
            Você foi condicionado a viver distraído.
            <br />
            Está na hora de despertar.
          </p>

          <div className="mt-14 flex flex-col items-center justify-center gap-5 md:flex-row">
            <button
              onClick={() => setEntered(true)}
              className="rounded-2xl border border-green-400 bg-green-500/10 px-10 py-5 text-xl font-black text-green-400 backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-green-500/20 hover:shadow-[0_0_40px_rgba(34,197,94,0.8)]"
            >
              ENTER THE MATRIX
            </button>

            <a
              href="#ebook"
              className="rounded-2xl border border-zinc-700 px-10 py-5 text-xl transition hover:border-green-400"
            >
              DESCUBRIR
            </a>
          </div>
        </div>
      </section>

      {/* LANDING */}
      {entered && (
        <>
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
                    SAIA DA
                    <span className="block text-green-400">
                      MATRIX
                    </span>
                  </h2>

                  <p className="mt-8 text-lg leading-relaxed text-zinc-300">
                    Um guia brutalmente honesto sobre foco,
                    disciplina, independência e liberdade mental
                    na era digital.
                  </p>

                  <ul className="mt-10 space-y-4 text-lg text-zinc-200">
                    <li>✔ Como recuperar sua atenção</li>
                    <li>✔ Como desenvolver disciplina extrema</li>
                    <li>✔ Como usar a internet para crescer</li>
                    <li>✔ Como parar de viver no automático</li>
                    <li>✔ Como reconstruir sua mentalidade</li>
                  </ul>

                  <a
                    href="https://pay.kiwify.com.br/SEULINK"
                    target="_blank"
                    className="mt-12 inline-block rounded-2xl bg-green-400 px-12 py-6 text-2xl font-black text-black shadow-[0_0_50px_rgba(34,197,94,0.8)] transition hover:scale-105"
                  >
                    QUERO DESPERTAR
                  </a>
                </div>

                <div className="relative flex justify-center">
                  <div className="absolute h-[500px] w-[500px] rounded-full bg-green-500/20 blur-3xl" />

                  <div className="relative rounded-[2.5rem] border border-green-400/30 bg-zinc-900/70 p-5 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,197,94,0.4)]">
                    <div className="flex h-[550px] w-[340px] flex-col justify-between rounded-[2rem] border border-zinc-800 bg-black p-8">
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
                  href="https://pay.kiwify.com.br/SEULINK"
                  target="_blank"
                  className="mt-12 inline-block rounded-2xl bg-green-400 px-12 py-6 text-2xl font-black text-black shadow-[0_0_60px_rgba(34,197,94,0.9)] transition hover:scale-105"
                >
                  SAIR DA MATRIX
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-900 py-10 text-center text-zinc-500">
        © 2026 — EXIT MATRIX
      </footer>
    </main>
  )
}
