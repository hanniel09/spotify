import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ChevronLeft, ChevronRight, Play, } from 'lucide-react';  
import Image from 'next/image';

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
     <Sidebar />
      <main className="flex-1 p-6">
        <div className="flex items-center gap-3">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button> 
        </div>

        <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

        <div className="grid grid-cols-3 gap-6 mt-4">
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt='Capa do album Músicas Curtidas'/>
            <strong>Músicas Curtidas</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/starset.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Starset</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/skillet_.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Skillet</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/slipknot.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Slipknot</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/nirvana.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Nirvana</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/lofi.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Study Lofi</strong> 

             <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>       
          </a>
        </div>

        <h2 className="font-semibold text-3xl mt-10">Made for Hanniel Vieira</h2>

        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
            <Image src="/dailymix.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
            <strong className='font-semibold'>Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Starset, Slipknot, Skillet, Guns N Roses</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
            <Image src="/this-slipknot.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
            <strong className='font-semibold'>This is Slipknot</strong>
            <span className="text-sm text-zinc-400">Slipknot</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
            <Image src="/rock.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
            <strong className='font-semibold'>Rock mix</strong>
            <span className="text-sm text-zinc-400">Slipknot, Skillet, Guns N Roses, AC/DC</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
            <Image src="/code.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
            <strong className='font-semibold'>Daily mix 1</strong>
            <span className="text-sm text-zinc-400">Jon Hopkins, Dreamer, Fire and Light</span>
          </a>
          <a href="#" className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10">
            <Image src="/hiphop.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
            <strong className='font-semibold'>HipHop Controller</strong>
            <span className="text-sm text-zinc-400">Slipknot, Skillet, Guns N Roses</span>
          </a>
        </div>
      </main>
    </div>
    <Footer />
  </div>
  )
}
