const EditProductPageSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-48 mb-6" />

      {[...Array(6)].map((_, i) => (
        <div className="mb-6" key={i}>
          <div className="h-4 bg-gray-300 rounded w-32 mb-2" />
          <div className="h-10 bg-gray-200 rounded w-full" />
        </div>
      ))}

      <div className="mb-6">
        <div className="h-4 bg-gray-300 rounded w-48 mb-2" />
        <div className="h-10 bg-gray-200 rounded w-full" />
      </div>

      <div className="mb-6">
        <div className="h-4 bg-gray-300 rounded w-48 mb-2" />
        <div className="h-10 bg-gray-200 rounded w-full" />
      </div>

      <div className="mb-6">
        <div className="h-4 bg-gray-300 rounded w-32 mb-2" />
        <div className="h-10 bg-gray-200 rounded w-1/3 mb-4" />
        <div className="flex gap-4">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-gray-200 rounded-md shadow-md"
            />
          ))}
        </div>
      </div>

      <div className="h-10 bg-gray-300 rounded w-full" />
    </div>
  );
};

export default EditProductPageSkeleton;
