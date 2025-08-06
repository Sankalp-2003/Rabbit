const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg animate-pulse">
      <div className="flex flex-col md:flex-row">
        <div className="hidden md:flex flex-col space-y-4 mr-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-20 h-20 bg-gray-200 rounded-lg"></div>
          ))}
        </div>

        <div className="md:w-1/2 mb-4 md:mb-0">
          <div className="w-full h-[600px] bg-gray-200 rounded-lg"></div>
        </div>

        <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0"
            ></div>
          ))}
        </div>

        <div className="md:w-1/2 md:ml-10 flex flex-col space-y-4">
          <div className="h-8 bg-gray-200 rounded w-2/3"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-24 bg-gray-200 rounded"></div>

          <div>
            <div className="h-4 bg-gray-300 w-20 mb-2 rounded"></div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>

          <div>
            <div className="h-4 bg-gray-300 w-20 mb-2 rounded"></div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-10 h-8 rounded bg-gray-300"></div>
              ))}
            </div>
          </div>

          <div>
            <div className="h-4 bg-gray-300 w-24 mb-2 rounded"></div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded bg-gray-300"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-8 h-8 rounded bg-gray-300"></div>
            </div>
          </div>

          <div className="w-full h-10 bg-gray-300 rounded"></div>

          <div>
            <div className="h-6 bg-gray-200 w-40 mb-4 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 w-full rounded"></div>
              <div className="h-4 bg-gray-200 w-full rounded"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="h-8 w-60 mx-auto bg-gray-200 rounded mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-72 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
