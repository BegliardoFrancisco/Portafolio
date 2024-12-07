import './styles/presentation.css'
import './styles/linker.css'
import Contact from './Contacts'
import Perfil from './Perfil'
import DataAside from './data.jsx'

function Presentation() {


    return (
        <>
        <section className='presentation'>
            <article className="container-presentacion">
                <h1 className="name">Francisco <br/>Begliardo</h1>
                <h2>Full Stack Development</h2>
                <p>Construyo soluciones que satisfacen  los requerimientos  <br />
                de los clientes.</p>
                <Contact></Contact>
            </article>
            <Perfil></Perfil>
            <DataAside></DataAside>

           
        </section>
        </>
    )
}

export default Presentation