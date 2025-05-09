import SectionLayout from "@/components/SectionLayout";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <SectionLayout
      title="Contact Us"
      subtitle="We're here to help. Reach out to us with any questions or feedback."
    >
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-6 rounded-xl shadow-md">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message here..."
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1E2525] text-white py-2 rounded hover:bg-[#333] transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 bg-gray-50 p-6 rounded-xl shadow-md">
          <div className="flex items-start space-x-4">
            <Phone className="text-[#1E2525] mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">+880 1234 567 890</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Mail className="text-[#1E2525] mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">support@stationeryshop.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="text-[#1E2525] mt-1" />
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-600">
                123 Stationery Street, Chittagong, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Contact;
