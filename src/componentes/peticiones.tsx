const url = "https://rest.coincap.io/v3/assets";
const key = "ce6fb0bc1b8981c011a1ec036dddc1907ae5474c6c6d44850f87dd46b1e170dd"

export const getData = async ()=> {

    try{
        const res = await fetch(url,{
            headers: {
                Authorization: key
            }
        });
        const data = await res.json()
        console.log(data.data)
        return data
    }
    catch(e:any){
        console.log(e.message())
    }
}
