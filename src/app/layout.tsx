import './globals.css';
import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';

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
    <html className={`${figtree.variable} ${yekan.variable}`} dir='rtl'>
      <body className='flex flex-col min-h-screen font-bold uppercase'>
      <header className='bg-gray-200 flex items-center justify-center h-20'>دوره معماری ری اکت</header>
      <div className='flex flex-1 justify-center items-center text-3xl'>{children}</div>
        <footer className='bg-gray-200 flex items-center justify-center h-20'>Footer</footer>
      </body>
    </html>
  )
}