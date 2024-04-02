import * as Yup from "yup";

export const registerSchema = Yup.object({
  name: Yup.string().min(5).max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  confirm_password: Yup.string()
    .required("Please Enter Your Password Again")
    .oneOf([Yup.ref("password"), null], "Password Must Match"),
});
