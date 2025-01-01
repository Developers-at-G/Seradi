import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle changes in the form fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Transform formData to match EmailJS template variables
    const templateParams = {
      to_name: "Gueye", // You can set this to whoever should receive the email
      from_name: formData.name,
      from_email: formData.email, // Adding email although not in template
      message: formData.message
    };

    emailjs
      .send(
        'service_vvv8o9i',
        'template_hn4i3sc',
        templateParams,  // Using templateParams instead of formData
        'QQ-rJh57rVKmd77EL'
      )
      .then(
        () => {
          setIsSuccess(true);
          setShowPopup(true);
          setFormData({ name: '', email: '', message: '' }); // Reset form
        },
        (error: Error) => {
          setIsSuccess(false);
          setShowPopup(true);
          console.error(error);
        }
      );
  };

  return (
    <section className="flex flex-col py-10 items-center min-h-screen bg-gray-900" id="contact">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`bg-white p-6 rounded-lg shadow-xl ${isSuccess ? 'border-green-500' : 'border-red-500'} border-2`}>
            <div className="text-center">
              {isSuccess ? (
                <>
                  <div className="text-green-500 text-xl font-bold mb-2">Success!</div>
                  <p className="text-gray-700">Your message has been sent successfully.</p>
                </>
              ) : (
                <>
                  <div className="text-red-500 text-xl font-bold mb-2">Error</div>
                  <p className="text-gray-700">Failed to send message. Please try again.</p>
                </>
              )}
              <button
                onClick={() => setShowPopup(false)}
                className="mt-4 px-4 py-2 coder-background text-white rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="text-center text-white text-6xl font-semibold mb-12">Contact</div>

      <div className="w-full max-w-4xl px-4">
        <div className="bg-gray-800 border border-gray-600 rounded-lg text-white p-8 shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                placeholder="Your Email"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                placeholder="Your Message"
                className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex justify-start">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
  );
};

export default ContactForm;
