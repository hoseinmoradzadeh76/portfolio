import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import {CustomeDivider} from "../components/common";
import { HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded } from "@mui/icons-material";

import {DevExpTimeLine,DevEduTimeLine} from "../components/pages";
const Resume = ({ title }) => {
    const [loading, setLoading] = useState(false);

    useEffect(
        () => {
            setLoading(true);
            return () => {
                setLoading(false);
            }
        }
        , []);
    return (


        <Card sx={{ height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll" }}>
            <Helmet>
                <title>سایت حسین مرادزاده-{title}</title>
            </Helmet>
            <CardContent>
               
                    <CustomeDivider  bColor="primary.main" cColor="primary" 
                    icon={<SettingsEthernetRounded />} align="center" text="رزومه من"/>
                   
                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6} >
                       
                           <CustomeDivider bColor="warning.main" cColor="warning" icon={<HomeRepairServiceRounded />} 
                           align="center" text="تجربیات"/>
                           
                       
                       
                        <DevExpTimeLine loading={loading}/>
                    </Grid>
                    <Grid xs={6} >
                        <CustomeDivider bColor="secondary.main" cColor="secondary" icon={<SchoolRounded />} text="تحصیلات"/>
                      
                        <DevEduTimeLine loading={loading}/>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>

    )
};
export default Resume;