// components/Layout.jsx
import { Outlet, NavLink, useNavigate } from 'react-router';
import { Home, FileText, Users, ArrowUpDown, ChevronLeft, HelpCircle, User, LogOut, Bell, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DashboardLayout() {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logging out...');
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed lg:static inset-y-0 left-0 z-50 md:w-64 w-full bg-[#1B0B2E] text-white flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close button for mobile */}
                <button
                    onClick={closeSidebar}
                    className="absolute top-4 right-4 lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <span className="text-[#1B0B2E] font-bold text-sm">U</span>
                        </div>
                        <span className="text-xl font-bold">Urgent2k</span>
                    </div>
                </div>

                <nav className="flex-1 mt-16 px-3">
                    <NavLink
                        to="/dashboard"
                        end
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'
                            }`
                        }
                    >
                        <Home className="w-5 h-5" />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/generate-request"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'
                            }`
                        }
                    >
                        <FileText className="w-5 h-5" />
                        <span>Generate Request</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/relationships"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'
                            }`
                        }
                    >
                        <Users className="w-5 h-5" />
                        <span>Relationships</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/transaction-history"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'
                            }`
                        }
                    >
                        <ArrowUpDown className="w-5 h-5" />
                        <span>Transaction History</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/help"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'
                            }`
                        }
                    >
                        <HelpCircle className="w-5 h-5" />
                        <span>Help</span>
                    </NavLink>

                    <NavLink
                        to="/dashboard/profile"
                        onClick={closeSidebar}
                        className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${isActive ? 'bg-white/10' : 'hover:bg-white/5'
                            }`
                        }
                    >
                        <User className="w-5 h-5" />
                        <span>Profile</span>
                    </NavLink>
                </nav>

                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-7 py-4 hover:bg-white/5 transition-colors"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Log out</span>
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-[#ECE8F0] overflow-auto">
                {/* Header */}
                <div className="bg-[#ECE8F0] border-b-2 border-[#1B0B2E1A] px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 lg:gap-8 flex-1">
                            {/* Hamburger Menu Button */}
                            <button
                                onClick={toggleSidebar}
                                className="lg:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <Menu className="w-6 h-6 text-gray-900" />
                            </button>

                            <div className="hidden sm:block">
                                <h1 className="text-base lg:text-lg font-bold text-gray-900">Hi, Ada</h1>
                                <p className="text-xs text-gray-500">Let's simplify your finances!</p>
                            </div>

                            {/* Search - Hidden on small screens */}
                            <div className="relative hidden md:block flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="pl-10 pr-4 py-2 w-full rounded-[58px] text-xs bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* Connect Wallet - Hidden on small screens */}
                            <button className="hidden sm:block px-4 lg:px-6 py-2 bg-[#401A6D] text-white rounded-[58px] font-semibold hover:bg-purple-800 text-xs lg:text-sm transition-colors">
                                Connect Wallet
                            </button>

                            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>

                            <button
                                onClick={() => navigate('/profile')}
                                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <User className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search Bar */}
                    <div className="relative md:hidden mt-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 w-full rounded-[58px] text-xs bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Page Content */}
                <Outlet />
            </div>
        </div>
    );
}