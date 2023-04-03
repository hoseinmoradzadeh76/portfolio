import { Box,Typography } from "@mui/material";

import{CopyrightRounded} from "@mui/icons-material"
const SidebarFooter=()=>{
    return(
        <Box sx={{
            display: "flex",
            flexGrow: "1",
            flexDirection: "column",
            justifyContent: "center",
            alignItems:"center",
            height:100
        }}>
            <Typography variant="subtitle2" color="text.primary">
                طراحی شده با{" "}
                React
            </Typography>
            <Typography variant="caption" color="text.primary" sx={{mt:1}}>
                    کپی رایت 1401{" "}
                    <CopyrightRounded sx={{height:16,verticalAlign:"middle"}}/>
                </Typography>
        </Box>
    )
}
export default SidebarFooter;