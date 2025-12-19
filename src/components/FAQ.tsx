const FAQ = () => {
  const faqs = [
    {
      question: "Will you help us plan?",
      answer: "We will provide a full photo timeline of the day and a family shot list to you prior to a wedding or event so we are on the same page!"
    },
    {
      question: "How do we contact you after booking?",
      answer: "We keep things organized by handling all communication via email until the day of. This ensures everything stays in one place! Once you’re booked, we’ll share our phone number so you can reach us when needed."
    },
    {
      question: "Are you insured?",
      answer: "We’re fully insured and can provide a certificate of insurance to your venue upon request."
    },
    {
      question: "How do you ensure our photos are secure?",
      answer: "We immediately back up your photos to a separate hard drive and the cloud, ensuring they’re safe no matter what. Your memories are priceless, and we take every precaution to protect them!"
    },
    {
      question: "Will you do any heavy retouching?",
      answer: "We believe in capturing authentic beauty so we won’t alter your body or face in any way. Every person is beautiful just as they are! That said, if a temporary blemish pops up (because, hey, life happens!), we’ll take care of it in the edits."
    },
    {
      question: "How do you deliver the final product?",
      answer: "Your photos will be delivered digitally through a secure online gallery. You’ll receive an email with access, and from there, you can download the full gallery, which we highly recommend doing immediately to at least two locations for safekeeping. Your gallery will remain available for one year, but if you'd like to keep it online indefinitely, you’ll have the option to extend it for a small fee."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            FAQs
          </h2>
          <p className="text-xl text-gray-700">
             
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-16">
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_105.png"
              alt="Family Photo Children shots"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_128.png"
              alt="Grandma & Grandson"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
            Being open and honest with you matters to us at every step
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              There are no second chances when it comes to your wedding or photoshoot. That’s why we’re committed to complete transparency—so you’ll always know what to expect from the moment you book us to the final delivery of your images.
            </p>
            <p>
              We deeply value your time, your investment, and most importantly, the trust you place in us—whether it’s your biggest day or a simple everyday moment.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Book With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
