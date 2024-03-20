import styles from './Card.module.css'
import ButtonA from './ButtonA'



function Card({img, title, description, repo, site}){


    return(
        <div className={styles.card} id='Card' >

            
                <section>
                    <a href={site}>
                        <img src={img} alt = "erro"/>
                    </a>

                    <h3>{title}</h3>

                    <p>{description}</p>

                    <ButtonA text='Acesse o repositório' link={repo}/>
                </section>
            
        </div>

    )
}

export default Card