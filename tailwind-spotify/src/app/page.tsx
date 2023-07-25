import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react';  
import Image from 'next/image';

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"/>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
          <div className="w-3 h-3 bg-green-500 rounded-full"/>
        </div>

        <nav className="space-y-5 mt-10">
          <a href="" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
            <HomeIcon />
            Home
          </a>
          <a href="" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
            <Search />
            Search
          </a>
          <a href="" className="flex item-center gap-3 text-sm font-semibold text-zinc-200">
            <Library />
            Your Library
          </a>
        </nav>

        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My Playlist</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Mix Rock</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hip Hop Controller</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Coding Mode</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Study lofi</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">No Repeat</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Mix Pop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Coding lofi</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Good Vibes</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Rock</a>
        </nav>
      </aside>  
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
            <Image src="/album.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Starset</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Skillet</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Slipknot</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Nirvana</strong>

            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>
          </a>
          <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/album.jpg" width={104} height={104} alt='Capa do album músicas '/>
            <strong>Study Lofi</strong> 

             <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
              <Play fill='bg-black' />
            </button>       
          </a>
        </div>

        <h2 className="font-semibold text-3xl mt-10">Made for Hanniel Vieira</h2>

        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href="#" className="bg-white/5 p-3 rounded hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
          </a>
          <a href="#" className="bg-white/5 p-3 rounded hover:bg-white/10">
            <Image src="/album.jpg" className="w-full" width={120} height={120} alt='Capa do album Músicas Curtidas'/>
          </a>
        </div>
      </main>
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      footer
    </footer>
  </div>
  )
}
