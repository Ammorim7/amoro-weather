import styles from './Header.module.css'
import logo from './img/Logo.png'
import {SlMagnifier} from 'react-icons/sl' 

function Header(){
    return <header>
        <img src={logo} height='45px' alt="Amoro Weather"/>
        <form>
            <input type="text" placeholder='Buscar cidade'/>
            <button type="submit"><SlMagnifier /></button>
        </form>
    </header>
}

export default Header;