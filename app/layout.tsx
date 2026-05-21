import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sylviane Paris-Dickson",
  description: "I paint spaces shaped by human hands, exploring the quiet presence and memory they hold.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}