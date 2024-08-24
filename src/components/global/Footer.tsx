import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faKaggle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import H2 from './H2';
import P from './P';

const SOCIAL_LINKS = [
  {
    id: 1,
    link: "https://github.com/TusharSSurve",
    name: "Github",
    icon: faGithub
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/surve-tushar/",
    name: "LinkedIn",
    icon: faLinkedin
  },
  {
    id: 3,
    link: "https://www.kaggle.com/tusharsurve",
    name: "Kaggle",
    icon: faKaggle
  },
  {
    id: 4,
    link: "mailto:ttusharsurve567@gmail.com",
    name: "Mail",
    icon: faPaperPlane
  }
];

export default function Footer() {
  return (
    <footer className="mt-12 px-4 pb-20">
      <H2>Get in touch</H2>
      <P>Feel free to shoot me an email whether you have a question, just want to chat, I'll do my best to get back to you!</P>
      <ul className="flex justify-center gap-4 mt-6">
        {
          SOCIAL_LINKS.map(slink => {
            return <li key={slink.id}>
              <a href={slink.link} aria-label={slink.name} className="w-10 h-10 text-darkgreycolor/75 dark:text-darkwhitecolor flex justify-center items-center rounded-full transition-all hover:text-greycolor hover:bg-greycolor/25 dark:hover:bg-greycolor ">
                <FontAwesomeIcon icon={slink.icon} className='w-6 h-6' />
              </a>
            </li>
          })
        }
      </ul>
    </footer>
  )
}
