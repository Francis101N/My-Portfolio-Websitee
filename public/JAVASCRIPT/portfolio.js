const Submit = document.querySelector('.sub');
const Output = document.querySelector('.output');

const Informations =[];

console.log(Informations)
Submit.addEventListener("click", function(e){
     e.preventDefault();

     const fullname = document.querySelector('.fullname');
     const email = document.querySelector('.email');
     const number = document.querySelector('.number');
     const subject = document.querySelector('.subject');
     const textarea = document.querySelector('.textarea');

     display(fullname,email,number,subject,textarea);

     fullname.value ="";
     email.value ="";
     number.value ="";
     subject.value ="";
     textarea.value ="";

     setTimeout(function(){
        Output.innerHTML=""
      },4000);

})

function display(fullname, email, number, subject, textarea){
   if(fullname === "" || email === "" || number.value ==="" || subject.value === "" || textarea.value ===""){
    Output.innerHTML = "No Text Box Should Be Empty."
   }else{
    const info = {
        Names:fullname.value,
        Email:email.value,
        Number:number.value,
        Subject:subject.value,
        Textarea:textarea.value
    }
    Informations.push(info)
    Output.innerHTML = "Successfully Sent Message To Francis."
   }
}

