"use client"

import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSuccess(false);
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(false);
        setIsSubmitting(true);

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData),
        });

        setIsSubmitting(false);

        if (response.ok) {
            setSuccess(true);
            setFormData({name: "", email: "", message: ""});
        } else {
            alert("Failed to send message")
        }
    };

    return (
        <section className="w-full max-w-4xl mt-12 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center">Let's Connect!</h2>
        {success && <p className="text-green-500">Message sent successfully!</p>}
        <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="p-2 bg-gray-700 rounded" required name="name" />
          <input value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="p-2 bg-gray-700 rounded" required name="email" />
          <textarea value={formData.message} onChange={handleChange} placeholder="Message" className="p-2 bg-gray-700 rounded col-span-2" required name="message" />
          <button type="submit"  className="col-span-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500" disabled={isSubmitting}>
            {isSubmitting ? "Sending...": "Send Message"}
          </button>
        </form>
      </section>
    );
}