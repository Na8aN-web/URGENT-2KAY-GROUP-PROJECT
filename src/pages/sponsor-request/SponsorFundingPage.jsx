import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { ArrowLeft, PlusCircle, CreditCard, Banknote, X, Settings, Eye, ChevronRight, AlertCircle } from 'lucide-react';
import metamask from '../../assets/images/metamask.png'
import coinbase from '../../assets/images/coinbase.png'
import walletconnect from '../../assets/images/walletconnect.png'



const ModalOverlay = ({ children, onClose, title }) => (
    <div className="fixed bg-gray-900/20 inset-0 z-50 flex items-center justify-center p-4">
        {/* modal box */}
        <div className="bg-white rounded-xl max-w-2xl w-full shadow-2xl transform transition-transform duration-300 scale-100">
            
            {/* modal header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <button 
                    onClick={onClose} 
                    className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* modal body */}
            <div className="p-6">
                {children}
            </div>
        </div>
    </div>
);

// add card
const AddCardForm = ({ onSuccess }) => (
    <div className="space-y-6">
        <div className="flex items-center space-x-2 text-gray-600">
            <CreditCard className="w-5 h-5" />
            <span className="font-semibold">Card</span>
        </div>
        
       
        <label className="block text-sm font-medium text-gray-700">Card Number</label>
        <div className="relative">
            <input 
                type="text" 
                placeholder="1234 1234 1234 1234"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
            />
           <span className='bg-white-300 text-blue-800 absolute right-10 top-4 font-bold'>VISA</span>
            <span className=' absolute right-3 top-5 bg-red-600 px-2 py-2 rounded-full'></span>
            <span className=' absolute right-1 top-5 bg-orange-400 px-2 py-2 rounded-full'></span>
        </div>

        <div className="flex space-x-4">
            <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
                <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
                />
            </div>
            <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Security Code</label>
                <input 
                    type="text" 
                    placeholder="CVC"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
                />
            </div>
        </div>
        
        <p className="text-xs text-gray-500 mt-4">
            By providing your card information, you allow Urgent2kay to charge your card for future payments in accordance with their terms.
        </p>

        <div className="pt-4 flex flex-col items-center">
            <button
                onClick={onSuccess}
                className="w-full sm:w-80 px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-lg"
            >
                Confirm
            </button>
            <p className="text-xs text-gray-500 mt-2">
                I agree to the Terms of Use, Refund Policy, and Privacy Policy.
            </p>
        </div>
    </div>
);

// add bank
const AddBankAccountForm = ({ onSuccess }) => (
    <div className="space-y-6">
        <div className="flex items-center space-x-2 text-gray-600">
            <Banknote className="w-5 h-5" />
            <span className="font-semibold">Bank</span>
        </div>

        <label className="block text-sm font-medium text-gray-700">Bank</label>
        <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D] appearance-none"
        >
            <option>Select Bank</option>
            <option>GTBank</option>
            <option>Zenith Bank</option>
            <option>Access Bank</option>
        </select>
        
        <label className="block text-sm font-medium text-gray-700">Bank Account</label>
        <input 
            type="text" 
            placeholder="Enter 10 digit account number"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
        />
        
        <label className="block text-sm font-medium text-gray-700">Enter your BVN</label>
        <input 
            type="text" 
            placeholder="Enter your BVN"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#401A6D] focus:border-[#401A6D]"
        />

        <p className="text-xs text-gray-500 mt-4">
            To ensure the security of your funds, you can only add a bank account linked to your NIN
        </p>

        <div className="pt-4 flex flex-col items-center">
            <button
                onClick={onSuccess}
                className="w-full sm:w-80 px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-lg"
            >
                Confirm
            </button>
            <p className="text-xs text-gray-500 mt-2">
                I agree to the Terms of Use, Refund Policy, and Privacy Policy.
            </p>
        </div>
    </div>
);

// connect wallet 
const ConnectWalletForm = ({ onSuccess }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6 border-r border-gray-200 pr-4">
            <h3 className="text-xl font-bold text-gray-900">Connect Wallet</h3>
            <p className="text-sm font-semibold text-gray-700">Installed</p>
            <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                    <img src={coinbase} className="w-5 h-5 alt='coinbase logo'" />
                    <span>Coinbase</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                    <img src={metamask} className="w-5 h-5 alt='metamask logo'" />
                    <span>Metamask</span>
                </div>
            </div>

            <p className="text-sm font-semibold text-gray-700 pt-4">Popular</p>
            <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                    <img src={metamask} className="w-5 h-5" />
                    <span>Rainbow</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                    <img src={coinbase} className="w-5 h-5" />
                    <span>Coinbase Wallet</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                    <img src={walletconnect} className="w-5 h-5" />
                    <span>WalletConnect</span>
                </div>
            </div>
        </div>

        <div className="space-y-6 pl-4">
            <h3 className="text-xl font-bold text-gray-900">What is a wallet?</h3>
            
            <div className="flex space-x-3 items-start">
                <img src={walletconnect} className="w-10 h-10 shrink-0" />
                <div>
                    <p className="font-semibold text-gray-800">A Home for your Digital Assets</p>
                    <p className="text-sm text-gray-600">Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs.</p>
                </div>
            </div>

            <div className="flex space-x-3 items-start">
                <img src={walletconnect} className="w-10 h-10 shrink-0 " />
                <div>
                    <p className="font-semibold text-gray-800">A New Way to Log In</p>
                    <p className="text-sm text-gray-600">Instead of creating new accounts and passwords on every website, just connect your wallet.</p>
                </div>
            </div>

            <div className="pt-4 space-y-3">
                <button
                    onClick={onSuccess}
                    className="w-3/4 px-8 py-3 bg-[#401A6D] text-white rounded-[58px] font-medium text-lg hover:bg-purple-800 transition-colors shadow-lg"
                >
                    Get a Wallet
                </button>
                <button
                    className="w-3/4 px-8 py-3 border-2 border-[#E8BF31] text-[#401A6D] bg-white rounded-[58px] font-medium text-lg hover:bg-[#E8BF31]/90 transition-colors shadow-md"
                >
                    Learn More
                </button>
            </div>
        </div>
    </div>
);


