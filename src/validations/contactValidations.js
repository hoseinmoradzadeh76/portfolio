import { YouTube } from "@mui/icons-material";
import * as Yup from "yup";

export const contactValidation=Yup.object().shape({
    fullname:Yup.string().required("نام ونام خانوادگی الزامی می باشد"),
    email:Yup.string().email("ادرس ایمیل معتبر نیست").required("ادرس ایمیل الزامی می باشد"),
    subject:Yup.string().required("نوشتن عنوان الزامی می باشد"),
    message:Yup.string().required("نوشتن پیام الزامی می باشد"),

})