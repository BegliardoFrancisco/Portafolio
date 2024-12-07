import './styles/Nav.css'
import HomeIcon  from './icons/HomeIcon'
import ProyectIcon from './icons/ProyectIcon'

function Nav() {

  return (
    <nav>
      <ul>
        <li><a href=""><ProyectIcon></ProyectIcon></a></li>
        <li><a href=""><HomeIcon ></HomeIcon></a></li>
      </ul>
    </nav>
  )
}

export default Nav
