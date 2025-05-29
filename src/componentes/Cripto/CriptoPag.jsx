import {useParams} from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistory from "./historial/CriptotHistorial"

const CriptoPag = ()=>{ 
    const params= useParams()
    const [cripto,cargandoCripto] = usePetition(`/${params.id}`)
    const [history,cargandoHistory] = usePetition(`/${params.id}/history?interval=d1`)
    
    while(cargandoCripto || cargandoHistory) return <span className="cargando"> Cargando... </span>
    
    return (
    <div className="Cripto-page-container"> 
        {cripto && <CriptoInfo cripto={cripto}/>}
        { history && <CriptoHistory history={history}/>}
    </div>
)    
}

export default CriptoPag;