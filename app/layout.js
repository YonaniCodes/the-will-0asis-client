import { Children } from "react";
import Navigation from "./_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import ReservationProvider from "./_components/ReservationContext";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  // weight: ["300", "400", "500", "600", "700"],
  // variable: "--font-josefin",
});

export const metadata = {
  // title: "The Wild oasis",
  title: {
    template: "%s The wild Oasis",
    default: "Welcom /The wild Oasis",
  },
  description: "The Wild Oasis is a luxury cabin rental company",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} bg-primary-950 flex flex-col min-h-screen text-primary-100 relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
