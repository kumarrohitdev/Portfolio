import Image from "next/image";

export default function Aboutphoto() {
  return (
    <div className="flex justify-center">
        <Image className="rounded-md" src={"/Profile.jpg"} alt="my_Profile" priority height={150} width={200} />
    </div>
  )
}