// mock data 
const MOCK_ACCOUNT_STATUS = {
    availableBalance: 0, 
    currency: '₦',
    isBalanceSufficient: false,
    fundingUrl: '/dashboard/checkout',
};

const PaymentMethodCard = ({ icon:Icon, title, onClick }) => (
    <div 
        className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors shadow-sm"
        onClick={onClick}
    >
        <div className="flex items-center space-x-4">
            <Icon className="w-6 h-6 text-gray-400" /> 
            <p className="text-base font-medium text-[#5E5C5C]">{title}</p>
        </div>
        
    </div>
);


const SponsorFundingPage = () => {
    const navigate = useNavigate();

    const [modalType, setModalType] = useState(null); 

    const { availableBalance, currency, isBalanceSufficient, fundingUrl} = MOCK_ACCOUNT_STATUS;
    const formattedBalance = `${currency}${availableBalance.toFixed(2)}`;
    

    const handleAddMethodSuccess = () => {
        setModalType(null); 
        navigate('/dashboard/checkout');
    };


    const handleBackClick = () => {
        navigate('/dashboard/sponsor/review/REQ1001'); 
    };

    const handleViewSavedMethods = () => {
        navigate('/dashboard/payment-methods');
    };


    const renderModalContent = () => {

        const successProp = { onSuccess: handleAddMethodSuccess };
        
        switch (modalType) {
            case 'card':
                return { 
                    title: "Add a Bank Card", 
                    content: <AddCardForm {...successProp} /> 
                };
            case 'bank':
                return { 
                    title: "Add a Bank Account", 
                    content: <AddBankAccountForm {...successProp} /> 
                };
            case 'wallet':
                return { 
                    title: "Connect Wallet", 
                    content: <ConnectWalletForm {...successProp} /> 
                };
            default:
                return { title: "", content: null };
        }
    };
    
    const modalProps = renderModalContent();

    return (
        <div className="space-y-8 p-4 sm:p-6 lg:p-8 min-h-full max-w-5xl mx-auto">
            
            <button 
                onClick={handleBackClick}
                className="flex items-center text-gray-600 hover:text-[#401A6D] font-semibold transition-colors mb-6"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
            </button>



            {!isBalanceSufficient && (
                <div className="flex items-center text-sm font-semibold mb-2">
                    <span className="text-[#8B8888]">Insufficient available balance</span>
                    <AlertCircle className="w-5 h-5 ml-1 text-red-600" />
                  
                </div>
            )}


            <div className={`p-5 rounded-xl bg-[#E8BF31]/60 space-y-3`}>
                
                {/* available balance */}
                <div className="text-sm font-semibold text-gray-700 flex items-center space-x-1">
                    <p className="text-gray-600 flex items-center space-x-1">
                        <span>Available Balance</span> 
                        <Eye className="w-4 h-4" />
                    </p>
                </div>
                
                {/* balance */}
                <div className="flex items-center space-x-2">
                    <p className="text-4xl font-extrabold text-gray-900">
                        {formattedBalance}
                    </p>
                    <ChevronRight className="w-6 h-6 text-gray-900" />
                </div>
            </div>
            
            {/* add money button */}
            <button 
                onClick={() => navigate(fundingUrl)}
                className="flex items-center text-sm font-semibold text-[#401A6D] border-2 border-[#D3AE2D] rounded-full px-3 py-1.5 mt-4 hover:bg-[#D3AE2D]/60 transition-colors"
            >
                <PlusCircle className="w-4 h-4 mr-1" /> Add money
            </button>


            {/* payment methods */}
            <div className="pt-8 space-y-6">
                
      
                <div className="flex justify-between items-center pb-2">
                    <h2 className="text-lg font-bold text-[#6E6969]"> 
                        Select Payment Method
                    </h2>
               
                    <button
                        onClick={handleViewSavedMethods}
                        className="flex items-center text-sm text-[#401A6D] font-semibold hover:text-purple-800 transition-colors space-x-1"
                    >
                        <Settings className="w-4 h-4" />
                        <span>Manage Saved Methods</span>
                    </button>
                </div>

                <div className="space-y-4 max-w-2xl">
                    <PaymentMethodCard 
                        icon={PlusCircle} 
                        title="Add a Bank Card" 
                        onClick={() => setModalType('card')}
                    />
                    <PaymentMethodCard 
                        icon={PlusCircle} 
                        title="Add a Bank Account" 
                        onClick={() => setModalType('bank')}
                    />
                    <PaymentMethodCard 
                        icon={PlusCircle} 
                        title="Add a Wallet" 
                        onClick={() => setModalType('wallet')}
                    />
                </div>
            </div>




            {modalType && (
                <ModalOverlay 
                    title={modalProps.title} 
                    onClose={() => setModalType(null)}
                >
                    {modalProps.content}
                </ModalOverlay>
            )}

        </div>
    );
};

export default SponsorFundingPage;