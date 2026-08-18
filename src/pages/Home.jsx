import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import AboutTeaser from '../components/home/AboutTeaser';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <AboutTeaser />
    </>
  );
}
