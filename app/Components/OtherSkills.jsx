import { Database } from "@/app/Data/Skills"
export default function OtherSkills() {
  return (
    <div>
        <ul className="shadow-md dark:bg-gray-900 bg-gray-500 p-4 rounded-md">
          <h1 className="text-xl font-bold text-gray-50">Other</h1>
            {Database.map((item,index)=>(
<li className="flex mt-2 justify-center items-center rounded-md p-2 dark:text-white border-2 border-t-blue-500 border-opacity-50 border-l-pink-500 border-r-yellow-300 hover:transform hover:scale-105  cursor-pointer" key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
