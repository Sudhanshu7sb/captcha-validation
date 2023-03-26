export const  getCode =() => {
    let code= [];
    let str="AaBbcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890"

    for(let i=0;i<6;i++){
        code.push(str[Math.floor(Math.random() * str.length)])
    }
    return code.join("");
 }