import { useFormik } from "formik";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { CardContent, TextField, InputAdornment, Button, CardActions } from "@mui/material";
import { contactValidation } from "../../validations/contactValidations";
import { Face6Rounded, SubjectRounded, EmailRounded } from "@mui/icons-material";
const ContactForm = () => {
    const contactInputName = {
        fullname: "",
        email: "",
        subject: "",
        message: ""
    }
    const formik = useFormik({
        initialValues: contactInputName,
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: contactValidation
    });
   
    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <CardContent>
                <Grid container>
                    <Grid xs={12} sx={{ direction: "ltr" }}>
                        <Grid container spacing={2}>
                            <Grid xs={12} md={6}>
                                <TextField fullWidth
                                    size="small"
                                    color="warning"
                                    label="نام ونام خانوادگی"
                                    name="fullname"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.fullname ? formik.errors.fullname : null
                                    }
                                    error={Boolean(formik.touched.fullname && formik.errors.fullname)}
                                    value={formik.values?.fullname}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Face6Rounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="ادرس ایمیل"
                                    name="email"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.email ? formik.errors.email : null
                                    }
                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                    value={formik.values?.email}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailRounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </Grid>
                            <Grid xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    color="warning"
                                    label="عنوان"
                                    name="subject"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.subject ? formik.errors.subject : null
                                    }
                                    error={Boolean(formik.touched.subject && formik.errors.subject)}
                                    value={formik.values?.subject}
                                    onChange={formik.handleChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SubjectRounded />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid xs={12} md={12}>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={6}
                                    size="small"
                                    color="warning"
                                    label="پیام"
                                    name="message"
                                    variant="outlined"
                                    helperText={
                                        formik.touched.message ? formik.errors.message : null
                                    }
                                    error={Boolean(formik.touched.message && formik.errors.message)}
                                    value={formik.values?.message}
                                    onChange={formik.handleChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions sx={{ textAlign: "end", flexDirection: "column" }}>
                <Button type="submit" color="success" variant="contained" sx={{ mt: 2 }} fullWidth>ارسال</Button>

            </CardActions>
        </form>
    )
}
export default ContactForm;