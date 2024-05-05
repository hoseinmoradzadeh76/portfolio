import { Typography, Card, CardContent, Avatar, Box } from "@mui/material";
import { userComments } from "../../constants/details";
import Slider from "react-slick";
const CommentSlider = () => {

    const options = {
        dots: true,
        arrow: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear"

    }
    return (
        <Box component="div" sx={{ justifyContent: "center", alignItems: "center" }}>

            <Slider {...options}>
                {
                    userComments.map((item, index) => (
                        <Box key={index} component="div" sx={{ mt: 5}}>
                            <Avatar src={item.avatar} variant="rounded" sx={{ height: 100, width: 100, margin: "0 auto", borderRadius: 50 }} />
                            <Typography variant="body1" color="theme.main" textAlign="center" sx={{ mt: 2 }} >
                                {item.fullname}
                            </Typography>
                            <Typography variant="body2" color="theme.main" textAlign="center" sx={{ mb: 2 }}>
                                {item.job}
                            </Typography>
                            <Card sx={{ backgroundColor: "lightsalmon", width: 1 / 2, margin: "0 auto", borderRadius: 5 }}>
                                <CardContent >
                                    <Typography variant="body2" textAlign="center">
                                        {item.comments}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))
                }


            </Slider>



        </Box>
    )
}
export default CommentSlider