import Photoprofile from '../../assets/PhotoPerso.jpg'

function Header(){
    return(
        <div className="containerHeader">
            <div className="containerHeader-Content">
            <p className='mtt'>Bonjour, je m'appelle Julie Cohen et je suis</p>
            <h1 className="containerHeader-Title df">Développeur WEB</h1>
            </div>
            <img className="containerHeader-Image" src={Photoprofile} alt='Ma photo'/>
        </div>
    )
}
export default Header