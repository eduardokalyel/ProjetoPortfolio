import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#Presentation'>Tecnologias</Nav.Link></li>
                <li><Nav.Link href='#AboutMe'>Sobre Mim</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://github.com/eduardokalyel'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/eduardo-kalyel-freitas-silveira-4703bb196/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>

    )
}

export default Navbar