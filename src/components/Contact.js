import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        toast.success('Message sent successfully!');
      })
      .catch((error) => {
        toast.error('Failed to send message. Please try again.');
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Toaster position="top-right" />

      <form
        className="w-full max-w-md p-8 bg-gray-700 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-white text-sm font-semibold mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-black border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-white text-sm font-semibold mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 text-black"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-white text-sm font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[rgba(241,180,62)] text-white py-2 px-4 rounded bg-[rgba(741,180,90)] focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
