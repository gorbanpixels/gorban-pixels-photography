import { Link } from 'react-router-dom'

const About = () => {
  const testimonials = [
    {
      name: "Janine & Luke",
      text: "My husband and I knew we wanted to elope in Tampa. We found Gorban Pixels through google and are soooo happy that we did. Their website and guide answered all the questions we had about eloping in the Tampa area. They pretty much have a guide for everything you need to know. The day of the wedding was actually our first time meeting them, and I wasn't nervous because I felt we had built a relationship already through the booking process."
    },
    {
      name: "Sascha & Dennis",
      text: "Gorban Pixels was an absolute rockstar team! From the moment we met them, we knew we were in good hands. They were not only professional but also incredibly present and attentive throughout our special day. Their genuine enthusiasm and warm personality made us feel comfortable and at ease."
    },
    {
      name: "Natasha & John",
      text: "Let me start by saying I started my photographer search from states away. I immediately knew I made the right choice just through email. Gorban Pixels was amazing from start to finish. Booking with them was simple, they were extremely helpful and timely with responses to any questions we had."
    }
  ]

  const blogPosts = [
    {
      title: "Elope in Tampa FL | The ULTIMATE How-To Guide",
      excerpt: "A thoughtful guide to eloping in Tampa—featuring the best micro-venues, BnBs, and planning tips for a relaxed and romantic day.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_17.png?updatedAt=1766124581703",
      href: "/blog/elope-in-tampa-fl"
    },
    {
      title: "Top 2025 Wedding Trends That Will Blow You Away",
      excerpt: "Discover the most exciting wedding trends for 2025 that couples are embracing for their special day.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_16.png",
      href: "/blog/2025-wedding-trends"
    },
    {
      title: "Florida Botanical Gardens: Wedding Photos & Cost",
      excerpt: "Everything you need to know about getting married at the beautiful Florida Botanical Gardens.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_31.png?updatedAt=1766114727409",
      href: "/blog/florida-botanical-gardens-wedding-photos-cost"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-light text-gray-700 mb-4">
                We are  the type to skip the small talk and get right to it!
              </h2>
              <h3 className="text-xl font-light text-gray-700 mb-8">
                We don’t shy away from long days or big dreams if it matters to us, we give it our all.
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Fueled by early morning coffees, spontaneous road trips, and playlists that somehow always turn into karaoke parties in the kitchen. One of us can spend hours on home projects, while the other can’t walk past a plant shop without “just peeking.”
                </p>

                <p>
                  Time together means everything, especially when it involves morning walks, late-night talks, or the occasional Netflix binge. We're always seeking new ways to grow side by side whether that’s lifting heavier weights or learning to slow down and appreciate the quiet.
                </p>

                <p>
                 At the heart of everything we do is connection, the kind that fuels our creativity and shows up in every photo we take. We’re inspired by nature, movement, and emotion, and we do our best work with couples and families who aren’t afraid to enjoy the moments, laugh a little louder, and be fully themselves in front of the lens.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Let's Work Together!
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">
                Gorban Pixels<br />
                Photographers Based in<br />
                Central Florida - Available<br />
                Worldwide
              </p>

              <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8">
                HI, WE ARE
              </h1>

              <div className="relative mb-8">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Gorban4.jpg?updatedAt=1751643917284"
                  alt="Gorban Pixels photographers"
                  className="w-full max-w-md mx-auto h-96 object-cover rounded-lg"
                />
              </div>

              <h2 className="text-6xl md:text-8xl font-light text-gray-900 mb-4">
                THE GORBAN'S
              </h2>

              <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                Elopements, Weddings &<br />
                Couples Photography Duo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Why Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/f9opvmhvz/Photo_121.png"
                alt="Documentary wedding photographer at work"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Our Why
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We didn’t set out knowing this would become our life’s work — but looking back, it’s clear everything led us here. What started with a camera and a spark of curiosity grew into a shared passion for storytelling, connection, and capturing the moments that truly matter.
                </p>

                <p>
                  As a husband and wife team, we know what it means to build something together to show up, grow, and find joy in the little things. Photography lets us celebrate that in others. We do this because we care deeply about people and how they love, and we’re honored to turn those fleeting, beautiful moments into something that lasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
            We’re not your typical photography duo. Different in all the best ways, we bring our own perspectives to create something real and full of heart. <br /> Our goal? To make you feel seen, comfortable, and completely yourself.
          </h3>
        </div>
      </section>

      {/* More About Me Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://ik.imagekit.io/f9opvmhvz/Photo_25_eAuQ5c5Ew?updatedAt=1751643466762"
                alt="Family photo"
                className="w-full h-98 object-cover rounded-lg"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                More about us
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p >
                  Anastasiya is all about slow mornings with a good book, beach days where she can swim and recharge, and on those indoor days she loves crafting her favorite dishes—like spicy tom yum soup, delicate sushi rolls, and rich mushroom risotto with truffle oil. She has a serious love for bold flavors, especially anything spicy or soup-based.
                </p>

                <p>
                  Andray’s in his element when he’s building or fixing something, whether it’s a home project or a random gadget just for fun. If he’s not tinkering, he’s probably out on the water paddleboarding, casting a line, or dreaming up the next outdoor adventure. He’s all about staying active, being hands-on, and finding joy in the little things.
                </p>

                <p >
                  Together, we love biking, hiking, and spending time outside wherever we can. We live for the simple things that bring us joy and connection, and that mindset shapes how we move through life and how we approach every story we’re lucky enough to capture.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            A little bit more about us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative h-64 mb-8 overflow-hidden rounded-full">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_26.png"
                  alt="Family life in Clearwater"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">I</h3>
              <p className="text-gray-700">
                Real moments and the people we share them with are what fuel our creativity. Family is our anchor, and we thrive on exploring new places, making memories, and finding joy in simply being together.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 mb-8 overflow-hidden rounded-full">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_27.png?updatedAt=1766129304446"
                  alt="Downtown Vibes"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">II</h3>
              <p className="text-gray-700">
                Never wanting to stop growing, learning, or chasing is what lights us up and keeps life interesting. We’re always up for an adventure — especially the kind that doesn’t go exactly as planned. Whether it's finding hidden gems, talking with locals, or wandering off the beaten path, we love discovering the world together, one spontaneous moment at a time.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 mb-8 overflow-hidden rounded-full">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_25.png"
                  alt="Mother and Daughers Bonding on the Beach"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">III</h3>
              <p className="text-gray-700">
                Outdoors is where we feel most alive whether it’s biking through trails, hiking new paths, or floating across the water on a paddleboard. Nature gives us space to reconnect, reset, and soak in the moments that matter (bonus points if snacks are involved).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-600 mb-4 uppercase tracking-wide">Testimonials</h2>
            <div className="flex justify-center mb-8">
              <img
                src="https://ik.imagekit.io/f9opvmhvz/Photo_24.PNG?updatedAt=1751642134707"
                alt="Featured testimonial"
                className="w-64 h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Dennis & Angela</h3>
              <p className="text-gray-700 leading-relaxed">
                "Exploring Tampa’s most beautiful locations has never been more exciting! From the historic charm of Ybor City to the tranquil shores of Honeymoon Island, every shoot feels like an adventure. The attention to detail and ability to capture the perfect lighting and angles made my photos truly unforgettable. If you're looking for breathtaking backdrops and a seamless experience, this is it"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-600 mb-4 uppercase tracking-wide">Real Stories</h2>
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Real couples. Their love stories. Authentically captured. Check these out!
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} to={post.href} className="block group">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-700 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
