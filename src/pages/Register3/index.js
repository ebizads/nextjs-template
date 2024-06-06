import Image from "next/image";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from "@mui/icons-material/AccountCircle";
import SendIcon from '@mui/icons-material/Send';

export default function Register3() {
    const router = useRouter()
    return (
        <main
      className='flex screen h-screen bg-white  items-center justify-center'
    >
      <div className="w-[50rem] h-auto rounded-md border-2 px-32 py-16 bg-white drop-shadow-lg">
        <div className="w-full flex flex-col justify-center">
          <Image src="/ebizLogo.png" className="mb-10 self-center "
           width={300}
           height={150}/>
           <h1 className='self-center text-black text-2xl font-bold '>Get started absolutely free</h1>
        
        <a className='self-center text-black text-lg mb-10'>Already have an account?<Button className='capitalize hover:underline text-lg font-bold'>Sign in</Button></a>
        </div>
        
        <form className="py-5 px-10 flex justify-center">
          
          <div className="flex w-full flex-col space-y-5">
            <TextField id="outlined-basic" label="Username" variant="outlined"  InputProps={{
               style: { borderRadius: "8px" },
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}/>

            <div className="w-full flex justify-between">
            <TextField id="outlined-basic" label="Mobile Number" variant="outlined" className="w-[70%]"  InputProps={{
               style: { borderRadius: "8px" },
              endAdornment: (
                <InputAdornment position="end" className=" p-0 m-0">
                  <Button className=" hover:text-black items-center flex justify-center max-w-fit m-0 p-0"><SendIcon/></Button>
                </InputAdornment>
              ),
            }}/>
            <TextField id="outlined-basic" label="OTP" variant="outlined" className="w-[20%]"/>
            </div>
            
            <TextField id="outlined-basic" label="Password" type='password' variant="outlined" InputProps={{
               style: { borderRadius: "8px" },
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}/>
            <Button onClick={() => router.push('/Dashboard1')} variant="outlined"  className=" h-[50px] w-[50%] self-center text-xl font-bold rounded-lg">Sign Up</Button>
            <div className="self-center"><p className="text-black">Already have an account?<Button className="hover:underline underline-offset-1 font-bold"> Sign in</Button></p></div>
          </div>
        </form>
        
      </div>
    </main>
  );
}
