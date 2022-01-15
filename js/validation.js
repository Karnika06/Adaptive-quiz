
function validate(event){
    event.preventDefault();
    var email=document.getElementById("email").value;
    var password=document.getElementById("phno").value;
    if(email=="admin" && password=="user")
    {
        
        window.location.href="./start.html";   
    }
    else
    {
        alert("Login failed");
    }
}