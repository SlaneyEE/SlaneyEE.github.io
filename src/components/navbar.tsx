export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md border-b border-purple-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img src="/img/slaney-ee-xs.png" alt="Slaney EE" className="h-8" />
          </div>
          <div className="flex items-center space-x-4">
            <a href="#about" className="text-purple-500 hover:text-purple-700">
              About
            </a>
            <a href="#games" className="text-purple-500 hover:text-purple-700">
              Games
            </a>
            <a href="#oss" className="text-purple-500 hover:text-purple-700">
              Open Source
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
