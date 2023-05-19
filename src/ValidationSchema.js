import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Enter a valid name")
      .max(30, "Too long name")
      .required("Required field"),
    email: Yup.string()
      .email("Enter a valid mail id")
      .required("Required field"),
    mobile: Yup.string()
      .min(10, "Enter a valid number")
      .required("Required field"),
    username: Yup.string()
      .min(8, "Username is not valid")
      .required("Required field"),
    roleKey: Yup.string().required("Required field"),
    password: Yup.string()
      .required("Required field")
      .min(8, "Password should be 8 characters long"),
  });