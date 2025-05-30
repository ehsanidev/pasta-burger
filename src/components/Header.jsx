const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-red-600">Pasta Burger</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#hero" className="hover:text-red-500">Home</a></li>
            <li><a href="#menu" className="hover:text-red-500">Menu</a></li>
            <li><a href="#about" className="hover:text-red-500">About</a></li>
            <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header