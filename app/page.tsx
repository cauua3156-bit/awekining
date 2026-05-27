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
      ctx.fillStyle = "rgba(0,0,0,0.05)"
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

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-40"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.18),transparent_70%)]" />

      {!loaded && (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black">

          <p className="mb-6 animate-pulse tracking-[0.6em] text-green-500">
            SYSTEM HACKED
          </p>

          <h1 className="animate-pulse text-6xl font-black text-green-400 md:text-8xl">
            ACCESSING...
          </h1>

          <div className="mt-10 h-[2px] w-64 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full animate-[loading_2s_linear] bg-green-400" />
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
        </div>
      )}

      {loaded && (
        <>
          <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

            <div className="absolute h-[500px] w-[500px] rounded-full bg-green-500/20 blur-3xl" />

            <div className="relative z-10 max-w-6xl">

              <p className="mb-6 tracking-[0.6em] text-green-500">
                THE SYSTEM IS CONTROLLING YOU
              </p>

              <h1 className="text-7xl font-black uppercase leading-none md:text-[10rem]">
                SAIA DA
                <span className="block text-green-400">
                  MATRIX
                </span>
              </h1>

              <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
                O ebook definitivo sobre foco, disciplina,
                mentalidade forte, dinheiro online e liberdade mental.
              </p>

              <div className="mt-14 flex flex-col items-center justify-center gap-5 md:flex-row">

                <a
                  href="https://pay.kiwify.com.br/dPFQ9dD"
                  target="_blank"
                  className="rounded-2xl bg-green-400 px-12 py-6 text-2xl font-black text-black transition hover:scale-105"
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

          <section
            id="ebook"
            className="relative z-10 px-6 py-32 md:px-20"
          >
            <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-3">

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10">
                <h3 className="mb-6 text-3xl font-black text-green-400">
                  DESPERTE
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Descubra como redes sociais e distrações
                  estão destruindo sua mente silenciosamente.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10">
                <h3 className="mb-6 text-3xl font-black text-green-400">
                  DISCIPLINA
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Aprenda como construir hábitos fortes,
                  foco extremo e mentalidade imparável.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-10">
                <h3 className="mb-6 text-3xl font-black text-green-400">
                  LIBERDADE
                </h3>

                <p className="text-zinc-300 leading-relaxed">
                  Use internet e conhecimento para criar
                  independência financeira e controle da própria vida.
                </p>
              </div>
            </div>

            <div className="mt-20 text-center">
              <a
                href="https://pay.kiwify.com.br/dPFQ9dD"
                target="_blank"
                className="rounded-2xl bg-green-400 px-12 py-6 text-2xl font-black text-black transition hover:scale-105"
              >
                QUERO SAIR DA MATRIX
              </a>
            </div>
          </section>

          <footer className="relative z-10 border-t border-zinc-900 py-10 text-center text-zinc-500">
            © 2026 — EXIT MATRIX
          </footer>
        </>
      )}
    </main>
  )
}
