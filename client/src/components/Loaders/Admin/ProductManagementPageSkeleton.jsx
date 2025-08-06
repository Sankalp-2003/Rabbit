import React from "react";

const ProductManagementPageSkeleton = () => {
  const skeletonRows = Array.from({ length: 20 });

  return (
    <div className="max-w-7xl mx-auto p-6 animate-pulse">
      <h2 className="text-2xl font-bold mb-6 bg-gray-200 rounded h-8 w-64"></h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">SKU</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {skeletonRows.map((_, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </td>
                <td className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </td>
                <td className="p-4 flex gap-2">
                  <div className="h-8 w-16 bg-gray-200 rounded"></div>
                  <div className="h-8 w-16 bg-gray-200 rounded"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagementPageSkeleton;
