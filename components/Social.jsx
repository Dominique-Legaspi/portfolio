import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socials = [
    {
        name: "Github",
        icon: <FaGithub size={40}/>,
        path: 'https://github.com/Dominique-Legaspi'
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin size={40}/>,
        path: 'https://www.linkedin.com/in/john-dominique-legaspi-dilag/'
    },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>
  )
}

export default Social