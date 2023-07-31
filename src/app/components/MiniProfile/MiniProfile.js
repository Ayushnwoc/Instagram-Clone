"use client";
import "./MiniProfile.css"
import Image from "next/image"
import Link from "next/link";
import { useRouter } from 'next/navigation'
import ayush from "../../asset/Ayush.png"


const MiniProfile = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <Image onClick={() => router.push('../../components/')}
        src={ayush}
        alt="Mini profile pic"
        className="profilePic"
      />
      <div className="startEnd">
        <div>
          <Link href="../../components/" className="font-bold">ayush__kumar73</Link>
          <h3  className="text-sm text-gray-400">Ayush Kumar</h3>
        </div>
        <button className="signOut">Sign Out</button>
      </div>
    </div>
  )
}

export default MiniProfile
