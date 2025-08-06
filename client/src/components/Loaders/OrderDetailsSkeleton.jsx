const OrderDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 animate-pulse">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gray-200 h-8 w-48 rounded"></h2>

      <div className="p-4 sm:p-6 rounded-lg border space-y-8">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="space-y-2">
            <div className="bg-gray-200 h-5 w-40 rounded"></div>
            <div className="bg-gray-200 h-4 w-24 rounded"></div>
          </div>
          <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0 gap-2">
            <div className="h-6 w-24 rounded-full bg-gray-200"></div>
            <div className="h-6 w-24 rounded-full bg-gray-200"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="bg-gray-200 h-5 w-32 rounded"></div>
            <div className="bg-gray-200 h-4 w-44 rounded"></div>
            <div className="bg-gray-200 h-4 w-20 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="bg-gray-200 h-5 w-32 rounded"></div>
            <div className="bg-gray-200 h-4 w-48 rounded"></div>
            <div className="bg-gray-200 h-4 w-56 rounded"></div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="bg-gray-200 h-6 w-32 mb-4 rounded"></div>
          <table className="min-w-full text-gray-600">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Unit Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4" />
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <div className="h-4 w-12 bg-gray-200 rounded mx-auto"></div>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <div className="h-4 w-10 bg-gray-200 rounded mx-auto"></div>
                  </td>
                  <td className="py-2 px-4 text-center">
                    <div className="h-4 w-14 bg-gray-200 rounded mx-auto"></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default OrderDetailsSkeleton;
