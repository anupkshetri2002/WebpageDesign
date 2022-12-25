function submit_check(){

    fullname = document.getElementById("Fullname").value;
    email = document.getElementById("emailaddress").value;
    phone = document.getElementById("mobileno").value;

    
    if (fullname == "" || email == "" || phone == ""){
        alert("You didnt fill all of them");
    }
    else{
        alert("Thank You for your submission");
    }

}

    