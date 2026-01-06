import { useState } from 'react'
import { Link } from 'react-router-dom'

const Chloe_Ryan_Eng = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const coverImage = "https://ik.imagekit.io/f9opvmhvz/Chloe%20&%20Ryan/21F7A56F-71F8-40C5-B9AF-9AABBBB7C0A0.PNG"

  const gallery = [
    { url: "https://ik.imagekit.io/f9opvmhvz/Chloe%20&%20Ryan/21F7A56F-71F8-40C5-B9AF-9AABBBB7C0A0.PNG", alt: "Chloe and Ryan 1" },
    { url: "https://ik.imagekit.io/f9opvmhvz/Chloe%20&%20Ryan/4E36BD47-CF01-4154-AB7D-4DBD333BC1C3.PNG", alt: "Chloe and Ryan 3" },
    { url: "https://ik.imagekit.io/f9opvmhvz/Chloe%20&%20Ryan/DED236CE-F281-4578-9727-28B6471FC0C9.PNG", alt: "Chloe and Ryan 4" },
    { url: "https://ik.imagekit.io/f9opvmhvz/Chloe%20&%20Ryan/3FB83D19-DBF0-4F6C-86F9-6DD38B4999AA.PNG", alt: "Chloe and Ryan 5" },
    { url: "https://ik.imagekit.io/f9opvmhvz/Chloe%20&%20Ryan/FD2FA002-7B66-411C-8609-1764C6437153.PNG", alt: "Chloe and Ryan 6" }
  ]




  const allImages = [...gallery]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < allImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f3f0]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Cover Image */}
          <div className="order-1 lg:order-1">
            <div className="relative h-[500px] overflow-hidden">
              <img
                src={coverImage}
                alt="Mary and Chris"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Couple Info */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 tracking-wide">
                Chloe & Ryan
              </h1>
              <div className="w-16 h-px bg-gray-400 mx-auto lg:mx-0 mb-6"></div>
              <p className="text-sm text-gray-600 uppercase tracking-widest mb-2">
                Engagement
              </p>
              <p className="text-sm text-gray-600 uppercase tracking-widest">
                Clearwater Beach
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg className="w-6 h-6 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Their Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">
              Summary
            </h2>
            <div className="w-16 h-px bg-gray-400 mx-auto mb-12"></div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Chloe and Ryans’s engagement session at Clearwater Beach featured soft, natural tones with an emphasis on crisp, well-balanced photos. The session focused on clean light, true-to-color edits, and sharp details while maintaining a relaxed, romantic feel.
            </p>
            <p>
              With their wedding planned for November, the session captured both connection and movement through a mix of natural portraits and candid moments along the shoreline. Clearwater Beach provided a bright yet controlled backdrop that allowed the photography to remain timeless, polished, and free of washed-out highlights.
            </p>

          </div>
        </div>
      </section>

  

      {/* Before Photos Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Gallery
            </h2>
            
            <div className="w-16 h-px bg-gray-400 mx-auto mt-6"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {gallery.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => openLightbox(index)}
                className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-100"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        </div>
        </div>
      </section>



      {/* Back to Portfolio Button */}
      <section className="py-12 bg-gray-50 text-center">
        <Link
          to="/portfolio"
          className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 text-sm font-medium uppercase tracking-wide transition-colors"
        >
          Back to Portfolio
        </Link>
      </section>

      {/* Social Links */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com/gorbanpixels" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="mailto:info@gorbanpixels.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <span className="sr-only">Email</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {selectedImage > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              aria-label="Previous image"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {selectedImage < allImages.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
              aria-label="Next image"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={allImages[selectedImage].url}
              alt={allImages[selectedImage].alt}
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-sm">
              {selectedImage + 1} / {allImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chloe_Ryan_Eng
