import Logo from "../assets/logo-react.png"
import './Header.css'

function Header() {
    return (
        <div className="container-header">
            <img className= "logo-header" src={Logo} alt="Logo React" />
            <ul className="menu-header">
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#sevico">Serviços</a></li>
                <li><a href="#contatos">Contato</a></li>
            </ul>
        </div>
    )
}

export default Header