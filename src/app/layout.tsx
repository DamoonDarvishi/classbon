import "./globals.css";
// import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

// const figtree = Figtree({
//   display: "swap",
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-figtree",
// });
const source = localFont({
  src: [
    {
      path: "../../public/fonts/static/SourceCodePro-Regular.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-source",
});

const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/yekan/yekan-regular.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${source.variable}`} dir="ltr">
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] font-bold uppercase dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
