
import { Helmet } from "react-helmet-async";
import {Card, CardContent } from "@mui/material";
import {CustomeDivider} from "../components/common";
import { ForumRounded } from "@mui/icons-material";


import { CommentSlider } from "../components/pages";

const Comments = ({ title }) => {

    return (
        <Card sx={{
            height: "100vh", backgroundColor: "whitesmoke"
            , overflowY: "scroll", display: "flex", flexDirection: "column"
        }}>
            <Helmet>
                <title>سایت حسین مرادزاده-{title}</title>
            </Helmet>
            <CardContent>
                <CustomeDivider bColor="success.main" cColor="success" icon={<ForumRounded />} align="center" text="نظرات دوستان"/>
               
               <CommentSlider/>

            </CardContent>
        </Card>
    )
}
export default Comments;