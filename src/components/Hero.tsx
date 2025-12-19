const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="relative h-96 md:h-[600px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/f9opvmhvz/Photo_123.png"
            alt="Wedding ceremony destination"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-96 md:h-[600px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/f9opvmhvz/Photo_122.png?updatedAt=1766118049979"
            alt="Beach Elopement w/Palms"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Feature Image */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-1">
        <img
          src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beach Elopement"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Tampa Florida<br />
            Wedding & Lifestyle Photographers<br />
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
             Documentary & Destination Photographers
          </p>
        </div>
      </div>

      

      {/* Main Tagline */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-1xl md:text-3xl font-light text-gray-900 mb-8 leading-tight">
          Capturing Life’s Beautiful Moments.<br />
          Weddings. Couples. Lifestyle. Portraits.<br />
          Timeless, Classic & Joy Filled Imagery.
        </h2>
      </div>
    </section>
  )
}

export default Hero
