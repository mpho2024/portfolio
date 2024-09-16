import React from 'react';

const EmailSection = () => {
  return (
    <section className="text-black bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#4B0082]">Contact Me</h1>

        <div className="flex flex-col items-center">
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-md">
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your form handler
              method="POST"
              className="w-full"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Me</h2>
            <p className="text-lg mb-2">Email: <a href="khanyatsatsi@gmail.com" className="text-indigo-300">khanyatsatsi@gmail.com</a></p>
            <p className="text-lg mb-2">LinkedIn: <a href="https://www.linkedin.com/in/mpho-tsatsi-5a93472a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-indigo-300">mphotsatsi</a></p>
            <p className="text-lg mb-2">GitHub: <a href="https://github.com/mpho2024" target="_blank" rel="noopener noreferrer" className="text-indigo-300">mpho2024</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
