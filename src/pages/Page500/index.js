

export default function Page500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">500 - Internal Server Error</h1>
      <p className="text-lg text-gray-600 mb-8">Sorry, something went wrong on our end. Please try again later.</p>
      <a href="/UnderMaintenance" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </a>
    </div>
  );
};


