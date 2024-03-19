import styles from './Footer.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <a href='https://wa.me/+5551981509152/?text=textourl'>
                <li>Meu contato:<br></br>
                 +55 51 98150-9152</li>
                 </a>
                <li>Meu Email:<br></br> eduardokalyel@gmail.com</li>
            </ul>
            <ul>
                <li><a href='https://github.com/eduardokalyel'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/eduardo-kalyel-freitas-silveira-4703bb196/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div>

    )
}

export default Footer