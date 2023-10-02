import Image from 'next/image'
import reflejosImg from '@/assets/reflejos.webp'
import SectionSongs from './components/SectionSongs'
import QuienSoy from './components/QuienSoy'


export default function Home() {
  return (
    <main className='font-permanent-marker'>
      <Image 
        src={reflejosImg}
        alt='reflejos'
        className='w-full lg:h-[calc(100vh-3.5rem)] object-cover object-top'
      />
      <div className='container mx-auto'>
        <QuienSoy />
        <SectionSongs />
      </div>
    </main>
  )
}
