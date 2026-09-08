




let userregister = () => {
    // alert('as')

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    

    if(email == "" || password == ""){
        // alert('fill the inputs')
        Swal.fire({
  icon: "error",
  title: "Oops...",


});
    } else{
        // alert(email + password)

        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // alert('user register')

    Swal.fire({
  position: "top-end",
  icon: "success",
  title: "user register",
  showConfirmButton: false,
  timer: 1500
});
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorCode + errorMessage)
    // ..
  });


    }
}