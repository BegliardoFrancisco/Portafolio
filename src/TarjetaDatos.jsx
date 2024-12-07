
import './styles/tarjeta.css'


export default function TarjetaDatos ({dato, item}) {


    return (
        <div className="tarjeta-datos">
            <h2>{dato}</h2>
            <h3>{item}</h3>
        </div>
    )
}