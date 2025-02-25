import {useParams} from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./info/CriptoInfo"
import CriptoHistory from "./info/CriptotHistorial"

const CriptoPag = ()=>{ 
    const params= useParams()
    const cripto = usePetition(`${params.id}`)
    const history = usePetition(`${params.id}/history?interval=d1`)
    return (
        <>
            <div className="Cripto-page-container">
                {
                    cripto && <CriptoInfo cripto={cripto}/>
                }
                {
                    history && <CriptoHistory history={history}/>
                }
            </div>
        </>
)    
}

export default CriptoPag;