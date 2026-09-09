
function getfulldata() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let address = document.getElementById('address').value;
    let cnic = document.getElementById('cnic').value;
    let phoneno = document.getElementById('phoneno').value;

    if (name == "" || email == "") {
        alert("Fill all required fields!");
        return;
    }

    let getfulldata = db.collection("get full data").doc();

    let userdata = {

        Yourname: name,
        YourEmail: email,
        YourAge: age,
        YourAddress: address,
        YourCnic: cnic,
        YourPhoneno: phoneno

    };


    

    getfulldata.set(userdata)

        .then(function () {
            alert("Data successfully added!");

            document.getElementById('name').value = ""; 
            document.getElementById('email').value = "";
             document.getElementById('age').value = ""; 
             document.getElementById('address').value = ""; 
             document.getElementById('cnic').value = ""; 
             document.getElementById('phoneno').value = "";
        })

        .catch(function (error) {
            console.log(error);
            alert("Something went wrong!");
        });
}
