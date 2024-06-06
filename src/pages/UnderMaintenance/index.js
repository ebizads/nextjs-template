import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';


export default function UnderMaintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className='text-[20rem] font-extralight text-green-700'>
          <EngineeringOutlinedIcon fontSize='inherit'/>
      </div>
      <h1 className="text-4xl font-bold text-black mb-4">Site Under Maintenance</h1>
      <p className="text-lg text-gray-800 mb-8">We're sorry for the inconvenience. Our site is currently undergoing maintenance. Please check back later.</p>
      <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Go to Home
      </a>
    </div>
  )
}


