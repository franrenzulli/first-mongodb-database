const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btn = document.getElementById("btn");

btn.addEventListener("click", async() => {
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log(email, password);

    // We send the post request to the endpoint with all the data in the body. 

    try{

        const response = await fetch("http://localhost:3000/addData", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    email, password
                }
            )
        })

    }catch(err){
        console.error(err)
    }

});