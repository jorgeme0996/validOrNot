function validOrNot (strings, replacements){
    let newArray = [];
    let result = [];

    for(let [index, string] of strings.entries()) {
        while(string.includes('<>')){
            let sinRombos = string.replace('<>', ''); 
            string = sinRombos;
        }
        newArray.push(string);
        if(string.includes('<')){
            result.push(0);
        } else if(string.includes('>') && string.length <= replacements[index] || string === ''){
            result.push(1)
        } else if(string.length >= replacements[index]){
            result.push(0);
        }
    }
    return result;
}


console.log(validOrNot(["<<>", "><>>>>>", "<>>>>>",">>>>>"], [1, 5, 3, 5]));