import { useRouter } from "next/router";

export default function Dashboard() {
  
  const router = useRouter()

  return (
    <main className='flex flex-col w-auto min-h-screen p-5 sm:p-10 md:p-20 space-y-5 bg-gray-100 '>

      
      <div className="bg-green-100 w-full rounded-[20px] p-5 sm:p-10 flex flex-col sm:flex-row justify-between items-center">
        <div className="space-y-2">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">Welcome back 👋</div>
          <div className="text-md sm:text-lg text-gray-600">Alex</div>
          <div className="text-sm sm:text-md text-gray-500">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</div>
        </div>
        <button onClick={()=> router.push('/Page404')} className="mt-5 sm:mt-0 bg-green-500 text-white px-4 py-2 rounded-md">Go Now</button>
      </div>        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-gray-500">Total Active Users</div>
          <div className="text-2xl font-bold">18,765</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-gray-500">Total Installed</div>
          <div className="text-2xl font-bold">4,876</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-gray-500">Total Downloads</div>
          <div className="text-2xl font-bold">678</div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <div className="text-gray-500">Featured App</div>
          <div className="text-2xl font-bold">Productivity Hacks</div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-lg shadow h-64">Content</div>
        <div className="bg-white p-5 rounded-lg shadow h-64">Content</div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white p-5 rounded-lg shadow h-64">Content</div>
        <div className="bg-white p-5 rounded-lg shadow h-64">Content</div>
      </div>

    </main>
  );
}
