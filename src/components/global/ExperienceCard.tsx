import { ExperienceCardProps } from "@/lib/types";

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <a href={experience.job_link}>
      <div className="transition-all duration-300 border hover:border-darkwhitecolor dark:hover:border-transparent hover:bg-white hover:dark:bg-darkgreycolor border-transparent rounded-lg hover:py-4 hover:px-4 sm:hover:py-8 sm:hover:px-7">
        <time className="text-darkneoncolor dark:text-neoncolor font-ibm text-xs uppercase">{experience.range}</time>
        <p className="dark:text-whitecolor/90 font-semibold">{experience.job_title}</p>
        <a href={experience.job_link} className="text-sm dark:text-whitecolor/70 font-semibold">{experience.job}</a>
        <p className="dark:text-darkwhitecolor text-sm">{experience.role}</p>
        <ul className="flex flex-wrap gap-[11px] mt-2">
          {
            experience.tech.map(wl => {
              return <li key={wl.id} className="font-inconsolata text-xs text-darkneoncolor dark:text-neoncolor border border-darkneoncolor dark:border-neoncolor py-1 px-[7px] rounded-[3px]">
                {wl.skill}
              </li>
            })
          }
        </ul>
      </div>
    </a>
  )
}
