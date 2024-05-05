import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async";
import {Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {CustomeDivider} from "../components/common"

import { SettingsEthernetRounded } from "@mui/icons-material";
import {ShowProject} from "../components/pages";

const Projehme = ({ title }) => {

    const [loading,setLoading]=useState(false);

    useEffect(()=>{ 
        setLoading(true);
        return()=>{
            setLoading(false);
        }
    },[])

    return (
        <Card sx={{ height: "100vh", backgroundColor: "theme.main", overflowY: "scroll" }}>
            <Helmet>
                <title>سایت حسین مرادزاده-{title}</title>
            </Helmet>
            <CardContent>
                <CustomeDivider bColor="primary.main" cColor="primary" icon={<SettingsEthernetRounded/>} 
                align="center"
                text="نمونه پروژه های من"
                />
             
               <Grid container xs={{mx:3}}>
          
               <ShowProject loading={loading}/>

               </Grid>

            </CardContent>
        </Card>
    )

}
export default Projehme;