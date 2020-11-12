
export default function validate(values) {
    let errors = {};
    if (!values.name) { errors.name = "Firstname is required";
}
if (!values.lastname) { errors.lastname = "Lastname is required";
}
    if (!values.email) { errors.email = "Email address is required";

    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password needs to be more than 8 characters";
    }
    if (!values.password2) {
      errors.password2 = "Password is required";}
    else if(values.password!=values.password2){
      errors.password = "Passwords don't match"
      errors.password2 = "Passwords don't match"
    }
    return errors
  }