export const Activities = ({ activities }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-3">
        <thead>
          <tr className="text-gray-500 text-sm">
            <th className="py-2">Request Bundle</th>
            <th className="py-2">Sponsor</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Date</th>
            <th className="py-2">Time</th>
            <th className="py-2">Status</th>
            <th className="py-2 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item, index) => (
            <tr key={index} className="bg-[#F9F9F9] rounded-xl text-sm text-gray-700">
              <td className="py-4 rounded-l-lg">{item.bundle}</td>
              <td className="py-4">{item.sponsor}</td>
              <td className="py-4">{item.amount}</td>
              <td className="py-4">{item.date}</td>
              <td className="py-4">{item.time}</td>
              <td className="py-4">
                <span className={
                  item.status === "Pending"
                    ? "text-yellow-500"
                    : item.status === "Completed"
                    ? "text-green-600"
                    : "text-gray-600"
                }>
                  {item.status}
                </span>
              </td>
              <td className="py-4 px-2 text-right rounded-r-lg">
                <button className="text-purple-600 font-medium hover:underline">
                  View details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};