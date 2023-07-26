import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar(){
  return(
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
  )
}