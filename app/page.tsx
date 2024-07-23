import { Header } from './header';
import { Hero } from './hero';
import { Services } from './services';
import { Menu } from './menu';
import { Review } from './review';
import { CTA } from './cta'
import { Readex_Pro } from 'next/font/google';

const readexPro = Readex_Pro({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main className="readPro.main flex min-h-screen w-full flex-col text-lg items-center bg-orange-50">
      <Header />
      <Hero />
      <Services />
      <Menu />
      <Review />
      <CTA />
    </main>
  );
}
