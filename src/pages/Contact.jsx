import { useState, useEffect } from "react";


import {CustomeDivider} from "../components/common"
import { Typography, Card, CardContent,Slide } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { AccountCircle } from "@mui/icons-material";
import { Helmet } from "react-helmet-async";
import {ContactForm} from "../components/pages";


const Contact = ({ title }) => {
    const [loading, setLoading] = useState(false);

    

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false)
        }
    }, []);


   

    return (
        <Card sx={{
            height: "100vh",
            backgroundColor: "theme.main",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column"

        }}>
            <Helmet>
                <title>سایت حسین مرادزاده-{title}</title>
            </Helmet>
            <CardContent>
                <CustomeDivider bColor="warning.main" cColor="warning" icon={<AccountCircle />} align="center" text="ارتباط با من" />
               
                <Grid container sx={{ mt: 5 }}>
                    <Slide in={loading} direction="up" style={{ transitionDelay: loading ? "200ms" : "0ms" }}>
                        <Grid xs={12} sm={12} md={8}>
                            <Card sx={{ justifyContent: "center", alignItems: "center" }}>
                               {/*contact form */}
                               <ContactForm/>
                            </Card>
                        </Grid>
                    </Slide>
                    <Slide in={loading} direction="up" style={{ transitionDelay: loading ? "200ms" : "0ms" }}>
                        <Grid xs={0} sm={0} md={4} sx={{ textAlign: "center" }}>
                            <Typography variant="h6" color="theme.main" sx={{
                                mt: 4, fontFamily: "vazir", display: {
                                    xs: "none",
                                    md: "block"
                                }
                            }}>
                                بیا در مورد همه چیز با هم صحبت کنیم
                            </Typography>
                            <Typography variant="body1" color="theme.main" sx={{
                                mt: 2, display: {
                                    xs: "none",
                                    md: "block"
                                }
                            }}>
                                <a href="mailto:hosein.moradzadeh76@gmail.com" alt="email" style={{ color: "tomato" }}>ایمیل{" "}</a>بزن به من
                            </Typography>
                        </Grid>

                    </Slide>
                </Grid>
            </CardContent>
        </Card>
    )


}
export default Contact;