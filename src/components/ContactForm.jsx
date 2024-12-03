import { useState } from 'react';

export function ContactForm({ onSubmit, onCancel, initialData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    await onSubmit(formData);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 py-8">
      <div className="space-y-12">
        <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={initialData?.name}
            className="peer w-full text-gray-300 bg-transparent border-b border-zinc-700 py-3 outline-none transition-colors focus:border-zinc-100 placeholder:text-transparent"
            placeholder="Name"
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-6 text-sm text-white peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm transition-all"
          >
            Name 
          </label>
        </div>
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            defaultValue={initialData?.email}
            className="peer w-full text-gray-300 bg-transparent border-b border-zinc-700 py-3 outline-none transition-colors focus:border-zinc-100 placeholder:text-transparent"
            placeholder="Email"
          />
          <label
            htmlFor="email"
            className="absolute left-0 -top-6 text-sm text-white peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm transition-all"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            defaultValue={initialData?.message}
            className="peer w-full bg-transparent border-b text-gray-300 border-zinc-700 py-3 outline-none transition-colors  placeholder:text-transparent resize-none"
            placeholder="Message"
          />
          <label
            htmlFor="message"
            className="absolute left-0 -top-6 text-sm text-white peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm transition-all"
          >
            Message
          </label>
        </div>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-red-400 hover:text-red-300 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-4 py-2 text-green-400 hover:text-green-300 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
