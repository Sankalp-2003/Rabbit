import React from "react";

const OrderManagementSkeleton = () => {
  const rows = Array.from({ length: 5 });

  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      <h2 className="text-2xl font-bold mb-6 bg-gray-200 h-6 w-64 rounded"></h2>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-shadow-gray-700">
            <tr>
              <th className="py-3 px-4">Order Id</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((_, i) => (
              <tr key={i} className="border-b">
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-10 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="py-4 px-4">
                  <div className="h-10 bg-gray-300 rounded w-40"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagementSkeleton;
