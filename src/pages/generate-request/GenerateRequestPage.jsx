import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, ArrowRight } from 'lucide-react'; 

import ToDoCard from '../../components/ToDoCard'; 
import BillIconCard from '../../components/BillIconCard'; 
import SuggestionCard from '../../components/SuggestionCard'; 

const BILL_TYPES = ['Electricity', 'Shop Online', 'School Fees', 'House Rent', 'Airtime', 'Food', 'Data Top-Up', 'Transfer'];

const GenerateRequestPage = () => {
    const navigate = useNavigate();

    const handleSeeMoreClick = () => {
        navigate('/dashboard/services');
    };
    
    const handleCreateBundle = () => {
        navigate('/dashboard/services'); 
    };
    
    const handleSponsorReview = () => {
        navigate('/dashboard/sponsor-view'); 
    };


    return (

        <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-white min-h-full">
            
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

            <h2 className="text-sm text-gray-500 font-medium pt-4">My To-dos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ToDoCard
                    title="Combine bills, subscriptions, and personal needs into one simple request."
                    linkText="Create a Bundle →"
                    onClick={handleCreateBundle}
                />
                <ToDoCard
                    title="Review and approve bundled requests to send payments directly to service providers."
                    linkText="Sponsor a Bundle →"
                    onClick={handleSponsorReview} 
                />
            </div>

            <h2 className="text-sm text-gray-500 font-medium pt-4">Bills Payment</h2>

            <div className="relative p-6 rounded-xl" style={{ backgroundColor: '#F9FDFD' }}> 
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 pb-10"> 
                    {BILL_TYPES.map((bill) => (
                        <BillIconCard key={bill} name={bill} />
                    ))}
                </div>

                <button
                    onClick={handleSeeMoreClick}
                    className="absolute bottom-3 right-4 flex items-center text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors"
                >
                    See more
                    <ArrowRight className="w-4 h-4 ml-1" />
                </button>
            </div>


            <h2 className="text-sm text-gray-500 font-medium pt-4">Suggested For You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
                {/* link to referral page */}
                <div onClick={() => navigate('/dashboard/referral')} className="cursor-pointer">
                    <SuggestionCard 
                        title="Refer a Friend, Earn Together! For every successful referral, you and your friend both earn ₦1,000 in credits!" 
                        buttonText="Refer now"
                        type="referral"
                    />
                </div>

               <div onClick={() => navigate('/dashboard/services')} className="cursor-pointer">
                <SuggestionCard 
                    title="Get ₦500 Free Credits! Complete your first bundle and get ₦500 free credits." 
                    buttonText="Create request now" 
                    type="gift"
                />
                </div>
                 <div onClick={() => navigate('/dashboard/pay/Electricity')} className="cursor-pointer">
                <SuggestionCard 
                    title="Pay Bills, Get 10% cashback on all utility bills. Offer ends soon!" 
                    buttonText="View Offer" 
                    type="gift"
                />
                </div>
            </div>

        </div>
    );
};

export default GenerateRequestPage;