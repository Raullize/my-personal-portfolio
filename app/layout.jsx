import { Inter, Poppins } from "next/font/google";
import ClientRootWrapper from "./components/ui/ClientRootWrapper";
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
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans bg-black text-gray-100 overflow-x-hidden min-h-screen`}
      >
        <ClientRootWrapper>
          {children}
        </ClientRootWrapper>
      </body>
    </html>
  );
} 