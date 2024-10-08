import { JetBrains_Mono } from "@next/font/google"
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import BlindsTransition from "@/components/BlindsTransition";

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500" ,"600", "700", "800"],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "dom.dev",
  description: "A portfolio created by Dominique Legaspi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable}`}
      >
        <Header />
        <BlindsTransition />
        <PageTransition>{children}</PageTransition>

      </body>
    </html>
  );
}
