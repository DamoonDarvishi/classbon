import './globals.css';
import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';
import { Header } from './_components/header/header';
import { Footer } from './_components/footer/footer';

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-figtree"
});

const yekan = localFont({
  src: [
    {
      path: "../../public/fonts/yekan/yekan-regular.woff",
      weight: "300",
      style: "normal"
    }
  ],
  variable: "--font-yekan"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`dark ${figtree.variable} ${yekan.variable}`} dir='rtl'>
      <body className='min-h-screen grid grid-rows-[80px_1fr_auto] font-bold uppercase dark:bg-base-100 dark:text-base-content'>
        <Header />
        <div className='flex flex-1 justify-center items-center'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}