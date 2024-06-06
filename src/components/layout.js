import Headernav from "./Headernav";
import { useRouter } from "next/router";
import Header from "./Header";

export default function Layout({ children }) {
  
  const router = useRouter();
  const showHeader = !['/Login1', '/Login2'].includes(router.pathname);

  return (
    <div className="flex flex-row ">
        {showHeader && <Header />}

      <div className="flex flex-col w-full">
        <div className="flex flex-1">
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
