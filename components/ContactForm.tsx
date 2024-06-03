// components/ContactForm.tsx

const ContactForm = () => {
    return (
      <form className="flex flex-col space-y-4 max-w-md mx-auto bg-slate-800 shadow-md rounded-lg p-8">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-300 font-bold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-teal-300 focus:border-teal-300 text-black"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-300 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-teal-300 focus:border-teal-300 text-black"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-300 font-bold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-teal-300 focus:border-teal-300 text-black"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
        >
          Send
        </button>
      </form>
    );
  };
  
  export default ContactForm;