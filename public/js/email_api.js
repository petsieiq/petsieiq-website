const email_input = document.getElementById("email_input");
const save_email = document.getElementById("save-email");

save_email.addEventListener("click",function(){
    //when the user clicks the save button
    let email_text = email_input.value;
    console.log(email_text);
});