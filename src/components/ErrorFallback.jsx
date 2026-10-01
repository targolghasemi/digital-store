const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Something went wrong</h2>
        <p className="mt-2 max-w-md text-sm text-gray-500 break-words">
          {error.message}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="mt-6 w-full max-w-xs rounded-lg bg-purple-700 px-5 py-2 text-sm font-medium text-white hover:bg-purple-800 sm:w-auto"
        >
          Try again
        </button>
      </div>
    );
  };
  
  export default ErrorFallback;