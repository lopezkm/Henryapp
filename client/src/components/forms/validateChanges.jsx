export default function validate(values) {
  let errors = {};
  if (!values.pass) {
    errors.password = "Password is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be more than 8 characters";
  }
  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password != values.password2) {
    errors.password = "Passwords don't match";
    errors.password2 = "Passwords don't match";
  }
  return errors;
}
