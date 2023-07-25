import { Home as HomeIcon, Search, Library } from 'lucide-react';  

export default function Home() {
  return (
  <div className="h-screen flex flex-col">
    <div className="flex flex-1">
      <aside className="w-72 bg-zinc-950 p-6">
        <nav>
          <a href="" className="flex item-center gap-2 text-xs font-semibold text-zinc-100">
            <HomeIcon />
            Home
          </a>
          <a href="" className="flex item-center gap-2 text-xs font-semibold text-zinc-100">
            <Search />
            Search
          </a>
          <a href="" className="flex item-center gap-2 text-xs font-semibold text-zinc-100">
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
