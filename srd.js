let input=document.getElementById('box');
let button=document.querySelectorAll('button')
let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
        button.addEventListner('click',(e) =>{
            if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            }
            else if(e.target.inerHTML == 'AC'){
            string="";
            input.value = string;
            }
            else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            }
            else{
            string += e.target.innerHTML;
            input.value=string;
            }

    })
})