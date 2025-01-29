function recursiva(n){
    if(n ===5){
        return console.log("listo")
    }

    return  console.log(recursiva(n+1))
}
recursiva(1)