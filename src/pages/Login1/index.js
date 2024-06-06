import Image from "next/image";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';

export default function Login1() {
    const router = useRouter()
    return (
    <main
      className='flex w-screen h-screen bg-white'
    >
        <div className='w-2/3 bg-[url("/bg2.jpg")] bg-cover'>
        </div>
      <div className="w-1/3 flex flex-col justify-center h-auto rounded-md border-2 px-10 py-16 bg-white shadow-lg">
        <div className="w-full flex justify-center ">
          <Image src="/ebizLogo.png" className="m-7  "
           width={300}
           height={150}/>
        </div>
        <form className="py-5  flex flex-col w-full items-center">
          
          <div className="w-[70%] flex flex-col space-y-5">
            <TextField id="outlined-basic" label="Email" variant="outlined" color="primary" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }} />
            <TextField id="outlined-basic" label="Password"type='password' variant="outlined" InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}/>
            <Button variant="text" type="submit" className=" text-black text-lgf font-bold justify-end underline underline-offset-2">Forget Password?</Button>
            <Button onClick={() => router.push('/Login2')} variant="outlined" className=" h-[50px] text-xl font-bold">Login</Button>
            <div className="self-center"><p className="text-black">Don't have an account?<Button className="underline underline-offset-1 font-bold"> Sign up</Button></p></div>
          </div>
        </form>
        
      </div>
    </main>
  );
}
