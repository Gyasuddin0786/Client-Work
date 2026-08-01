import { useState } from "react";
import { toast } from "react-toastify";

import Button from "../common/Button";

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};
import { submitContact } from "../../services/contact.service";
import { siteConfig } from "../../config/siteConfig";
function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    setLoading(true);

    await submitContact(formData);

    toast.success(
      "Thank you! Your enquiry has been submitted successfully."
    );

    setFormData(INITIAL_FORM);
  } catch (error) {
    console.error(error);

    toast.error(
      error?.response?.data?.message ||
      "Something went wrong. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="grid gap-6">
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-orange-300 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium"
          >
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium"
        >
          Email Address
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium"
        >
          Subject
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Example: Need a quotation for a main gate"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Describe your requirements..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      <Button
  type="submit"
  size="lg"
  disabled={loading}
>
  {loading ? "Sending..." : "Send Message"}
</Button>
       

    </form>
     {/* Google Map */}

        <section className="mt-10">
          <h2 className="text-3xl font-bold">
            Find Us
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-orange-300">
            <iframe
              title="Business Location"
              src={siteConfig.googleMaps.embedUrl}
              className="h-[280px] w-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
    </section>
  );
}

export default ContactForm;