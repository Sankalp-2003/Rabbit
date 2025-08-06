const DashboardSkeleton = () => {
  const cards = [1, 2, 3];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
      {cards.map((_, i) => (
        <div
          key={i}
          className="p-4 shadow-md rounded-lg border border-gray-200 space-y-4"
        >
          <div className="h-6 w-32 bg-gray-200 rounded"></div>

          <div className="h-8 w-24 bg-gray-300 rounded"></div>

          {i > 0 && <div className="h-4 w-36 bg-gray-200 rounded"></div>}
        </div>
      ))}
    </div>
  );
};

export default DashboardSkeleton;
