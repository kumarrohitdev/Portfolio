import ProjectCard from "@/app/Components/ProjectCard";

export default function Project() {
  return (
    <div className="mt-12 ">
        <h1 className="text-center text-3xl font-semibold">My <span className="text-blue-600 font-bold ">Projects</span></h1>


        <div>
            <ProjectCard />
        </div>
    </div>
  )
}
