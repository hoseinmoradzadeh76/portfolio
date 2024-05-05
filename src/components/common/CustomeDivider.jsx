import { useState, useEffect } from "react";
import { Typography, Divider, Chip, Slide } from "@mui/material";

const CustomeDivider = ({ bColor, cColor, icon, align, text }) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        return () => {
            setLoading(false);
        }
    }, []);
    return (
        <Slide in={loading} direction="down" style={{
            transitionDelay: loading ? "200ms" : "0ms"
        }}>
            <Divider textAlign={align} sx={{
                "&::before,&::after": {
                    borderColor: bColor
                }, my: 2
            }} >
                <Chip icon={icon} color={cColor} label={
                    <Typography variant="body1" color="sucssecc.main" sx={{ textAlign: "center" }}>{text}</Typography>
                } sx={{ p: 3 }} />

            </Divider>
        </Slide>
    )


}
export default CustomeDivider;
