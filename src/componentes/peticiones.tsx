const url = "https://api.coincap.io/v2/assets";

export const getData = async ()=> {

    try{
        const res = await fetch(url);
        const data = await res.json()
        console.log(data.data)
        return data
    }
    catch(e:any){
        console.log("error al buscar las monedas",e.message())
    }
}
