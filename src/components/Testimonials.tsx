const Testimonials = () => {
  const testimonials = [
    {
      name: "Katie & Jason",
      date: "November 11, 2024",
      text: "We’re so grateful we chose Andray & Anastasiya to capture our day at the Florida Botanical Gardens. Everything felt natural and relaxed, and they caught moments we’ll cherish forever.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_14.png"
    },
    {
      name: "Rachael",
      date: "May 20, 2025",
      text: "I came across Gorban Pixels while searching locally, and from the very first email, I knew I was in good hands. Booking was super easy, they replied quickly, and made the whole shoot feel relaxed and fun.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_15.png"
    },
    {
      name: "Emily & Eric",
      date: "June 19, 2024",
      text: "Working with Gorban Pixels for our couple shoot was an amazing experience. They made us feel comfortable from the start, and their relaxed, genuine energy made everything feel effortless. You can truly see their passion and care in every photo.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_13.png"
    },
  
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Testimonials
          </h2>
          <p className="text-xl text-gray-700 italic">
            "The day of the wedding was actually our first time meeting Andray & Anastasiya, but it felt like we already knew them. Every conversation beforehand was so easy—it was like meeting up with old friends."
          </p>
        </div>

        {/* Portfolio Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-16">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_11.png"
              alt="Grandpa and Grandma"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_129.png"
              alt="Grandpa and Grand Daughter"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_10.png"
              alt="Family Photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_130.png?updatedAt=1766127739406"
              alt="Husband and Wife with Joyful Daughter"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{testimonial.date}</p>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/*<div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Book With Us
          </a>
        </div>*/}
      </div>
    </section>
  )
}

export default Testimonials
