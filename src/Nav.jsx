import './styles/App.css'
import home from './assets/house-solid.svg'
import proyects from './assets/code-solid.svg'
function Nav() {

  return (
    <nav>
      <ul>
        <li><a href=""><img className='icon' src={proyects}/></a></li>
        <li><a href=""><img className='icon' src={home}/></a></li>
      </ul>
      <div className='container_foto'>
        <img className='perfil' src='' alt="" />
      </div>
      
    </nav>
  )
}

export default Nav
