import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200 px-4 py-16">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Contact Us</h2>
        <p className="mb-8 text-sm text-gray-500">
          We'd love to hear from you. Reach out through any of the channels below.
        </p>

        <div className="flex flex-col gap-5">

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Phone size={20} className="text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Phone</p>
              <p className="text-sm text-gray-500">+98 912 345 6789</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Mail size={20} className="text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Email</p>
              <p className="text-sm text-gray-500">support@digitalstore.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <MapPin size={20} className="text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Address</p>
              <p className="text-sm text-gray-500">Tehran, Valiasr St, No. 128</p>
            </div>
          </div>


          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Send size={20} className="text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Telegram</p>
              <p className="text-sm text-gray-500">@digitalstore_support</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;