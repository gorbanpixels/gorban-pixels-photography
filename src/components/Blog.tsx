const Blog = () => {
  const blogPosts = [
    {
      title: "Editorial Vibes in Tampa",
      date: "June 21, 2025",
      excerpt: "Trends fade, but the editorial look is timeless. It turns your story into bold, magazine-worthy moments—perfect for weddings or couples shoots in Tampa.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_19.png",
      href: "/blog/editorial-vibes-in-tampa"
    },
    {
      title: "Elope in Tampa FL | The ULTIMATE How-To Guide",
      date: "Apr 11, 2025",
      excerpt: "A thoughtful guide to eloping in Tampa, featuring the best micro-venues, BnBs, and planning tips for a relaxed and romantic day. ",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_17.png?updatedAt=1766124581703",
      href: "/blog/elope-in-tampa-fl"
    },
    {
      title: "Top 2025 Wedding Trends That Will Blow You Away",
      date: "Feb 20, 2025",
      excerpt: "Discover the most exciting wedding trends for 2025 that couples are embracing for their special day.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_16.png",
      href: "/blog/2025-wedding-trends"
    },
    {
      title: "Florida Botanical Gardens: Wedding Photos & Cost",
      date: "Nov 8, 2024",
      excerpt: "Everything you need to know about getting married at the beautiful Florida Botanical Gardens.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_31.png?updatedAt=1766114727409",
      href: "/blog/florida-botanical-gardens-wedding-photos-cost"
    },
    {
      title: "Rehearsal Dinner & Reception Venues in Tampa, FL",
      date: "Aug 18, 2024",
      excerpt: "The most beautiful and affordable venues for your rehearsal dinner.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_21.png",
      href: "/blog/rehearsal-dinner-venues-tampa-fl"
    },
    {
      title: "Tampa Bay Family Photography Guide",
      date: "Aug 5, 2024",
      excerpt: "Your complete guide to planning for a Family shoot in the Tampa Bay area.",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_23.png?updatedAt=1766125374486",
      href: "/blog/tampa-courthouse-wedding-guide"
    }
  ]

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Planning Resources & Useful Tips
          </h2>
          <p className="text-xl text-gray-700">
            We are all about helping you plan your wedding day or photoshoot!<br />
            Below you will find blogs dedicated to general planning and tips.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram Feed Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-8">
            Find us on Instagram @gorbanpixels
          </h3>

          {/* Instagram Grid */}
          {/*<div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="relative h-48 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-${1519741497674 + item}-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                  alt={`Instagram post ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>*/}

          <a
            href="https://www.instagram.com/gorbanpixels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog
