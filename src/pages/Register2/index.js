import Image from "next/image";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/router";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';

export default function Register2() {
    const router = useRouter()
    return (
    <main
      className='flex w-screen h-screen bg-white'
    >
        <div className='w-2/3 bg-[url("/bg2.jpg")] bg-cover'>
        </div>
      <div className="w-1/3  flex flex-col justify-center h-full rounded-md border-2 px-10  bg-white shadow-lg">
          <Image src="/ebizLogo.png" className="self-center mb-10  "
           width={300}
           height={150}/>
        <form className="  flex flex-col w-full ">
        
        <h1 className='self-center text-black text-3xl font-bold '>Get started absolutely free</h1>
        
        <a className='self-center text-black text-lg mb-10'>Already have an account?<Button className='capitalize underline text-lg font-bold'>Sign in</Button></a>  
        
          <div className="w-full flex flex-col space-y-5">
            
          <div className="flex flex-row w-[full] justify-between ">
                <TextField id="firstName" label="First Name" variant="outlined" className="w-[45%]" InputProps={{ style: { borderRadius: "8px" } }}
                />
                <TextField id="lastNames" label="Last Name" variant="outlined" className="w-[45%]" InputProps={{ style: { borderRadius: "8px" } }}
                />
            </div>

            
                <TextField id="username" label="Username" variant="outlined"     InputProps={{ style: { borderRadius: "8px" } ,
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }} 
                />
                <TextField id="email" label="Email" variant="outlined"  InputProps={{ style: { borderRadius: "8px" } ,
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }} 
                />
                <TextField id="password" label="Password"type='password' variant="outlined" InputProps={{ style: { borderRadius: "8px" } ,
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                />
            
            
            <Button variant="text" type="submit" className="text-lgf font-bold justify-end underline underline-offset-2">Forget Password?</Button>
            <Button onClick={() => router.push('/Register3')} variant="contained" className="h-[50px] w-full hover:bg-black text-xl rounded-xl font-bold">Register</Button>
            <div className="self-center"><p className="text-black">Don't have an account?<Button className="underline underline-offset-1 font-bold"> Sign up</Button></p></div>
          </div>
        </form>
        
      </div>
    </main>
  );
}
