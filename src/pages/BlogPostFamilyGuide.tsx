import { Link } from 'react-router-dom'

const BlogPostFamilyGuide = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link to="/homeblog" className="text-gray-600 hover:text-gray-900 transition-colors">
             ← Back to Blog
            </Link>
          </nav>
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Tampa Bay Family Photography Guide
            </h1>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-600 mb-8">
              <span>November 8, 2025</span>
              <span>•</span>
              <span>Written By Gorban Pixels</span>
            </div>
          </div>

          {/* Hero Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_107.JPG"
              alt="Family Photo 1"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_106.JPG"
              alt="Family Photo 2"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_108.JPG"
              alt="Family Photo 3"
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">What to expect before your Tampa Bay family session</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hey there! We're a Tampa based family photographer and this guide is crafted just for you, based on all the questions families have before their session. Whether we're capturing playful moments on the beach or sweet cuddles at home, this will get you ready!
            </p>
          </div>

          {/* Embedded Video */}
          {/*<div className="mb-12">
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Prepare for Your Tampa Family Photo Session</h3>
                  <p className="text-gray-600">Watch our quick video guide</p>
                </div>
              </div>
            </div>
          </div>*/}

          {/* Embedded Video */}
          <div className="mb-12">
            <div className="aspect-[5/3] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/h2_U8f-pBl8"
                title="Prepare for Your Tampa Family Photo Session"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>



          {/* FAQ Section */}
          <div className="prose prose-lg max-w-none mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Your questions answered here:</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can we bring pets or grandparents?</h4>
                <p className="text-gray-700">Absolutely! The more the merrier. Just let us know ahead of time so we can tailor the session accordingly.</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How to pick the perfect location:</h4>
                <p className="text-gray-700 mb-2">
                  We offer guidance on selecting a spot based on your family’s vibe, whether that’s a golden sunset on Treasure Island or a peaceful nature walk in Lettuce Lake Park.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-1"><strong>Location:</strong> Fort De Soto, Philippe Park, Davis Islands, or feel free to reach out and let us know what you have in mind, and we’ll help narrow down the perfect location</p>
                  <p className="text-gray-700 mb-1"><strong>Time:</strong> Think about your kids’ routines and the best time of day for happy faces!</p>
                  <p className="text-gray-700">
                    We'll also help you coordinate ideal timing based on the season and light.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can we do same-day booking?</h4>
                <p className="text-gray-700 mb-2">Sometimes yes! Especially on weekdays or during off-peak months.</p>
                <p className="text-gray-700">Reach out and let’s check availability. I always try to accommodate special requests!</p>
              </div>
            </div>
          </div>

          {/* Marriage License Section */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">What to wear for your Tampa family shoot:</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dressing for your session doesn’t have to be stressful! We recommend earth tones, flowy textures, and coordinating without being too “matchy.” Think barefoot at the beach or cozy knits at the home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Need help deciding? We’ve put together a Pinterest board with seasonal outfit ideas and can offer custom styling suggestions after booking.
            </p>
          </div>

          {/* Photography Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_94.png"
              alt="Family Home Photo"
              className="w-full h-48 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_101.png"
              alt="Family Home Photo 2"
              className="w-full h-48 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_97.png"
              alt="Family Home Photo 3"
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">What it’s like having us as your Tampa family photographer:</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you're here and scrolling through this, you're probably wondering what it’s like working with us. I’m all about keeping it relaxed, natural, and fun.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We’ll play games, chase light, and let your kids be themselves. You’ll get gallery worthy images without the stress.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The golden hour is ideal, so we usually suggest we meet about 90 minutes before sunset for soft, glowy light that flatters everyone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              We’ll guide you every step of the way and recommend favorite photo spots along Bayshore Boulevard, downtown Tampa, or tucked away natural areas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most families love the 60–90 minute package, but I’m happy to chat about custom timing too.
            </p>
          </div>

          {/* Tips Section */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Helpful tips from families We’ve worked with:</h2>

            <p className="text-gray-700 leading-relaxed mb-4"><strong>What they wish they knew beforehand:</strong></p>

            <div className="space-y-4 text-gray-700">
              <p>
                Plan for extra time before your shoot to avoid rushing, especially with littles! A relaxed start means happy faces all around.
              </p>
              <p>
                Bring bug spray, snacks, and a blanket just in case. Tampa’s outdoors are gorgeous, but nature’s gonna nature!
              </p>
              <p>
                Let your kids be themselves! Some of the best shots come from in-between moments full of personality.
              </p>
            </div>
          </div>

          {/* Newlyweds Section */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Things to do after your session in Tampa Bay:</h2>
            <p className="text-gray-700 leading-relaxed">
              After your session, treat yourselves! Whether it’s ice cream on St. Pete Beach, a dinner in Hyde Park, or catching sunset at Clearwater Pier, soak up the memories you just made.
            </p>
          </div>

          {/* Conclusion */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We can't wait to create heartwarming images you’ll treasure for a lifetime. Your family’s joy, laughter, and connection deserve to be remembered forever.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Feel free to reach out with questions and scroll below to see a full family session gallery to get inspired. We’d be honored to document your Tampa story!
            </p>

            <div className="text-center mb-12">
              <Link
                to="/contact"
                className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 hover:text-white transition-colors"
              >
                Book Us
              </Link>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Family Session Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "https://ik.imagekit.io/f9opvmhvz/Photo_98.png",
                "https://ik.imagekit.io/f9opvmhvz/Photo_100.png",
                "https://ik.imagekit.io/f9opvmhvz/Photo_102.png",
                "https://ik.imagekit.io/f9opvmhvz/Photo_104.png",
                "https://ik.imagekit.io/f9opvmhvz/Photo_96.png",
                "https://ik.imagekit.io/f9opvmhvz/Photo_99.png"
              ].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Courthouse wedding gallery photo ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-16 pt-8 border-t border-gray-200">
            <Link
              to="/blog/florida-botanical-gardens-wedding-photos-cost"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <div className="text-left">
                <div className="text-sm">Previous</div>
                <div className="font-medium">Florida Botanical Gardens: Wedding Photos & Cost</div>
              </div>
            </Link>
            <Link
              to="/blog/editorial-vibes-in-tampa"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors text-right"
            >
              <div>
                <div className="text-sm">Next</div>
                <div className="font-medium">Editorial Vibes in Tampa</div>
              </div>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostFamilyGuide
