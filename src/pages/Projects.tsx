import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ProjectData from '../data/work.json';
import ProjectCard from "@/components/global/ProjectCard";

export default function Projects() {
  const projects = ProjectData;
  return (
    <>
      <Breadcrumb className="px-4 animate-slide-from-down-and-fade-1">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-darkwhitecolor hover:text-black dark:hover:text-whitecolor">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-darkwhitecolor" />
          <BreadcrumbItem>
            <BreadcrumbPage className="dark:text-whitecolor">Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="px-4 animate-slide-from-down-and-fade-2 scroll-m-20  text-4xl font-bold tracking-tight dark:text-whitecolor">All Projects</h1>
      <div className="flex flex-col gap-3 px-4 animate-slide-from-down-and-fade-3 pt-12">
        {projects.map(project => {
          return <ProjectCard project={project} key={project.id} className="desktop:w-full desktop:max-w-full md:w-full py-4 px-4 rounded-lg" />
        })}
      </div>
    </>
  )
}
