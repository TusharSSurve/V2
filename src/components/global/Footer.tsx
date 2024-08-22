import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faKaggle, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SOCIAL_LINKS = [
  {
    id: 1,
    link: "https://github.com/TusharSSurve",
    icon: faGithub
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/surve-tushar/",
    icon: faLinkedin
  },
  {
    id: 3,
    link: "https://www.kaggle.com/tusharsurve",
    icon: faKaggle
  },
  {
    id: 4,
    link: "mailto:ttusharsurve567@gmail.com",
    icon: faPaperPlane
  }
];

export default function Footer() {
  return (
    <footer className="mt-12 px-4 pb-20">
      <h2 className="font-semibold text-warmblack dark:text-whitecolor">Get in touch</h2>
      <p className="leading-6 text-greycolor dark:text-darkwhitecolor">Feel free to shoot me an email whether you have a question, just want to chat, I'll do my best to get back to you!</p>
      <ul className="flex justify-center gap-4 mt-6">
        {
          SOCIAL_LINKS.map(slink => {
            return <li key={slink.id}>
              <a href={slink.link} className="w-12 h-12 text-darkgreycolor/75 dark:text-darkwhitecolor flex justify-center items-center rounded-full transition-all hover:text-greycolor hover:bg-greycolor/25 dark:hover:bg-greycolor ">
                <FontAwesomeIcon icon={slink.icon} className='w-6 h-6' />
              </a>
            </li>
          })
        }
      </ul>
    </footer>
  )
}
