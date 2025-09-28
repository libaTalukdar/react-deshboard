import React from "react";

// const salesData = [
//   { id: 1, customer: "John Doe", date: "2025-09-01", status: "Success", amount: 120.5 },
//   { id: 2, customer: "Jane Smith", date: "2025-09-02", status: "Pending", amount: 80.0 },
//   { id: 3, customer: "Michael Lee", date: "2025-09-03", status: "Success", amount: 150.25 },
//   { id: 4, customer: "Emily Davis", date: "2025-09-04", status: "Success", amount: 95.75 },
// ];

const salesData  = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  customer: `Customer ${index + 1}`,
  date: new Date(
    2025,
    Math.floor(Math.random() * 12),  // random month (0–11)
    Math.floor(Math.random() * 28) + 1 // random day (1–28)
  )
    .toISOString()
    .split("T")[0], // format YYYY-MM-DD
  status: ["Success", "Pending"][Math.floor(Math.random() * 2)],
  amount: (Math.random() * 200).toFixed(2), // random sales amount
}));







const summary = [
  { title: "Today’s Sales", value: "$1,230" },
  { title: "Revenue", value: "$9,420" },
  { title: "Orders", value: "120" },
  { title: "Customers", value: "85" },
];

const Sales = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Sales Report</h1>
        <p className="text-gray-500">Overview of sales performance</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summary.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-500 shadow rounded-lg p-4 flex flex-col items-center text-center"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-xl font-semibold text-gray-800">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Sales Table */}
      <div className="bg-gray-400 shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Sales</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs uppercase bg-gray-100 text-gray-500">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((sale) => (
                <tr key={sale.id} className="border-b">
                  <td className="px-4 py-2">{sale.id}</td>
                  <td className="px-4 py-2">{sale.customer}</td>
                  <td className="px-4 py-2">{sale.date}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        sale.status === "Success"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 font-medium">${sale.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sales;
