import Image from "next/image"
import ProjectData from "@/app/Data/ProjectData"
export default function ProjectCard() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-auto max-w-6xl mt-20  ">{ProjectData.map((item, index)=>(
        <div key={index}>
            <div className=" rounded-lg cursor-pointer hover:brightness-50 hover:transform hover:scale-95 transition-all delay-100 ">
                 <div>
                    <Image  src={`${item.Image}`} alt="project" priority width={400} height={200} className="h-52 w-96 rounded-t-lg"/>
                    <div className="bg-[#F8F9FA] text-[#333333] dark:bg-[#292C33] dark:text-[#FFFFFF] accent-[#007BFF] dark:accent-[#4CAF50] rounded-b-lg pb-4">
                        <h1 className="text-center  text-xl font-bold pt-2">{item.Title}</h1>

                        <p className="pl-2 mx-auto pr-2  text-center w-fit">{`${item.Stack},`}</p>
                    </div>
                </div>


            </div>
    
        </div>
    ))}</div>
  )
}
