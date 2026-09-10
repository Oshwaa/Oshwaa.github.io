import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ivan Tomazar",
  description:
    "Ivan Joshua Tomazar — Full-Stack Developer, backend focused. Node.js, NestJS, FastAPI, Next.js, Vue.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-neutral-50 text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
