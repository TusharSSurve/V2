import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H2 from './global/H2';
import ProjectCard from './global/ProjectCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const projects = [
  {
    "id": 9,
    "year": "2020",
    "wlinks": [
      {
        "id": 1,
        "link": "https://github.com/TusharSSurve/OpenCV",
        "icon": "github"
      }
    ],
    "title": "OpenCV",
    "para": "Exploring creative computer vision project ideas.",
    "langs": [
      {
        "id": 1,
        "lang": "Python"
      },
      {
        "id": 2,
        "lang": "OpenCV"
      },
      {
        "id": 3,
        "lang": "ML/DL"
      }
    ]
  },
  {
    "id": 4,
    "year": "2021",
    "wlinks": [
      {
        "id": 1,
        "link": "https://github.com/TusharSSurve/Gender-Classification-With-Flutter",
        "icon": "github"
      }
    ],
    "title": "Gender Classification",
    "para": "A Flutter based mobile app for gender classification.",
    "langs": [
      {
        "id": 1,
        "lang": "Python"
      },
      {
        "id": 2,
        "lang": "Flutter"
      },
      {
        "id": 3,
        "lang": "Dart"
      },
      {
        "id": 4,
        "lang": "ML/DL"
      }
    ]
  },
  {
    "id": 7,
    "year": "2023",
    "wlinks": [
      {
        "id": 1,
        "link": "https://github.com/TusharSSurve/GPT-Detector",
        "icon": "github"
      }
    ],
    "title": "GPT Detector",
    "para": "Detect AI-Generated Plagiarism",
    "langs": [
      {
        "id": 1,
        "lang": "React.JS"
      },
      {
        "id": 2,
        "lang": "OpenAI"
      }
    ]
  },
  {
    "id": 5,
    "year": "2021",
    "wlinks": [
      {
        "id": 1,
        "link": "https://github.com/TusharSSurve/Media-Player-Controller-With-Hand-Gesture",
        "icon": "github"
      }
    ],
    "title": "Media Player Controller",
    "para": "Hand gesture-based media player navigation system.",
    "langs": [
      {
        "id": 1,
        "lang": "Python"
      },
      {
        "id": 2,
        "lang": "OpenCV"
      },
      {
        "id": 3,
        "lang": "MediaPipe"
      }
    ]
  }
]
export default function Project() {
  return (
    <section className='animate-slide-from-down-and-fade-4 space-y-2 px-4'>
      <H2>Featured Projects</H2>
      <div className='flex flex-wrap gap-[14px] justify-center pt-2'>
        {projects.map(project => {
          return <ProjectCard project={project} key={project.id} />
        })}
      </div>
      <div className='py-3'>
        <Link to="/projects" className='flex justify-start items-center gap-[2px] whitespace-nowrap text-sm transition-colors text-black/70 dark:text-darkwhitecolor underline-offset-4 underline hover:text-darkgreycolor dark:hover:text-whitecolor w-fit'>
          All projects
          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 -rotate-45" />
        </Link>
      </div>
    </section>
  )
}
