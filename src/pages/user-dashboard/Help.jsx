import React from 'react';
import { useNavigate } from 'react-router';
import { HelpCircle, Phone, ArrowRight } from 'lucide-react';

export default function Help() {
    const navigate = useNavigate();
    const onBack = () => {
        navigate('/dashboard');
    };

    const onService = () => {
        navigate('/dashboard/service-provider');
    };

    const submitRequest = () => {
        navigate('/dashboard/submit-request');
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className=" mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-3xl font-bold text-[#3A1863] mb-2">Help Request</h1>
                    <p className="text-gray-600">Reach out to individuals and friends for help with your debt</p>
                </div>

                {/* Main Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {/* Get help Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <HelpCircle className="w-6 h-6 text-[#3A1863]" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Get help</h2>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Experience problem? talk to us aboutsa about it and we will getg right on it
                        </p>
                        <button onClick={submitRequest} className="text-[#3A1863] cursor-pointer font-semibold text-sm hover:text-purple-700 transition-colors">
                            submit a request
                        </button>
                    </div>

                    {/* Engage Support Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <Phone className="w-6 h-6 text-[#3A1863]" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">Engage Support</h2>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Experience problem? talk to us about it and we will get right on it
                        </p>
                        <button className="text-[#3A1863] cursor-pointer font-semibold text-sm hover:text-purple-700 transition-colors">
                            Chat with us
                        </button>
                    </div>

                    {/* Find answers Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                            <HelpCircle className="w-6 h-6 text-[#3A1863]" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">FAQs</h2>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            Check out the FAQs for answers to common questions
                        </p>
                        <button
                            onClick={() => navigate("/dashboard/faq")}
                            className="text-[#3A1863] cursor-pointer font-semibold text-sm hover:text-purple-700 transition-colors"
                        >
                            View FAQs
                        </button>
                    </div>
                </div>

                {/* Quick Support Section */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Get quick support on popular issues</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Trouble signing in - Card 1 */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trouble signing in?</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                If you have got trouble signing in, you might need to reset your password or recover your your username. click learn more for a step by step guide on how to manage your account
                            </p>
                            <button className="flex cursor-pointer items-center text-[#3A1863] font-semibold text-sm hover:text-purple-700 transition-colors">
                                Learn more
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>

                        {/* Compromised account */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Compromised account</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                For Any Issues Including Fraud Click The Link Below To Submit A Request And Our Support Team Will Respond To U As Soon As Possible
                            </p>
                            <button className="flex cursor-pointer items-center text-[#3A1863] font-semibold text-sm hover:text-purple-700 transition-colors">
                                Learn more
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>

                        {/* Trouble signing in - Card 2 */}
                        <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Trouble signing in?</h3>
                            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                If you have got trouble signing in, you might need to reset your password or recover your your username. click learn more for a step by step guide on how to manage your account
                            </p>
                            <button className="flex cursor-pointer items-center text-[#3A1863] font-semibold text-sm hover:text-purple-700 transition-colors">
                                Learn more
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Go Back Button */}
                <div className="flex md:flex-row flex-col justify-center gap-6 mt-12">
                    <button onClick={onBack} className="bg-[#401A6D] cursor-pointer text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-800 transition-colors shadow-lg">
                        Go Back To Your Dashboard
                    </button>
                    <button onClick={onService} className="bg-white cursor-pointer hover:text-white hover:bg-[#401A6D] border border-[#401A6D] text-[#401A6D] px-8 py-4 rounded-full font-semibold transition-colors shadow-lg">
                        Apply as a Service Provider
                    </button>
                </div>
            </div>
        </div>
    );
}