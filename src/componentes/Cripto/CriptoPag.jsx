import {useParams} from "react-router-dom"
import "./CriptoPage.css"
import usePetition from "../../hooks/usePetition"


const CriptoPag = ()=>{ 

    const params= useParams()
    const cripto = usePetition(`${params.id}`)
    const history = usePetition(`${params.id}/history?interval=d1`)

    return (
        <>
        
        <div>
            {
                cripto && (
                    <>
                    <span className="rank">ranking: {cripto.rank}</span>
                    <h1 className="titulo">{params.id}</h1>
                    <span className="symbol">{cripto.symbol}</span>
                    <div className="info ">
                        <span>RANK </span>
                        <br />
                        <span>NOMBRE {cripto.name}</span>
                        <br />
                        <span>PRECIO </span>
                        <br />
                        <span>SIMBOLO </span>
                        <br />
                        <span>VARIACION 24HS </span>
                        <br />
                    </div>
                    
                    </>
                    
                )
            }

            <span className="historial">history</span>
            <br />
            <br />

            <div className="history">
            {
                history && (
                    <table>
                    <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr> 
                    </thead>
                    <tbody>
                        {
                            history.map(({date,priceUsd,time})=>{
                                return(
                                    <tr key={time}>
                                    <td>{date}</td>
                                    <td>{parseFloat(priceUsd).toFixed(2)}</td>
                                </tr>
                                )
                                
                            })
                        }
                        
                    </tbody>
                </table>
                )
            }
            </div>
            
        </div>
    </>
)    
}

export default CriptoPag;