import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SubmitRequest() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        looking: '',
        contact: '',
        file: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const oncancel = () => {
        navigate('/dashboard/help');
    };

    return (
        <div className="min-h-screen bg-[#e8e5e9] p-8">
            <div className="max-w-2xl">
                <h1 className="text-4xl font-bold my-8 text-black">Submit request</h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Address */}
                    <div>
                        <label className="block text-gray-700 text-lg mb-2">
                            Your Email Address
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your business name"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-gray-400 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-gray-700 text-lg  mb-2">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter your business address"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-gray-400 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    {/* What Are You Looking For */}
                    <div>
                        <label className="block text-gray-700 text-lg mb-2">
                            What Are You Looking For
                        </label>
                        <input
                            type="text"
                            name="looking"
                            value={formData.looking}
                            onChange={handleChange}
                            placeholder="Enter your contact email"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-gray-400 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    {/* Contact (Optional) */}
                    <div>
                        <label className="block text-gray-700 text-lg mb-2">
                            Contact(Optional)
                        </label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="Enter your contact email"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-gray-400 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    {/* Add A File (Optional) */}
                    <div>
                        <label className="block text-gray-700 text-lg mb-2">
                            Add A File(Optional)
                        </label>
                        <input
                            type="text"
                            name="file"
                            value={formData.file}
                            onChange={handleChange}
                            placeholder="Enter your contact email"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-gray-400 focus:outline-none focus:border-gray-400"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-gray-700 text-lg mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="note"
                            rows="8"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded text-sm text-gray-400 focus:outline-none focus:border-gray-400 resize-none"
                        />
                    </div>

                    {/* Info Text */}
                    <p className="text-sm text-gray-700">
                        Please enter the details of your request. A member of our support staff will respond as soon as possible.
                    </p>

                    {/* Submit Button */}
                    <div className='flex gap-4'>
                        <button
                            type="submit"
                            className="px-8 py-3 bg-[#1B0B2E] text-white rounded font-medium hover:bg-[#3d2b4d] transition-colors"
                        >
                            Submit
                        </button>

                        <button
                            type="submit"
                            onClick={oncancel}
                            className="px-8 py-3 bg-white border border-[#1B0B2E] text-[#1B0B2E] rounded font-medium hover:bg-[#1B0B2E] hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}