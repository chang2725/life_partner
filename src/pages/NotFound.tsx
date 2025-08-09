import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-50 text-gray-800 p-6">
      {/* Animated Avatar */}
      <div className="text-7xl animate-bounce mb-4">🧑‍💼</div>

      {/* Talk Bubble */}
      <div className="text-center animate-fade-in-up">
        <h1 className="text-4xl font-extrabold mb-2">Lost on the Internet?</h1>
        <p className="text-lg text-gray-600 mb-6">
          Don't worry. Before the void claims you...<br />
          <span className="inline-block mt-2 font-semibold text-blue-600 animate-pulse">
            Get LIC Insurance with me!
          </span>
        </p>

        <a
          href="/life-insurance"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg"
        >
          Secure Your Future 💼
        </a>

        <p className="mt-4 text-sm text-gray-400">
          Or just <a href="/" className="underline text-blue-500">go back home</a> 🏠
        </p>
      </div>
    </div>
  );
};

export default NotFound;
