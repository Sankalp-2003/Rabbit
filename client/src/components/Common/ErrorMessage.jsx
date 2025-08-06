const ErrorMessage = ({ error }) => {
  if (!error) return null;
  return (
    <div className="h-[20vh] w-full flex items-center justify-center">
      <h4 className="text-xl md:text-2xl font-semibold text-red-600">
        Error: {error}
      </h4>
    </div>
  );
};

export default ErrorMessage;
