const UserManagementTableSkeleton = () => {
  const skeletonRows = Array.from({ length: 6 });

  return (
    <tbody className="animate-pulse">
      {skeletonRows.map((_, index) => (
        <tr key={index} className="border-b">
          <td className="p-4">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
          </td>

          <td className="p-4">
            <div className="h-4 w-40 bg-gray-200 rounded"></div>
          </td>

          <td className="p-4">
            <div className="h-9 w-28 bg-gray-200 rounded"></div>
          </td>

          <td className="p-4">
            <div className="h-9 w-20 bg-gray-300 rounded"></div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default UserManagementTableSkeleton;
