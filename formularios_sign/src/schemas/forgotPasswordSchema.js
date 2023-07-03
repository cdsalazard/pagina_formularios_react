import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Enter a valir email").required("Email is required"),
});