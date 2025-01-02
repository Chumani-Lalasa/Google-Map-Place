"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const {data: session} = useSession();
  const router = useRouter();
  useEffect(() => { 
    if(!session?.user){
      router.push('/login')
    }
  }, [session]);
  return (
   <div className="grid grid-cols-4">
    <div className="bg-red-300 h-screen">First</div>
    <div className="bg-blue-300 col-span-3">Second</div>
      {/* <h1>Hello World</h1>
      <button onClick={()=>signOut()}>Sign Out</button> */}
   </div>
  );
}
