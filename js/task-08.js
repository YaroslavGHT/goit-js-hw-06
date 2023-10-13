const registForm = document.querySelector(".login-form");
const newUser = {};

registForm.addEventListener("submit", handelRegist)
function handelRegist(event){
    event.preventDefault();
    const form = event.target;
    const userEmail = form.elements.email.value;
    const userPass = form.elements.password.value;
    if (userEmail === "" || userPass === ""){
        return alert("Please fill in all the fields!");
    } else{
        newUser.email = userEmail;
        newUser.password = userPass;
        console.log(newUser);
        form.reset();
    }
} 