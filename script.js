let string = ""; //considering an empty string
let buttons = document.querySelectorAll("button") //creating object of all the buttons
//console.log(typeof(buttons))
//console.log("from",Array.from(buttons)) //creating array of buttons
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
           // console.log(string)
            string = eval(string)
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
        }
        else{
            //console.log("target",e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }     
    })
})