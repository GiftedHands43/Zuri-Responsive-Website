function check() {
  var valid = true, error = "", field = "";
  
  field = document.getElementById("fname");
  error = document.getElementById("cname")
  if(!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "First Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  field = document.getElementById("flname");
  error = document.getElementById("clname")
  if(!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Last Name cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  field = document.getElementById("femail");
  error = document.getElementById("cemail")
  if(!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = " Looks like this is not an email\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  field = document.getElementById("fpassword");
  error = document.getElementById("cpassword")
  if(!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    error.innerHTML = "Password cannot be empty\r\n";
  } else {
    field.classList.remove("err");
    error.innerHTML = "";
  }

  return valid;
}
