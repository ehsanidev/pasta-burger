const MenuItem = ({ name, description, price }) => (
  <div className="border-b pb-4 mb-4">
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{description}</p>
    <span className="text-red-600 font-bold">${price}</span>
  </div>
)

const Menu = () => {
  const menuItems = [
    { name: "Spaghetti Burger", description: "Burger patty wrapped in spaghetti with marinara sauce.", price: "12.99" },
    { name: "Lasagna Slider", description: "Mini lasagna served like a slider with garlic bread.", price: "9.99" },
    { name: "Carbonara Burger", description: "Creamy carbonara sauce meets juicy beef patty.", price: "13.99" },
    { name: "Fettuccine Fries", description: "Crispy fettuccine served with cheese dip.", price: "6.99" }
  ]

  return (
    <section id="menu" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, idx) => (
            <MenuItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu