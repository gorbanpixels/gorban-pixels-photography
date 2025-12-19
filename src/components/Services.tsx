const Services = () => {
  const values = [
    {
      title: "Raw Feelings",
      description: "We focus on being documentary style photographers with an aproach that is all about storytelling—capturing the raw, unfiltered emotions that make your moments unforgettable. We’re here for the real laughter, the happy tears, and the kind of fun that makes you forget the camera is even there. No stiff poses, no forced smiles, just you, fully present, embracing every second! We will laugh until we cry, have too much fun, forget our insecurities, and exist in the moment!",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_30.png"
    },
    {
      title: "Authenticity",
      description: "We’re not here to copy and paste trends, we’re here to create something that’s uniquely you! Feel free to share your inspiration, but think of it as just a starting point. Your story, your emotions, and your energy will shape every shot, making your photos one of a kind. Yes, we can capture Pinterest worthy moments, but they’ll be authentically yours!",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo-126.png"
    },
    {
      title: "Spontaneity & Romance",
      description: "Think of your session as the ultimate romance film, one that’s destined for the big screen! Let’s go all out, embrace the drama, and create something unforgettable. This is your story, your moment! So bring your personality, be unapologetically you, and let’s turn it into something beautiful!",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_127.png"
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-20">
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_125.png"
              alt="Botanical Gardens Wedding 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_124.png"
              alt="Botanical Gardens Wedding 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Challenge Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            CHALLENGING<br />
            THE NORM<br />
            & <br />
            PRESERVING<br />
            RAW MOMENTS
          </h2>
          <p className="text-xl text-gray-700 mb-8 italic">
            Let's create, capture and tell your unique story—a story that will stand the test of time
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Leave Your Legacy
          </a>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 mb-8 overflow-hidden rounded-lg">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Wedding Planning Tips */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-light text-gray-900 text-center mb-12">
            WILL YOU HELP US PLAN?
          </h3>

          <div className="space-y-8 text-gray-700">
            <div>
              <p className="leading-relaxed">
                It is so important to first and foremost take a moment to think about the kind of wedding day that truly feels like you. Do you envision a lively celebration, surrounded by loved ones, filled with laughter, energy, and unforgettable moments? Or maybe you're the type to elope on your own terms, keep it simple, focus on each other, and capture some beautiful photos along the way. However you choose to celebrate your love, make sure it’s a reflection of what matters most to you both. 
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                Deciding where to get married might come easily—or take a bit of thoughtful consideration. Will it be your hometown, a favorite city, somewhere in the countryside, or maybe a destination abroad? Once you’ve settled on the perfect location, be sure to book your venue as early as possible.
              </p>
            </div>

            <div>
              <p className="leading-relaxed">
                Photography is a deeply personal art form—it all comes down to style and connection. We’re documentary-style wedding and elopement photographers who specialize in a photojournalistic approach, focused on capturing authentic, candid moments with intention and care.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Let's Work Together!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
