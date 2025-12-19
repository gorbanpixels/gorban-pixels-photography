import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    heardAbout: '',
    inquiryType: '',
    instagram: '',
    weddingDate: '',
    ceremonyReceptionLocation: '',
    guestCount: '',
    Additional:''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const response = await fetch('https://formspree.io/f/xyzjrjnn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      alert('Thank you! Your message has been sent.')
      setFormData({
        names: '',
        email: '',
        phone: '',
        heardAbout: '',
        inquiryType: '',
        instagram: '',
        weddingDate: '',
        ceremonyReceptionLocation: '',
        guestCount: '',
        Additional:''
      })
    } else {
      alert('Something went wrong. Please try again later.')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Error sending message.')
  }
}

 return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                We are going to give you so much more than basic photographs
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Before you reach out, we want you to understand the true value of what we offer. Your wedding photographs will become timeless keepsakes, cherished for generations and growing in meaning as the years go by. This isn’t just a job to us, it’s a responsibility we hold with deep care.
                </p>
                <p>
                  We’re here to document your day as it genuinely unfolds, so when you look back, you’ll feel the emotions all over again not just see posed, lifeless images, but relive every meaningful moment.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="relative h-100 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_61.png"
                  alt="City Wedding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-100 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/f9opvmhvz/Photo_90.png"
                  alt="City Wedding 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Names */}
              <div>
                <label htmlFor="names" className="block text-sm font-medium text-gray-700 mb-2">
                  Names (and your partner’s, if applicable) *
                </label>
                <input
                  type="text"
                  id="names"
                  name="names"
                  value={formData.names}
                  onChange={handleInputChange}
                  placeholder="Your + your partner's name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E.g. myemail@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone (in case your email isn't spelled right - it happens *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="E.g. 347 444 5555"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* How did you hear about me */}
              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="instagram">Instagram</option>
                  <option value="referral">Friend/Family Referral</option>
                  <option value="vendor">Vendor Referral</option>
                  <option value="venue">Venue Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* What are you inquiring about */}
              <div className="md:col-span-2">
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  What are you inquiring about? *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="elopement">Elopement Photography</option>
                  <option value="engagement">Engagement Session</option>
                  <option value="couples">Couples Session</option>
                  <option value="couples">Family Session</option>
                  <option value="couples">Graduation/Cap & Gown</option>
                  <option value="couples">Maternity Session</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Instagram */}
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Instagram (if you'd like to share)
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  placeholder="E.g. @boldsoultogether"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              {/* Wedding Date */}
              <div>
                <label htmlFor="weddingDate" className="block text-sm font-medium text-gray-700 mb-2">
                  WEDDINGS: Wedding Date, leave blank if not inquiring about a wedding
                </label>
                <input
                  type="date"
                  id="weddingDate"
                  name="weddingDate"
                  value={formData.weddingDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              {/* Ceremony + Reception locations */}
              <div className="md:col-span-2">
                <label htmlFor="ceremonyReceptionLocation" className="block text-sm font-medium text-gray-700 mb-2">
                  WEDDINGS: Ceremony + Reception locations (make sure to include BOTH if they are different locations), leave blank if not inquiring about a wedding
                </label>
                <textarea
                  id="ceremonyReceptionLocation"
                  name="ceremonyReceptionLocation"
                  value={formData.ceremonyReceptionLocation}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              {/* Guest Count */}
              <div className="md:col-span-2">
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  WEDDINGS: How many guests will you have (approximate is fine), leave blank if not inquiring about a wedding
                </label>
                <input
                  type="text"
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>

              {/* Additional Questions */}
              <div className="md:col-span-2">
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Anything else you'd like us to know? Tell us about your vision, ideas, or anything else!
                </label>
                <input
                  type="text"
                  id="Additional"
                  name="Additional"
                  value={formData.Additional}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
            </div>

            


            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gray-900 text-white px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom Section with Links */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">View</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/blog" className="hover:text-gray-700 transition-colors">Real Stories</a>
              </h4>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">Explore</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/about" className="hover:text-gray-700 transition-colors">About Us</a>
              </h4>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">Let's</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/contact" className="hover:text-gray-700 transition-colors">Get in Touch</a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
