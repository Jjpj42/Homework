const capToFront=(str)=>{
    let lowstr='';
    let upstr='';
    
    for(let i=0;i<str.length;i++){
        let temp=str.charAt(i);
        
        if(temp == temp.toUpperCase()){
            upstr+=temp;
        }
        else {
            lowstr+=temp;
        }

    }
    return upstr+lowstr;





}






console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));