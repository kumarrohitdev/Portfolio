import AboutParagraph from "@/app/Components/AboutParagraph";
import Aboutphoto from "@/app/Components/AboutPhoto";

export default function About() {
  return (
    <div>
        <h1 className="text-center p-12 text-3xl font-semibold">About <span className="text-blue-500 font-bold">Me</span></h1>
        {/* //content goes Here */}
        <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mx-auto max-w-5xl gpa-6">
<AboutParagraph />
<Aboutphoto />
        </div>
    </div>
  )
}
