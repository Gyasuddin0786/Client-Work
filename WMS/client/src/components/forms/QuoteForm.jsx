import { useState} from "react";
import { submitQuote } from "../../services/quote.service";
import { toast } from "react-toastify";
import Button from "../common/Button";

import { services } from "../../data/services";

const INITIAL_FORM = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  dimensions: "",
  material: "",
  preferredContact: "phone",
  description: "",
};

function QuoteForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);

    setImages(files);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      images.forEach((image) => {
        data.append("images", image);
      });

      await submitQuote(data);

      toast.success("Quote request submitted successfully.");

      setFormData(INITIAL_FORM);
      setImages([]);
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border  border-orange-300 bg-white p-8 shadow-sm"
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

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium"
          >
            Required Service
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          >
            <option value="">Select Service</option>

            {services.map((service) => (
              <option
                key={service.id}
                value={service.slug}
              >
                {service.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="mb-2 block text-sm font-medium"
        >
          Project Location
        </label>

        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="dimensions"
            className="mb-2 block text-sm font-medium"
          >
            Approximate Dimensions
          </label>

          <input
            id="dimensions"
            name="dimensions"
            type="text"
            value={formData.dimensions}
            onChange={handleChange}
            placeholder="Example: 12ft × 8ft"
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label
            htmlFor="material"
            className="mb-2 block text-sm font-medium"
          >
            Preferred Material
          </label>

          <input
            id="material"
            name="material"
            type="text"
            value={formData.material}
            onChange={handleChange}
            placeholder="MS, SS, Iron..."
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="preferredContact"
          className="mb-2 block text-sm font-medium"
        >
          Preferred Contact Method
        </label>

        <select
          id="contactMethod"
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        >
          <option value="phone">Phone</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium"
        >
          Project Description
        </label>

        <textarea
          id="description"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your project..."
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>
      <div>
        <label
          htmlFor="images"
          className="mb-2 block text-sm font-medium"
        >
          Reference Images
        </label>

        <input
          id="images"
          name="images"
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
        {images.length > 0 && (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {images.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`Preview ${index + 1}`}
                className="h-auto w-full rounded-lg object-fit"
              />
            ))}
          </div>
        )}
        <p className="mt-2 text-sm text-slate-500">
          You can upload up to 5 reference images.
        </p>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Request Quote"}
      </Button>
    </form>
  );
}

export default QuoteForm;