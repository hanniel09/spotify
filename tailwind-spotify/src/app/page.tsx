import { Home as HomeIcon, Search, Library } from 'lucide-react';  

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
      </aside>  
      <main className="flex-1 p-6">
        main
      </main>
    </div>
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
      footer
    </footer>
  </div>
  )
}
