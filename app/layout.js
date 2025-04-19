import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Raul Lize | Desenvolvedor Web",
  description: "Portfólio profissional de Raul Lize, Desenvolvedor Web e estudante de Tecnologia em Sistemas para Internet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-black text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
