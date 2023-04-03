import { Box,Divider } from "@mui/material";

import { grey } from "@mui/material/colors";

import {SidebarHeader,SidebarFooter,SidebarTabs} from ".";//توی پوشه سایدبار وفایل ایندس

const SidebarContent=()=>{
    
    return(
        <Box sx={{
            textAlign: "center",
            justifyContent: "center",
            mt: 2
        }}>
           
              <SidebarHeader/>
            <Divider variant="middle" color={grey[800]} />
            
            <SidebarTabs />
            <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
            <SidebarFooter/>
          
        </Box>
    )
 

}
export default SidebarContent;