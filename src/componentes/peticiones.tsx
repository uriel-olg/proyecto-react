const url = "https://rest.coincap.io/v3/assets";


export const getData = async ()=>{

    try{
        const res = await fetch(url);
        const data = await res.json()
        console.log(data.data)
        return data
    }
    catch(e:any){
        console.log(e.message())
    }
}
