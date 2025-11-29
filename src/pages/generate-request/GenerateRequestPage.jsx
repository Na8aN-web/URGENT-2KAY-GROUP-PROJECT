import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, ArrowRight } from 'lucide-react'; 

import ToDoCard from '../../components/ToDoCard'; // Path changed to up two levels
import BillIconCard from '../../components/BillIconCard'; // Path changed to up two levels
import SuggestionCard from '../../components/SuggestionCard'; // Path changed to up two levels

const BILL_TYPES = ['Electricity', 'Shop Online', 'School Fees', 'House Rent', 'Airtime', 'Food', 'Data Top-Up', 'Transfer'];

const GenerateRequestPage = () => {
    const navigate = useNavigate();

    const handleSeeMoreClick = () => {
        navigate('/dashboard/services');
    };
    
    // UPDATED HANDLER: Now navigates to the All Services Page (/dashboard/services)
    const handleCreateBundle = () => {
        navigate('/dashboard/services'); 
    };
    
    // FIX: Navigates to the Sponsor Review Page (using a mock ID)
    const handleSponsorReview = () => {
        navigate('/dashboard/sponsor-view'); 
    };


    return (
        // Added standard padding and white BG to the page container
        <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full">
            
            {/* 1. Available Balance Card */}
            {/* UPDATED: Background color #E8BF31, removed shadow/border */}
            <div className="p-6 rounded-xl" style={{ backgroundColor: '#E8BF31' }}>
                <div className="flex items-center justify-between">
                    <h3 className="flex items-center text-sm text-yellow-900 font-medium mb-2">
                        Available Balance
                        <Eye className="ml-2 w-4 h-4 cursor-pointer text-yellow-900/70" />
                    </h3>
                </div>
                <p className="text-4xl font-extrabold text-yellow-900 mt-1">
                    ₦0.00
                </p>
            </div>

            {/* 2. My To-dos (Background handled by ToDoCard.jsx) */}
            {/* UPDATED: Title changed to small, gray, non-bold */}
            <h2 className="text-sm text-gray-500 font-medium pt-4">My To-dos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ToDoCard
                    title="Combine bills, subscriptions, and personal needs into one simple request."
                    linkText="Create a Bundle →"
                    onClick={handleCreateBundle} // Now navigates to AllServicesPage
                />
                <ToDoCard
                    title="Review and approve bundled requests to send payments directly to service providers."
                    linkText="Sponsor a Bundle →"
                    onClick={handleSponsorReview} // Navigates to the review page
                />
            </div>

            {/* 3. Bills Payment Grid */}
            {/* UPDATED: Title changed to small, gray, non-bold */}
            <h2 className="text-sm text-gray-500 font-medium pt-4">Bills Payment</h2>
            
            {/* UPDATED: Background color #F9FDFD, removed shadow/border */}
            <div className="relative p-6 rounded-xl" style={{ backgroundColor: '#F9FDFD' }}> 
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 pb-10"> {/* Added padding bottom for "See more" */}
                    {BILL_TYPES.map((bill) => (
                        <BillIconCard key={bill} name={bill} />
                    ))}
                </div>

                {/* UPDATED: See more link now inside the container, right bottom corner */}
                <button
                    onClick={handleSeeMoreClick}
                    className="absolute bottom-3 right-4 flex items-center text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors"
                >
                    See more
                    <ArrowRight className="w-4 h-4 ml-1" />
                </button>
            </div>


            {/* 4. Suggested For You */}
            {/* UPDATED: Title changed to small, gray, non-bold */}
            <h2 className="text-sm text-gray-500 font-medium pt-4">Suggested For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
                {/* LINK TO REFERRAL PAGE */}
                <div onClick={() => navigate('/dashboard/referral')} className="cursor-pointer">
                    <SuggestionCard 
                        title="Refer a Friend, Earn Together! For every successful referral, you and your friend both earn ₦1,000 in credits!" 
                        buttonText="Refer now"
                        type="referral"
                    />
                </div>
                {/* END LINK TO REFERRAL PAGE */}
                <SuggestionCard 
                    title="Get ₦500 Free Credits! Complete your first bundle and get ₦500 free credits." 
                    buttonText="Create request now" 
                    type="gift"
                />
                <SuggestionCard 
                    title="Pay Bills, Get 10% cashback on all utility bills. Offer ends soon!" 
                    buttonText="View Offer" 
                    type="gift"
                />
            </div>

        </div>
    );
};

export default GenerateRequestPage;