import { Button } from "@mui/material";
import { useRouter } from 'next/router';
import { useState } from "react";
import { useEffect } from "react";


export default function Dashboard1() {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);


  return (
    <main className={`flex flex-col w-full min-h-screen px-5 pt-5 sm:p-10 md:p-20 space-y-5 bg-gray-100 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Top Section */}
      <div className="bg-blue-200 w-full h-32 sm:h-40 md:h-48 rounded-2xl flex flex-row justify-between px-5 sm:px-10 items-center">
        <div className="text-lg sm:text-xl md:text-2xl font-bold">Dashboard</div>
      </div>

      {/* Main Content Section */}
      <div className="w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex rounded-2xl w-full md:w-2/3 h-64 shadow bg-white  p-5">
          <div className="text-md sm:text-lg md:text-xl font-semibold">Main Content Area</div>
          {/* Add your main content here */}
        </div>
        <div className="flex rounded-2xl w-full md:w-1/3 h-64 shadow bg-white  p-5">
          <div className="text-md sm:text-lg md:text-xl font-semibold">Secondary Content</div>
          {/* Add your secondary content here */}
        </div>
      </div>

      {/* Secondary Content Section */}
      <div className="w-full flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
        <div className="flex rounded-2xl w-full lg:w-1/3 h-64 shadow bg-white  p-5">
          <div className="text-md sm:text-lg md:text-xl font-semibold">Section 1</div>
          {/* Add your section 1 content here */}
        </div>
        <div className="flex rounded-2xl w-full lg:w-1/3 h-64 shadow bg-white  p-5">
          <div className="text-md sm:text-lg md:text-xl font-semibold">Section 2</div>
          {/* Add your section 2 content here */}
        </div>
        <div className="flex rounded-2xl w-full lg:w-1/3 h-64 shadow bg-white  p-5">
          <div className="text-md sm:text-lg md:text-xl font-semibold">Section 3</div>
          {/* Add your section 3 content here */}
        </div>
      </div>

      {/* Footer Section */}

      <footer className="w-fit fixed bottom-0 self-center flex justify-center items-center ">
        <Button className="text-sm text-gray-500" onClick={() => router.push('/Dashboard')}>&copy; 2024 Your Company. All rights reserved.</Button>
      </footer>

    </main>
  );
}
