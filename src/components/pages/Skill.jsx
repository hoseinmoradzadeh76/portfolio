import { Box, Divider, Chip, Typography, LinearProgress, Badge } from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
    return (
        <>
            <Divider textAlign="right" sx={{
                "&::before,&::after": {
                    borderColor: `${color}.main`
                }, mt: 3
            }}>
                <Chip icon={<Box component="img" src={icon} sx={{ height: 30 }}></Box>} color={color} label={name} sx={{ color: "whitesmoke", p: 3 }} />
            </Divider>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ minWidth: 35, mr: 1.2 }}>
                    <Typography variant="body2" color="black">
                        <Badge variant="standard" badgeContent={`${Math.round(value)}%`} color={color} />
                    </Typography>
                </Box>
                <Box sx={{ width: "100%", mr: 1 }}>
                    <LinearProgress variant="determinate" value={value} color={color} sx={{ height: 10, borderRadius: 2 }} />
                </Box>
            </Box>
        </>
    )
}
export default Skill;