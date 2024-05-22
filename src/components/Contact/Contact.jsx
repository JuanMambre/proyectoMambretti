import React from 'react';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-black to-purple-800 text-white py-20 px-4 md:px-8 h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-lg">Let's get in touch</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Let's Get In Touch</h3>
            <p className="mb-4">Located in the heart of the city, our tech hub is the go-to spot for innovation enthusiasts. We're open from Monday to Friday, 9 AM to 6 PM, ready to assist you with your tech needs.</p>
            <div className="flex items-center mb-4">
              <i className="fas fa-phone text-xl"></i>
              <span className="ml-3">(123) 456-7890</span>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-envelope text-xl"></i>
              <span className="ml-3">info@innovatech.com</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-xl"></i>
              <span className="ml-3">123 Violet Street, Innovatown, IV 45678</span>
            </div>
          </div>

          <form className="bg-purple-900 bg-opacity-90 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <div className="mb-4">
              <input type="text" className="w-full bg-purple-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-purple-700" placeholder="Your Name" />
            </div>
            <div className="mb-4">
              <input type="email" className="w-full bg-purple-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-purple-700" placeholder="Your Email" />
            </div>
            <div className="mb-4">
              <textarea className="w-full bg-purple-800 text-white rounded-lg py-2 px-4 focus:outline-none focus:bg-purple-700" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-500 transition duration-300">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

