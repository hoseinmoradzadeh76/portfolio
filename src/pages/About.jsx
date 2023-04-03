
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import me from "../assets/me.jpg";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import {DevInfo, DevWorkCount, Skills} from "../components/pages";

import { Helmet } from "react-helmet-async";

import { CustomeAvatar, CustomeDivider } from "../components/common";
const About = ({ title }) => {

   
   


    return (
        <Card sx={{ height: "100vh", backgroundColor:"whitesmoke", overflowY: "scroll" }}>
            <Helmet>
                <title>سایت حسین مرادزاده-{title}</title>
            </Helmet>
            <CardContent>
                <Grid container sx={{ mx: 3 }}>
                    <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                       <CustomeDivider bColor="primary.main" cColor="primary"
                        icon={<CodeRounded/>} align="right" text="برنامه نویس وتوسعه دهنده سایت"/>
                       
                        <Grid container>
                            <Grid xs={0} sm={4} md={3} lg={3} sx={{
                                display: {
                                    xs: "none",
                                    sm: "block",
                                    md: "block"
                                },
                                mt: 2
                            }}>
                            
                               <DevWorkCount/>
                            </Grid>
                            <Grid xs={12} sm={8} md={9} lg={9}
                            >
                           
                               <DevInfo/>
                            </Grid>
                        </Grid>


                    </Grid>
                    <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                        <CustomeAvatar avatar={me} size={200} fallback="hm"/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid sx={{ width: 1, mt: 1 }}>
                        <CustomeDivider align="center" bColor="secondary.main" cColor="secondary" icon={<SelfImprovementRounded />}
                         text=" مهارت های من"/>
                       
                       <Skills/>
                       
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    )
}
export default About;