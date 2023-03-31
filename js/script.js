const form = document.getElementById('form');
const username = document.getElementById('name');
const password = document.getElementById('password');
const radio =document.getElementsByName('gender')
const checkbox =document.getElementsByName('lang')
const btn = document.getElementById('btn')

// -------------------------------------Submit-----------------------------------------
form.addEventListener('submit', e => {
    var checkerr = validateInputs();
    if (checkerr == 0) {
        e.preventDefault();
    } 
});
// -------------------------------------Error Massage-----------------------------------------
const errMassage = (elem , massage) =>{
    let valid = document.createElement('h6')
    valid.innerText = massage
    elem.after(valid)
}
// -------------------------------------Valid Massage-----------------------------------------
const validMassage = (elem , massage) => {
    let valid = document.createElement('h6')
    valid.innerText = massage
    valid.style.color = "green"
    elem.after(valid)
}
// -------------------------------------Valdidate Inputs-----------------------------------------
const validateInputs = () => {
    const usernameValue = username.value;
    const passwordValue = password.value;
    var flag = [];
// -------------------------------------clear error every click-----------------------------------------   
    let errmass = document.querySelectorAll('h6')
    for (let i = 0; i < errmass.length; i++) {
        errmass[i].remove()
    }
// -------------------------------------User Name-----------------------------------------
    if(usernameValue === '') {
        errMassage(document.getElementById('name') , "Name can't be blank")
        flag.push(0)
    } else if(isNaN(usernameValue[0]) == false){
        errMassage(document.getElementById('name') , "Name can't start with number")
        flag.push(0)
    }else
    {
        validMassage(document.getElementById('name') , "valid")
    }
// -------------------------------------Password-----------------------------------------
    if(passwordValue.length<8) {
        errMassage(document.getElementById('password') , "Password must be at least 8 characters long.")
        flag.push(0)
    } else {
        validMassage(document.getElementById('password') , "valid")
    }
// -------------------------------------Gender-----------------------------------------
    if(radio[0].checked == false && radio[1].checked == false ) {  
        errMassage(document.getElementById('gender') , "Gender is require.")
        flag.push(0) 
    } else {
        validMassage(document.getElementById('gender') , "valid")
    }
// -------------------------------------Language-----------------------------------------
    let selectedItems = [];
    checkbox.forEach(item => { 
    if (item.checked) {  
        selectedItems.push(item);
    }
    });
    if (selectedItems.length < 2) {
        errMassage(document.getElementById('language') , "please select min 2 language")
        flag.push(0)
    } else {
        validMassage(document.getElementById('language') , "valid")
    }
// -------------------------------------Store error-----------------------------------------
    for (let i = 0; i < flag.length; i++) {
        if (flag[i] == 0) {
            return 0;
        }else  {
            return 1;
        }       
    }
};