import { ProjectCardProps } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons'
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn("rounded-[4px] bg-white dark:bg-darkgreycolor py-8 px-7 flex flex-col justify-between w-full desktop:max-w-[337px] border md:w-[48%] md:min-w-[310px] border-greycolor", className)} >
      <div>
        <div className="flex justify-between items-center">
          <time className="text-darkneoncolor dark:text-neoncolor font-ibm text-sm">{project.year}</time>
          <ul>
            {
              project.wlinks.map(wl => {
                return <li key={wl.id}>
                  <a href={wl.link} target="_blank" rel="noopener noreferrer" aria-label={wl.icon}>
                    {wl.icon === 'github' && <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-darkwhitecolor hover:text-darkgreycolor dark:hover:text-neoncolor" />}
                    {wl.icon === 'kaggle' && <FontAwesomeIcon icon={faKaggle} className="w-5 h-5 text-darkwhitecolor hover:text-darkgreycolor dark:hover:text-neoncolor" />}
                    {wl.icon === 'tableau' && <FontAwesomeIcon icon={faKaggle} className="w-5 h-5 text-darkwhitecolor hover:text-darkgreycolor dark:hover:text-neoncolor" />}
                  </a>
                </li>
              })
            }
          </ul>
        </div>
        <h3 className="mt-1 mb-2 dark:text-whitecolor">{project.title}</h3>
        <p className="dark:text-darkwhitecolor">{project.para}</p>
      </div>
      <div>
        <ul className="flex flex-wrap gap-[11px] mt-5">
          {
            project.langs.map(wl => {
              return <li key={wl.id} className="font-inconsolata text-xs text-darkneoncolor dark:text-neoncolor border border-darkneoncolor dark:border-neoncolor py-1 px-[7px] rounded-[3px]">
                {wl.lang}
              </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
