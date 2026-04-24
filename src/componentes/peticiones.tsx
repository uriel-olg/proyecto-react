
const url = `https://rest.coincap.io/v3/assets?apiKey=${import.meta.env.VITE_COINCAP_KEY}`

export const getData = async ()=> {

    try{
        const res = await fetch(url);
        const data = await res.json()
        console.log(data.data)
        return data.data
    }
    catch(e:any){
        console.log(e.message())
    }
}
