import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Kirk Espina",
  description: "Kirk Espina - Full-stack Web Developer Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} text-gray-300 bg-gradient-to-tl from-slate-900 via-indigo-950 to-teal-900`}>{children}</body>
    </html>
  );
}
