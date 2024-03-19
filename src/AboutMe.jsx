import styles from './AboutMe.module.css'


function AboutMe() {
    return (
        <div className={styles.aboutme} id='AboutMe'>
            <h1>Sobre mim</h1>
            
            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.cell}>
                        
                        <div className={styles.year}>2021</div>
                        <div>Ano que iniciei minha carreira no mundo das vendas, como consultor de vendas de veículos 0km
                            aprendendo todas as táticas de negociações, comunicação e utilização de CRM para organização de leads.</div>
                        <div className={styles.line}>
                            <div className={styles.ellipse}></div>
                        </div>
                        
                    </div>
                    <div className={styles.cell}>
                        <div className={styles.year}>2022</div>
                        <div>Ano dividido em duas profissões que me trouxeram muitas realizações.
                            Iniciando o ano ainda no segmente automotivo como consultor de vendas de veículos 0km
                            onde auxiliei muitas pessoas para a conquista do veículo 0km.
                            Também o ano que iniciei minha carreira no mundo da corretagem, colocando em prática 
                            minhas habilidades de conversação e negociação com cliente.</div>
                        <div className={styles.line}>
                            <div className={styles.ellipse}></div>
                        </div>
                    </div>
                    <div className={styles.cell}>
                        <div className={styles.year}>2023</div>
                        <div>Ano repleto de realizações no ramo da corretagem, ajudando diversas famílias a realizarem 
                            o sonho do imóvel próprio, auxiliando qual o melhor caminho e o mais rápido para esta realização.</div>
                        <div className={styles.line}>
                            <div className={styles.ellipse}></div>
                        </div>
                    </div>
                    <div className={styles.cell}>
                        <div className={styles.year}>2024</div>
                        <div>Sempre tive vontade de seguir o caminho da programação, então esse foi o ano em que 
                            resolvi de fato realizar a mudança de carreira e começar a estudar
                            programação e desenvolvimento, começando por um curso Fullstack da escola DNC,
                            e também iniciando o curso superior Sistemas da Informação na universidade Unisinos.</div>
                        <div className={styles.line}>
                            <div className={styles.ellipse}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;