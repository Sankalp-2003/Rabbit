const OrderTableSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 animate-pulse">
      <h2 className="text-xl sm:text-2xl font-bold mb-6 bg-gray-200 h-6 w-32 rounded"></h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-lg" />
                </td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-28"></div>
                </td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-12"></div>
                </td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                </td>
                <td className="py-2 px-2 sm:py-4 sm:px-4">
                  <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTableSkeleton;
