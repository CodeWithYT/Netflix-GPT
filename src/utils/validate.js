export const checkValidSignIn = ({
  email,
  password,
  name,
  isSignUp,
  setLoading,
}) => {
  if (!email || !password) {
    return isSignUp
      ? "Name, Email and Password are required"
      : "Email and Password are required";
  }
  const isName = /^[a-zA-Z][a-zA-Z]{2,29}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/.test(
      password
    );
  if (isSignUp && !isName) return "Invalid Name";
  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid)
    return "Password must be 8–15 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character. Spaces are not allowed.";
  return null;
};
