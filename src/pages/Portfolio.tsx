const Portfolio = () => {
  /*const portfolioItems = [
    {
      title: "Mary + Chris",
      category: "Engagement",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Zoe + Josh 1908",
      category: "Grand Wedding",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Elorah + Stevie",
      category: "Elopement Silver Springs",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Danielle + Matt",
      category: "Courthouse + Downtown Elopement",
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Jess + Noah",
      category: "Beach Sunrise Proposal",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Samantha + Kobe",
      category: "Wedding",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Ashley + Zach +",
      category: "Family Session",
      image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Amanda + Chase",
      category: "Baha Wedding",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Jenett + Nate",
      category: "Casa Marina",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]*/

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Galleries of Past Wedding & Couples Clients
          </h1>
          <p className="text-gray-600 mb-8">
            Pour yourself a cup of coffee, get comfortable, and enjoy browsing through our work.
          </p>
        </div>
      </section>

      {/* Portfolio Label */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
            Portfolio
          </h2>
        </div>
      </section>

      {/* Search Section */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-none text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      {/*<section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group text-center">
                <div className="relative h-80 mb-6 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 uppercase tracking-wide">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Instagram Feed Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light mb-8">
              Find us on Instagram{' '}
              <a
                href="https://www.instagram.com/gorbanpixels/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                @gorbanpixels
              </a>
            </h3>
            
          </div>
          

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1 mb-8">
            {[
              "https://ik.imagekit.io/f9opvmhvz/Photo_56.png",
              "https://ik.imagekit.io/f9opvmhvz/Photo_49.png",
              "https://ik.imagekit.io/f9opvmhvz/Photo_50.png",
              "https://ik.imagekit.io/f9opvmhvz/Photo_92.png",
              "https://ik.imagekit.io/f9opvmhvz/Photo_93.png"
            ].map((image, index) => (
              <div key={index} className="relative h-48 overflow-hidden">
                <a href="https://instagram.com/gorbanpixels" target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Get In Touch Button */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block border border-white text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-white hover:text-gray-900 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
