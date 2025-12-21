const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-wide mb-4">
            Gorban Pixels
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
           Wedding and Lifestyle Photographers based in Central Florida.<br />
            Available for travel worldwide.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-12">
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4">For Couples</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Stories</a></li>
              <li><a href="/investment" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/investment#signature" className="hover:text-white transition-colors">Wedding Photography</a></li>
              <li><a href="/investment#engagements" className="hover:text-white transition-colors">Engagement Sessions</a></li>
              <li><a href="/investment#elopements" className="hover:text-white transition-colors">Destination Weddings</a></li>
              <li><a href="/investment#add-ons" className="hover:text-white transition-colors">Event Packages</a></li>
              <li><a href="/investment#family-portraits" className="hover:text-white transition-colors">Family Packages</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/blog/anniversary-photoshoot-unforgettable" className="hover:text-white transition-colors">Anniversary Photoshoot</a></li>
              <li><a href="/blog/wedding-prep-tampa-fl" className="hover:text-white transition-colors">Wedding How-To Guide</a></li>
              <li><a href="/blog/tampa-family-guide" className="hover:text-white transition-colors">Family Photography Guide Directory</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="mailto:info@gorbanpixels.com" className="hover:text-white transition-colors">gorbanpixels@gmail.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-white transition-colors">(656) 214-4464</a></li>
              <li><span className="text-gray-300">Tampa, FL</span></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://instagram.com/gorbanpixels" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="mailto:gorbanpixels@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Email</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
            </svg>
          </a>
          <a href="https://pinterest.com/gorbanpixels" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Pinterest</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.372 0 12.017 0 17.075 3.235 21.345 7.742 22.804c-.069-.608-.13-1.549.027-2.213.143-.6.922-3.9.922-3.9s-.235-.47-.235-1.165c0-1.092.633-1.907 1.422-1.907.67 0 .994.502.994 1.104 0 .672-.429 1.676-.649 2.607-.184.777.39 1.411 1.156 1.411 1.388 0 2.318-1.78 2.318-3.886 0-1.597-1.072-2.794-3.012-2.794-2.224 0-3.628 1.651-3.628 3.499 0 .637.19 1.085.48 1.423.13.15.148.212.1.384-.035.125-.11.45-.143.576-.047.183-.189.221-.435.133-1.22-.496-1.844-1.821-1.844-3.31 0-2.448 2.061-5.4 6.122-5.4 3.261 0 5.409 2.335 5.409 4.823 0 3.313-1.853 5.8-4.588 5.8-.92 0-1.787-.501-2.08-1.085l-.6 2.398c-.231.923-.855 2.075-1.275 2.781.96.297 1.97.457 3.017.457C18.626 24.033 24 18.66 24 12.017 24 5.372 18.626.001 12.001.001z"/>
            </svg>
          </a>
        </div>

        {/* Featured Badge */}
        {/*<div className="text-center mb-8">
          <div className="inline-block bg-gray-800 px-4 py-2 rounded">
            <span className="text-sm text-gray-300">Featured on Zola</span>
          </div>
        </div>*/}

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p>© 2025 Gorban Pixels. All rights reserved | Images by Gorban Pixels</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
