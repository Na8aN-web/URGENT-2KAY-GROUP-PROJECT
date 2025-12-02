import { Outlet, NavLink, useNavigate } from "react-router";
import {
  Home,
  FileText,
  Users,
  ArrowUpDown,
  HelpCircle,
  User,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  MoreVertical,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useUser } from "../../../hooks/useUser";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const notificationRef = useRef(null);
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const seeAllNotifications = () => {
    navigate("/dashboard/notifications");
  };

  const currentUserName =
    location.pathname.includes("/sponsor-view") ||
    location.pathname.includes("/sponsor/inbox") ||
    location.pathname.includes("/sponsor/review/REQ1001") ||
    location.pathname.includes("/dashboard/success")
      ? "Ngozi"
      : user?.firstName || "User";

  const handleConnectWallet = () => {
    navigate("/dashboard/sponsor/fund/REQ1001");
  };

  // Close notification when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    if (isNotificationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNotificationOpen]);

  const notifications = {
    today: [
      {
        id: 1,
        name: "Ugomma",
        message: "just sent you an urgent 2Kay request",
        time: "4 minutes ago",
        isUnread: true,
        avatar: "👤",
      },
      {
        id: 2,
        name: "Agunwa",
        message: "just sent you an urgent 2Kay request",
        time: "30 minutes ago",
        isUnread: true,
        avatar: "👔",
      },
      {
        id: 3,
        name: "Omah",
        message: "just Approved your urgent 2Kay request",
        time: "1 hour ago",
        isUnread: true,
        avatar: "👨",
      },
    ],
    thisWeek: [
      {
        id: 4,
        name: "Ugomma",
        message: "just sent you an urgent 2Kay request",
        time: "6 May",
        isUnread: false,
        avatar: "👤",
      },
      {
        id: 5,
        name: "Ashley",
        message: "just Approved your urgent 2Kay request",
        time: "6 May",
        isUnread: false,
        avatar: "👩",
      },
      {
        id: 6,
        name: "Emeka",
        message: "just Approved your urgent 2Kay request",
        time: "1 hour ago",
        isUnread: false,
        avatar: "👨‍💼",
      },
    ],
  };

  const filteredNotifications =
    activeTab === "unread"
      ? {
          today: notifications.today.filter((n) => n.isUnread),
          thisWeek: notifications.thisWeek.filter((n) => n.isUnread),
        }
      : notifications;

  const unreadCount = [
    ...notifications.today,
    ...notifications.thisWeek,
  ].filter((n) => n.isUnread).length;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 md:w-64 w-full bg-[#1B0B2E] text-white flex flex-col transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
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
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
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
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
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
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
              }`
            }
          >
            <Users className="w-5 h-5" />
            <span>Relationships</span>
          </NavLink>

          <NavLink
            to="/dashboard/schedule-bill"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
              }`
            }
          >
            <User className="w-5 h-5" />
            <span>Schedule bill</span>
          </NavLink>

          <NavLink
            to="/dashboard/transaction-history"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
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
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
              }`
            }
          >
            <HelpCircle className="w-5 h-5" />
            <span>Help</span>
          </NavLink>

          <NavLink
            to="/dashboard/user-profile"
            onClick={closeSidebar}
            className={({ isActive }) =>
              `w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-4 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
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
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b-2 border-[#1B0B2E1A] px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 lg:gap-8 flex-1">
              <button
                onClick={toggleSidebar}
                className="lg:hidden p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-900" />
              </button>

              <div className="hidden sm:block">
                <h1 className="text-base lg:text-lg font-bold text-gray-900">
                  Hi, {currentUserName}
                </h1>
                <p className="text-xs text-gray-500">
                  Let's simplify your finances!
                </p>
              </div>

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
              <button
                onClick={handleConnectWallet}
                className="hidden sm:block px-4 lg:px-6 py-2 bg-[#401A6D] text-white rounded-[58px] font-semibold hover:bg-purple-800 text-xs lg:text-sm transition-colors"
              >
                Connect Wallet
              </button>

              {/* Notification Bell with Dropdown */}
              <div className="relative" ref={notificationRef}>
                <button
                  onClick={toggleNotification}
                  className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {isNotificationOpen && (
                  <div className="absolute -right-10 md:right-0 mt-2 w-96 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 max-h-[600px] overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-gray-900">
                          Notifications
                        </h2>
                        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>

                      {/* Tabs */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setActiveTab("all")}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeTab === "all"
                              ? "bg-[#1B0B2E] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          All
                        </button>
                        <button
                          onClick={() => setActiveTab("unread")}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeTab === "unread"
                              ? "bg-[#1B0B2E] text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          Unread
                        </button>
                      </div>
                    </div>

                    {/* Notifications List */}
                    <div className="overflow-y-auto max-h-[480px]">
                      {/* Today Section */}
                      {filteredNotifications.today.length > 0 && (
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-bold text-gray-900">
                              Today
                            </h3>
                            <button
                              onClick={seeAllNotifications}
                              className="text-xs text-purple-600 hover:text-purple-700 font-medium"
                            >
                              See all
                            </button>
                          </div>

                          {filteredNotifications.today.map((notification) => (
                            <div
                              key={notification.id}
                              className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors mb-2"
                            >
                              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                                {notification.avatar}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-900">
                                  <span className="font-semibold text-purple-600">
                                    {notification.name}
                                  </span>{" "}
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                  {notification.time}
                                </p>
                              </div>
                              {notification.isUnread && (
                                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* This Week Section */}
                      {filteredNotifications.thisWeek.length > 0 && (
                        <div className="p-4 border-t border-gray-100">
                          <h3 className="text-sm font-bold text-gray-900 mb-3">
                            This Week
                          </h3>

                          {filteredNotifications.thisWeek.map(
                            (notification) => (
                              <div
                                key={notification.id}
                                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors mb-2"
                              >
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                                  {notification.avatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm text-gray-900">
                                    <span className="font-semibold text-purple-600">
                                      {notification.name}
                                    </span>{" "}
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {notification.time}
                                  </p>
                                </div>
                                {notification.isUnread && (
                                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                                )}
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* Empty State */}
                      {filteredNotifications.today.length === 0 &&
                        filteredNotifications.thisWeek.length === 0 && (
                          <div className="p-8 text-center">
                            <Bell className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">
                              No notifications yet
                            </p>
                          </div>
                        )}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate("/dashboard/user-profile")}
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
