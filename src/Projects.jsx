import styles from './Projects.module.css'
import Card from './Elements/Card'
import APIdnc from './Images/Projects/APIdnc.jpg'
import basednc from './Images/Projects/basednc.jpg'
import Portfolio from './Images/Projects/Portfolio.jpg'


function Projects(){
    return(
        <div className={styles.projects} id='Projects' >
            <h1>Projetos</h1>

            <section >
                
                <Card
                img={APIdnc}
                title= 'Landing Page para consulta de CEP e Temperatura da região' 
                description='API criada para consultar Rua, Bairro, Cidade de acordo com o CEP informado e também a temperatura do momento de acordo com a Latitude e Longitude informada' 
                repo='https://github.com/eduardokalyel/DesafioAPI_DNC'
                site='https://desafioapidnc.netlify.app/'
                />

                <Card
                img={basednc}
                title= 'Landing Page - Empresa Arquitetura' 
                description='Desenvolvimento de uma Landig Page para uma empresa de arquitetura para captura de Leads utilizando HTML e CSS.' 
                repo='https://github.com/eduardokalyel/DesafioBaseDNC'
                site='https://projetobasekalyel.netlify.app/'/>

                <Card
                img={Portfolio}
                title= 'Portfolio feito em React' 
                description='Portfolio pessoal criado para teste em React e JS.' 
                repo='https://github.com/eduardokalyel/Portfolio_Pessoal_React'
                site='https://eduardosilveiraportfolio.vercel.app/'/>
                
            </section>

        </div>

    )
}

export default Projects