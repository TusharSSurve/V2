import H2 from "./global/H2";
import exp from '../data/exp.json';
import ExperienceCard from "./global/ExperienceCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import resume from '../assets/resume.pdf'

export default function Experience() {
  const experience = exp;
  return (
    <section className="animate-slide-from-down-and-fade-3 space-y-2 px-4">
      <H2>Where I've worked</H2>
      <div className='flex gap-7 flex-col justify-center pt-2'>
        {experience.map(ex => {
          return <ExperienceCard experience={ex} key={ex.id} />
        })}
      </div>
      <div className='py-3'>
        <a href={resume} className='flex justify-start items-center gap-[2px] whitespace-nowrap text-sm transition-colors text-black/70 dark:text-darkwhitecolor underline-offset-4 underline hover:text-darkgreycolor dark:hover:text-whitecolor w-fit'>
          View Full Resume
          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 -rotate-45" />
        </a>
      </div>
    </section>
  )
}
