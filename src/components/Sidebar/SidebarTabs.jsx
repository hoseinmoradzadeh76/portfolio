import { useContext } from "react";
import MainContext from "../../context";
import {useTheme} from '@mui/material/styles';
import {Tabs,Tab} from "@mui/material";
import { grey } from "@mui/material/colors";
import {tabsData} from "../../constants/tabsData";//چون یه قسمت از کامپوننت هست داخل پرانتز می کذاریم


const SidebarTabs=()=>{
    const {pageNumber,handlePageNumber,setDrawerOpen}=useContext(MainContext);

    const data=tabsData();
    const theme =useTheme()

   
    return(
        <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile 
            indicatorColor={theme.palette.mode==="dark"?"primary":"secondary"} textColor={theme.palette.mode==="dark"?"primary":"secondary"} 
            value={pageNumber} onChange={handlePageNumber}
            >
                {
                    data.map((tab,index)=>(
                        <Tab
                        key={index} 
                        label={tab.label}
                        icon={tab.icon}
                        iconPosition="start"
                        {...tab}
                        
                        sx={{
                            backgroundColor:theme.palette.mode==="dark"?grey[800]:grey[500],
                            color:"text.primary",
                            borderRadius:2,
                            my:0.5,mx:1,
                            "&.MuiTab-root":{
                            minHeight:30
                        }}}
                        onClick={()=>setDrawerOpen(false)}
                       
                         />
                    ))
                }
                

                
            </Tabs>
    )
}
export default SidebarTabs;