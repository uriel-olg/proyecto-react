import {useParams} from "react-router-dom"

const CriptoPag = ()=>{

    const params = useParams();

    return (
        <>
        <h1>Soy la CriptoMoneda {params.id}</h1>
    
        </>
    )
}

export default CriptoPag;