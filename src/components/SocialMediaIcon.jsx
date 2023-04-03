import {IconButton,Box,} from "@mui/material";
import {GitHub,Instagram,Telegram,WhatsApp} from "@mui/icons-material";
const SocialMediaIcon=()=>{
    return(
        <Box component="div" sx={{ m: "0 auto", textAlign: "center", }}>
        <IconButton aria-label="GitHub">
          <a href="https://GitHub.com/hoseinmoradzadeh76/" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{color:"gray"}}/>
          </a>
        </IconButton>
        <IconButton aria-label="instagram">
          <a href="https://www.instagram.com/javascript-8h/" target="_blank" rel="noopener noreferrer">
            <Instagram sx={{color:"gray"}}/>
          </a>
        </IconButton>
        <IconButton aria-label="telegram">
          <a href="https://telegram.com/hoseinmoradzadeh8/" target="_blank" rel="noopener noreferrer">
            <Telegram sx={{color:"gray"}}/>
          </a>
        </IconButton>
        <IconButton aria-label="GitHub">
          <a href="https://whatsApp.com/hoseinmoradzadeh76/" target="_blank" rel="noopener noreferrer">
            <WhatsApp sx={{color:"gray"}}/>
          </a>
        </IconButton>


      </Box>
    )
}
export default SocialMediaIcon;