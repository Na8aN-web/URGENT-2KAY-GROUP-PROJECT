import { useState } from 'react';
import { ArrowLeft, MoreVertical, Bell, Check, X } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Notifications() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');

    const notifications = {
        today: [
            {
                id: 1,
                name: 'Ugomma',
                message: 'just sent you an Urgent 2Kay request',
                time: '8 minutes ago',
                isUnread: true,
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ugomma',
                type: 'request'
            },
            {
                id: 2,
                name: 'Payment successful',
                message: '',
                time: '7 minutes ago',
                isUnread: false,
                avatar: null,
                type: 'success',
                icon: 'check'
            },
            {
                id: 3,
                name: 'Omah',
                message: 'just Approved your Urgent 2Kay request',
                time: '1 hour ago',
                isUnread: true,
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omah',
                type: 'approval'
            },
            {
                id: 4,
                name: 'You successfully created a bundle request',
                message: '',
                time: '2 hours ago',
                isUnread: false,
                avatar: null,
                type: 'success',
                icon: 'check'
            }
        ],
        thisWeek: [
            {
                id: 5,
                name: 'Ugomma',
                message: 'just sent you an Urgent 2Kay request',
                time: '6 May',
                isUnread: false,
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ugomma2',
                type: 'request'
            },
            {
                id: 6,
                name: 'Ashley',
                message: 'just approved your Urgent 2Kay request',
                time: '6 May',
                isUnread: false,
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ashley',
                type: 'approval'
            },
            {
                id: 7,
                name: 'Emeka',
                message: 'just approved your Urgent 2Kay request',
                time: '5 May',
                isUnread: false,
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emeka',
                type: 'approval'
            },
            {
                id: 8,
                name: 'You successfully created a bundle request',
                message: '',
                time: '4 May',
                isUnread: false,
                avatar: null,
                type: 'success',
                icon: 'check'
            },
            {
                id: 9,
                name: 'You successfully approved Ugomma\'s Urgent 2Kay request',
                message: '',
                time: '4 May',
                isUnread: false,
                avatar: null,
                type: 'success',
                icon: 'check'
            },
            {
                id: 10,
                name: 'Ugomma',
                message: 'just sent you an Urgent 2Kay request',
                time: '4 May',
                isUnread: false,
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ugomma3',
                type: 'request'
            },
            {
                id: 11,
                name: 'You rejected Emeka\'s Urgent 2kay request',
                message: '',
                time: '4 May',
                isUnread: false,
                avatar: null,
                type: 'rejection',
                icon: 'x'
            }
        ]
    };

    const filteredNotifications = activeTab === 'unread' 
        ? {
            today: notifications.today.filter(n => n.isUnread),
            thisWeek: notifications.thisWeek.filter(n => n.isUnread)
          }
        : notifications;

    const renderAvatar = (notification) => {
        if (notification.icon === 'check') {
            return (
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-green-600" />
                </div>
            );
        }
        if (notification.icon === 'x') {
            return (
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-red-600" />
                </div>
            );
        }
        if (notification.avatar) {
            return (
                <img 
                    src={notification.avatar} 
                    alt={notification.name}
                    className="w-12 h-12 rounded-full flex-shrink-0 bg-purple-100"
                />
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen bg-[#ECE8F0]">
            {/* Header */}
            <div className="bg-[#ECE8F0] border-b border-gray-200 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => navigate(-1)}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6 text-gray-900" />
                            </button>
                            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
                        </div>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <MoreVertical className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setActiveTab('all')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeTab === 'all' 
                                    ? 'bg-[#1B0B2E] text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            All
                        </button>
                        <button 
                            onClick={() => setActiveTab('unread')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeTab === 'unread' 
                                    ? 'bg-[#1B0B2E] text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Unread
                        </button>
                    </div>
                </div>
            </div>

            {/* Notifications Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                {/* Today Section */}
                {filteredNotifications.today.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">Today</h2>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100">
                            {filteredNotifications.today.map((notification) => (
                                <div 
                                    key={notification.id}
                                    className="flex items-start gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                    {renderAvatar(notification)}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-base text-gray-900">
                                            {notification.message ? (
                                                <>
                                                    <span className="font-semibold text-[#401A6D]">{notification.name}</span>
                                                    {' '}{notification.message}
                                                </>
                                            ) : (
                                                <span className="text-gray-900">{notification.name}</span>
                                            )}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                    {notification.isUnread && (
                                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* This Week Section */}
                {filteredNotifications.thisWeek.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-lg font-bold text-gray-900 mb-4">This Week</h2>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-100">
                            {filteredNotifications.thisWeek.map((notification) => (
                                <div 
                                    key={notification.id}
                                    className="flex items-start gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                    {renderAvatar(notification)}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-base text-gray-900">
                                            {notification.message ? (
                                                <>
                                                    <span className="font-semibold text-[#401A6D]">{notification.name}</span>
                                                    {' '}{notification.message}
                                                </>
                                            ) : (
                                                <span className="text-gray-900">{notification.name}</span>
                                            )}
                                        </p>
                                        <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                                    </div>
                                    {notification.isUnread && (
                                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {filteredNotifications.today.length === 0 && filteredNotifications.thisWeek.length === 0 && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
                        <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No notifications yet</h3>
                        <p className="text-sm text-gray-500">When you get notifications, they'll show up here</p>
                    </div>
                )}
            </div>
        </div>
    );
}