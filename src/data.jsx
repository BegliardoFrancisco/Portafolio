import TarjetaDatos from "./TarjetaDatos"
import './styles/aside.css'

export default function DataAside () {

    return (
       <aside className="data">
            <TarjetaDatos dato="04/03/2001" item="Fecha de Nacimiento"></TarjetaDatos>
            <TarjetaDatos dato="Cordoba, Argentina" item="Domicilio"></TarjetaDatos>
            <TarjetaDatos dato="Ing. en sistemas (en curso)" item="Estudios"></TarjetaDatos>
       </aside>
    )
}