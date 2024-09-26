import Link from "next/link"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socials = [
    {
        name: "Github",
        icon: <FaGithub />,
        path: 'https://github.com/Dominique-Legaspi'
    },
    {
        name: "LinkedIn",
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/john-dominique-legaspi-dilag/'
    },
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=> {
            return <Link key={index} href={item.path} className={iconStyles}>
                {item.icon} {item.name}
            </Link>
        })}
    </div>
  )
}

export default Social