import Photoprofile from '../../assets/PhotoPerso.jpg'

function Header(){
    return(
        <div className="containerHeader">
            <div className="containerHeadercontent">
            <p>Je m'appelle Julie Cohen et je suis</p>
            <h1 className="containerHeader-title">Développeur WEB</h1>
            </div>
            <img className="containerHeaderImage" src={Photoprofile} alt='Ma photo'/>
        </div>
    )
}
export default Header