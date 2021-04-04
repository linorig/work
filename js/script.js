"use strict";

const option = {
    name:'Alecs',
    with:1200,
    heighr:1200,
    color:{
        border:'bloor',
        bg:'red'
    }
};

console.log(Object.keys(option).length);
//console.log(option["color"]["border"]);

let counter = 0;
for (let key in option){
    if(typeof(option[key]) === 'object'){
        for (let i in option[key]){
            console.log(`Свойство ${key} имеет значение ${option[key][i]}`);
            counter++;
        
        }

    }else{
        console.log(`Свойство ${key} имеет значение ${option[key]}`);
    counter++;
    }
    
}

console.log(counter);