import BackendSkills from "@/app/Components/BackendSkills";
import DatabaseSkills from "@/app/Components/DataBaseSkills";
import FrontendSkills from "@/app/Components/FrontendSkills";
import OtherSkills from "@/app/Components/OtherSkills";
import DevopsData from "@/app/Components/DevopsSkills";


export default function Skills() {
  return (
    <div className="mt-20 max-w-6xl ">
        <h1 className="text-3xl text-center font-semibold">What I <span className="font-bold text-blue-500">Know</span></h1>


        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 pt-12">
            <FrontendSkills />
            <BackendSkills />
            <DatabaseSkills />
            <DevopsData />
            <OtherSkills />
        </div>
    </div>
  )
}
