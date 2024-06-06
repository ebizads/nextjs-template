import * as React from 'react';
import Image from "next/image";
import { TextField, Button } from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Dropdown from '@/components/Dropdown';
import { useRouter } from "next/router";


export default function Register1() {
  const router = useRouter()
  const [birthday, setBday] = React.useState(null);
  const [gender, setGender] = React.useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];


  return (
    <main className='flex h-screen bg-white'>
      <div className='sm: w-1/2 bg-[url("/bg2.jpg")] bg-cover'></div>
      <div className="w-1/2 flex flex-col h-auto rounded-md border-2 px-20 bg-white shadow-lg">
        <div className="w-full flex justify-center my-10">
          <Image src="/ebizLogo.png" width={300} height={150} alt="eBiz Logo" />
        </div>
        <h1 className='text-black text-3xl font-bold '>Get started absolutely free</h1>
        <a className='text-black text-lg mb-10'>Already have an account? <Button className='capitalize underline text-lg'>Sign in</Button></a>  
        <form className="flex flex-col w-full items-center">
          <div className="flex w-full justify-between gap-7 mb-10">
            <TextField id="first-name" label="First Name" variant="outlined" required className="w-full" />
            <TextField id="last-name" label="Last Name" variant="outlined" required className="w-full" />
          </div>
          <TextField id="address" label="Address" variant="outlined" required className="w-full mb-10" />
          <div className="flex w-full justify-between gap-7 mb-10">
            <TextField id="email" label="Email" variant="outlined" required className="w-full" />
            <TextField id="mobile-no" label="Mobile No." variant="outlined" type='number'  required  className="w-full"/>
          </div>
          
          <div className="flex w-full justify-between gap-7 mb-10">
          <TextField id="email" label="Date of Birth" variant="outlined" type='date' required InputLabelProps={{shrink: true,}} className="w-full" />

            <div className='w-full'>
              <Dropdown
                label="Gender"
                options={genderOptions}
                value={gender}
                onChange={handleGenderChange}
              />
            </div>
          </div>
          
          <div className="flex w-full justify-between gap-7 mb-10">
            <TextField id="email" label="Password" variant="outlined" type='password' required className="w-full" />
            <TextField id="mobile-no" label="Confirm Password." variant="outlined" type='password'  required  className="w-full"/>
          </div>
          
          <div className='flex flex-col w-[45%] self-center'>
          <Button onClick={() => router.push('/Register2')} variant="contained" className="h-[50px] w-full hover:bg-black text-xl font-bold">Register</Button>
            <a className='text-black text text-justify'>By signing up, I agree to <Button className='capitalize underline'>Terms of Service</Button>and<Button className='capitalize underline'>Privacy Policy.</Button></a>
          </div>
        </form>
      </div>
    </main>
  );
}
