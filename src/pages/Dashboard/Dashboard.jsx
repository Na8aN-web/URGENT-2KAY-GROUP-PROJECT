import { ChevronLeft, Search, Layers, CreditCard, Calendar, UserPlus } from "lucide-react";
import { StatCard } from "./components/StatCard";
import { ActionCard } from "./components/ActionCard";

export default function Dashboard() {
  const activities = [];

  return (
    <div className="min-h-screen bg-[#ECE8F0]">
      <div className="p-4 md:p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          <StatCard
            title="Requests Generated"
            value="0"
            icon={Layers}
            color="bg-yellow-50"
          />
          <StatCard
            title="Bills Sponsored"
            value="0"
            icon={CreditCard}
            color="bg-yellow-50"
          />
          <StatCard
            title="Bills Scheduled"
            value="0"
            icon={Calendar}
            color="bg-yellow-50"
          />
          <StatCard
            title="Relationships"
            value="0"
            icon={UserPlus}
            color="bg-yellow-50"
          />
        </div>

        {/* Action Cards - Show only first one on mobile */}
        <div className="mb-6 md:mb-8">
          <div className="md:hidden">
            <ActionCard
              title="Create A Bundle"
              description="Combine bills, subscriptions, and personal needs into one simple request."
              icon={Layers}
              bgColor="bg-gradient-to-br from-purple-700 to-purple-900"
              textColor="text-white"
              buttonText="Get Started"
            />
          </div>

          <div className="hidden md:grid grid-cols-4 gap-6">
            <ActionCard
              title="Create A Bundle"
              description="Combine bills, subscriptions, and personal needs into one simple request."
              icon={Layers}
              bgColor="bg-gradient-to-br from-purple-700 to-purple-900"
              textColor="text-white"
              buttonText="Get Started"
            />
            <ActionCard
              title="Sponsor A Bundle"
              description="Approve and support a bundle request from someone you trust."
              icon={CreditCard}
              bgColor="bg-gradient-to-br from-green-800 to-green-950"
              textColor="text-white"
              buttonText="Get Started"
            />
            <ActionCard
              title="Schedule A Bundle"
              description="Automate recurring payments for bills and expenses ahead of time."
              icon={Calendar}
              bgColor="bg-gradient-to-br from-teal-600 to-teal-800"
              textColor="text-white"
              buttonText="Get Started"
            />
            <ActionCard
              title="Create A Relationship"
              description="Link a sponsor or beneficiary to your account for seamless transactions."
              icon={UserPlus}
              bgColor="bg-gradient-to-br from-blue-700 to-blue-900"
              textColor="text-white"
              buttonText="Get Started"
            />
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900">Recent Activities</h2>

            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-2 w-64 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Mobile search icon */}
            <button className="md:hidden p-2">
              <Search className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {activities.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 md:py-16">
              <div className="mb-4 md:mb-6 w-48 md:w-64">
                <svg viewBox="0 0 200 200" className="w-full h-auto">
                  <circle cx="100" cy="60" r="40" fill="#F3E8D2" opacity="0.3" />
                  <ellipse cx="100" cy="180" rx="60" ry="10" fill="#E5E5E5" />

                  {/* Person */}
                  <ellipse cx="100" cy="50" rx="12" ry="15" fill="#333" />
                  <rect x="88" y="65" width="24" height="35" rx="2" fill="#666" />
                  <rect x="88" y="100" width="10" height="30" rx="2" fill="#666" />
                  <rect x="102" y="100" width="10" height="30" rx="2" fill="#666" />

                  {/* Backpack */}
                  <path d="M 75 70 Q 75 60 85 60 L 85 50 Q 85 45 90 45 L 110 45 Q 115 45 115 50 L 115 60 Q 125 60 125 70 L 125 110 Q 125 120 115 120 L 85 120 Q 75 120 75 110 Z" fill="#F4C430" />
                  <rect x="90" y="75" width="20" height="30" rx="3" fill="#E5B02E" />
                  <circle cx="95" cy="90" r="3" fill="#666" />

                  {/* Buildings */}
                  <g transform="translate(140, 80)">
                    <rect x="0" y="40" width="20" height="60" fill="#E5E5E5" opacity="0.6" />
                    <rect x="25" y="20" width="25" height="80" fill="#E5E5E5" opacity="0.6" />
                    <rect x="0" y="45" width="5" height="5" fill="#999" opacity="0.3" />
                    <rect x="0" y="55" width="5" height="5" fill="#999" opacity="0.3" />
                  </g>

                  {/* Plants */}
                  <g transform="translate(130, 120)">
                    <path d="M 0 0 Q -5 -10 -3 -15 Q -1 -18 2 -15 Q 5 -10 0 0" fill="#B8956A" />
                    <path d="M 5 0 Q 0 -8 2 -12 Q 4 -15 7 -12 Q 10 -8 5 0" fill="#B8956A" />
                  </g>
                </svg>
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2 text-center px-4">
                No transactions yet.
              </h3>
              <p className="text-sm text-gray-600 mb-4 md:mb-6 text-center">
                Complete your first payment to see it here!
              </p>
              <button className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-full md:rounded-lg font-semibold hover:shadow-lg transition-all text-sm md:text-base">
                Get Started
              </button>
            </div>
          ) : (
            <Activities activities={activities} />
          )}
        </div>
      </div>
    </div>
  );
}