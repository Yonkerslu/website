import {  Contact, Hero } from "@/components";
import { Console } from "console";
import { Pacifico } from "next/font/google";


const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Contact />
    </main>
  );
  };
