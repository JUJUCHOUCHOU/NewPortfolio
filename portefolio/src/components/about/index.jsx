import Photodeco from '../../assets/pexels-josh-sorenson-1714205.jpg'

function About(){
    return(
        <div className="containerAbout">
            <div className="containerAboutcontent">
            <h1 className="containerAbout-title">à propos de Moi</h1>
            <p className='containerAbout-text'>Après avoir occupé des postes d'hôtesse de caisse dans la grande distribution, puis d'assistante de vie auprès des particuliers, j'ai pris la décision de réorienter ma carrière vers le métier de développeur intégrateur web. J'ai suivi avec succès une formation via OpenClassrooms et obtenu le diplôme associé. Actuellement, je suis à la recherche d'une opportunité professionnelle pour enrichir mes compétences et renforcer mes connaissances. Mon objectif est de rejoindre une entreprise dynamique où je pourrais mettre en pratique mes compétences fraîchement acquises et explorer toutes les possibilités offertes par le monde passionnant du web.</p>
            </div>
            <img className="containerAboutImage" src={Photodeco} alt='Ma photo'/>
        </div>
    )
}
export default About