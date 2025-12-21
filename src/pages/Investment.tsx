const Investment = () => {
  const packages = [
    {
      id: "engagements",
      title: "Engagements & Couples Sessions",
      location: "Central Florida",
      price: "$350",
      features: [
        "1 Hour Session, Up To 2 Nearby Locations, 2 Outfits",
        "Online Gallery With Professionally Edited Images. You Will Receive ALL Best Edited, High-Resolution Images (70+)",
        "Print Release, Ability To Print From Any Store"
      ],
      destination: "Additional Fees Apply for Destination Travel Costs",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_29.png"
    },
    {
      id: "elopements",
      title: "Elopements",
      location: "Tampa Bay Area",
      price: "$800",
      features: [
        "2 Hours Of Photographer Coverage",
        "Online Gallery With Professionally Edited Images (70 Images/Hour On Average)",
        "Print Release, Ability To Print From Any Store"
      ],
      destination: "Additional Fees Apply for Destination Travel Costs",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_22.png"
    },
    {
      id: "golden-hour",
      title: "The Golden Hour Wedding Collection",
      location: "Central Florida",
      price: "$2500",
      features: [
        "6 Hours Of Photographer Coverage",
        "Online Gallery With Professionally Edited Images (70 Images/Hour On Average)",
        "Print Release, Ability To Print From Any Store"
      ],
      destination: "Additional Fees Apply for Destination Travel Costs",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_30.png"
    },
    {
      id: "storytelling",
      title: "The Storytelling Wedding Collection",
      location: "Central Florida",
      price: "$3500",
      features: [
        "8 Hours Of Photographer Coverage",
        "Online Gallery With Professionally Edited Images (70 Images/Hour On Average)",
        "Print Release, Ability To Print From Any Store"
      ],
      destination: "Additional Fees Apply for Destination Travel Costs",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_131.png"
    },
    {
      id: "signature",
      title: "The Signature Wedding Collection",
      location: "Central Florida",
      price: "$3500",
      features: [
        "All-Day Photographer Coverage",
        "Online Gallery With Professionally Edited Images (70 Images/Hour On Average)",
        "Print Release, Ability To Print From Any Store"
      ],
      destination: "Additional Fees Apply for Destination Travel Costs",
      image: "https://ik.imagekit.io/f9opvmhvz/Photo_32.png"
    }
  ]

  const addOns = [
     "Engagement $250 With Package (Regular $350)",
    "Rehearsal Dinner $250 With Package (Regular $350)",
    "Trash The Dress $250 With Package (Regular $350)",
    "Bridal Boudoir $500 With Package (Regular $625)"
    /*"Second Shooter $250 (Suggested For Weddings With 200+ Guests)",*/
    /*"Content Creator $200: 8 Hours of Coverage, 2 Week Ahead Call, 3-4 Ready to Post TikTok/Reels, 1 Saved Instagram Story"*/
  ]

  const faqs = [
     {
      question: "Will you help us plan",
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
      answer: "Your photos will be delivered digitally through a secure online gallery. You’ll receive an email with access, and from there, you can download the full gallery—which we highly recommend doing immediately to at least two locations for safekeeping. Your gallery will remain available for one year, but if you'd like to keep it online indefinitely, you’ll have the option to extend it for a small fee."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Our goal is to capture your story in a way that brings back the emotions, so you can remember how it felt, not just how it looked.
              </h1>
            </div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/f9opvmhvz/Photo_47.png"
                alt="Romantic wedding photography"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-1xl md:text-2xl font-light text-gray-900 italic mb-6">
            "Their documentary-style photography, along with the behind-the-scenes moments captured, feels so real and in the moment, it’s what made the coverage truly unforgettable."
          </blockquote>
          <p className="text-gray-600">- Steven & Angelica</p>
        </div>
      </section>

      {/* Description */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-1xl font-light text-gray-900 mb-8">
            Story-driven, photojournalistic photographer for sentimental couples and families who value genuine, meaningful moments.
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The beauty of documentary-style photography is that it allows you to be fully present with the people you love, while we preserve those real, meaningful moments through wedding, portrait, and family photos that last a lifetime.
            </p>
            <p>
              Our sentimental storytelling photos are filled with emotion and meaning, made to bring you right back and relive that day!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {packages.map((pkg, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gray-900 text-white p-8 rounded-lg">
                    <h3 className="text-3xl font-light mb-4">{pkg.title}</h3>
                    <p className="text-sm uppercase tracking-wide text-gray-300 mb-6">{pkg.location}</p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-200">{feature}</li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-700 pt-6 mb-6">
                      <p className="text-sm uppercase tracking-wide text-gray-300 mb-2">Destination</p>
                      <p className="text-gray-200">{pkg.destination}</p>
                    </div>

                    <div className="text-center">
                      <div className="inline-block border border-white px-6 py-3 mb-4">
                        <span className="text-2xl font-light">{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section id="add-ons" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 text-center mb-16">
            Enhance Your Experience with These Add-On Services:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ul className="space-y-4">
              {addOns.slice(0, 2).map((addon, index) => (
                <li key={index} className="text-gray-700">{addon}</li>
              ))}
            </ul>
            <ul className="space-y-4">
              {addOns.slice(2).map((addon, index) => (
                <li key={index} className="text-gray-700">{addon}</li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">NEW!</h3>
            <h4 className="text-xl font-medium text-gray-900 mb-4">FILM ADD ON!</h4>
            <p className="text-gray-700">$200 - Includes 40 film scans in color and black and white</p>
          </div>
        </div>
      </section>

      {/* All Inclusive Package */}
      <section id="family-portraits" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Family Portraits
              </h2>
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-6">What's Included</p>

              <ul className="space-y-3 mb-8 text-gray-700">
                <li>1 Hour Of Photographer Coverage</li>
                <li>Guidance on posing and natural interactions</li>
                <li>Pre-session planning + style guide</li>
                <li>Online Gallery With Professionally Edited Images (75 Images/Hour On Average)</li>
                <li>Sneak peeks within 48 hours</li>
              </ul>

              <div className="text-center">
                <div className="inline-block border border-gray-900 px-6 py-3">
                  <span className="text-xl font-light">STARTING AT: $250</span>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://ik.imagekit.io/f9opvmhvz/Photo_23.png?updatedAt=1766125374486"
                alt="Family Photos"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            Frequently Asked Questions & Answers
          </h2>

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
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
            Transparency is so important to us every step of the way.
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p>
              There are no second chances when it comes to your wedding photos which is why clear communication matters. From the moment you book to the final gallery delivery, we’re committed to full transparency, so you always know what to expect every step of the way.
            </p>
            <p>
             Your time, your investment, and your trust mean everything to us especially on one of the most important days of your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_66.png"
              alt="Wedding dance"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://ik.imagekit.io/f9opvmhvz/Photo_67.png"
              alt="Documentary wedding photography"
              className="w-full h-64 object-cover"
            />
          </div>

          <p className="text-gray-600 mb-8">Questions? Let's chat!</p>

          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default Investment
