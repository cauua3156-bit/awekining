import "./globals.css";

export const metadata = {
  title: "Saia da Matrix",
  description:
    "Descubra a verdade por trás do sistema e transforme sua mentalidade financeira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
