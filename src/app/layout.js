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
      <body className={`${font.className} text-gray-300 bg-sky-950`}>{children}</body>
    </html>
  );
}
