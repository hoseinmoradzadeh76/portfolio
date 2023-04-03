import { useState } from "react";
import {  Typography } from "@mui/material";
import me from "../../assets/me.jpg";
import SocialMediaIcon from "../SocialMediaIcon";
import { RandomReveal } from 'react-random-reveal';
import { alphabetPersain } from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import { CustomeAvatar } from "../common";
const SidebarHeader = () => {
 const [start,setstart]=useState(false);

  return (
    <>
    <ThemeActionButton/>
    <CustomeAvatar avatar={me} size={200} fallback="hm"/>
     

      <Typography variant='h6' color="primary" >
        <RandomReveal isPlaying duration={4} characterSet={alphabetPersain} characters="حسین مرادزاده" onComplete={()=>{setstart(true)}}/>
      </Typography>
      {start &&(
        <Typography variant='caption' color="gray" >
        <Typography variant="caption" color="#4682b4">[[{" "}</Typography>
        <RandomReveal isPlaying duration={4} characterSet={alphabetPersain} characters="برنامه نویس فرانت اند"/>
        <Typography variant="caption" color="#4682b4">{" "}]]</Typography>
      </Typography>
      )}
   
     <SocialMediaIcon/>
    </>
  )
}
export default SidebarHeader;