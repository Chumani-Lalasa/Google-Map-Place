"use client";
import CategoryList from "@/components/Home/CategoryList";
import GoogleMapView from "@/components/Home/GoogleMapView";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
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
   <div className="grid grid-cols-1 md:grid-cols-4">
    <div className="p-3">
      <CategoryList />
      <RangeSelect />
      <SelectRating />
      
    </div>
    <div className="col-span-3">
      <GoogleMapView />
    </div>
    <div className="">Second</div>
      {/* <h1>Hello World</h1>
      <button onClick={()=>signOut()}>Sign Out</button> */}
   </div>
  );
}
