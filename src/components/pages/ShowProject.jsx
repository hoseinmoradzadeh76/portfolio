import { Typography, Card, CardContent, Slide, CardActions, CardActionArea, CardMedia, Button } from "@mui/material";
//import EllipsisText from "react-ellipsis-text";
import { projehMe } from "../../constants/projehMe";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
const ShowProject=({loading})=>{
    return(
        <>
         {
                    projehMe.map((item,index)=>(
                        
                            <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{px:3,my:3}}>

                              <Slide direction="up" in={loading} style={{
                                transitionDelay:loading?`${index+3}99ms`:"0ms"
                              }}>
                                <Card sx={{maxWidth:345,backgroundColor:"steelblue"}}>
                                    <CardActionArea>
                                        <CardMedia component="img" height="200" width="200" image={item.image} alt={item.title}/>
                                        <CardContent>
                                            <Typography variant="body1" textAlign="left" gutterBottom>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="theme.main" textAlign="left" sx={{direction:"ltr"}}>
                                                {/*<EllipsisText text={item.info} length={100}/>*/}
                                                {item.info}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions >
                                        <Button href={item.link} size="small" sx={{backgroundColor:"steelblue",width:"100%",fontWeight:"bold"}} color="warning" target="_blank">
                                           ورود به سایت
                                        </Button>
                                    </CardActions>
                                </Card>
                                </Slide>  
                            </Grid>
                    ))
                }
        </>
    );
}
export default ShowProject;