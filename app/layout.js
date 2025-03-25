import { Geist, Geist_Mono, Poppins as PoppinsFont } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const Poppins = PoppinsFont({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "Reader's assistant AI ",
  description: "Transform your text into sound. Stay ahead with AI that reads, so you can focus on what matters.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Poppins.variable} antialiased relative`}
      >
        <Header />
        <MobileBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
