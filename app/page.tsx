import { Header } from './header';
import { Hero } from './hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center border-2 border-red-600">
      <Header />
      <Hero />
    </main>
  );
}
