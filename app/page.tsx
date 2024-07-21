import { Header } from './header';
import { Hero } from './hero';
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="readPro.main flex min-h-screen flex-col items-center border-2 border-red-600">
      <Header />
      <Hero />
    </main>
  );
}
