import CountUp from "react-countup";
import { Typography, Chip,Box, Tooltip } from "@mui/material";
import { devDetails } from "../../constants/details";
const DevWorkCount = () => {
    return (
        <>
            {
                devDetails.map((item, index) => (
                    <Box key={index} component="div" sx={{ width: 1, mb: 1 }}>

                        <Tooltip title={item.tooltipTitle} placement="right" arrow>
                            <Chip icon={item.icon} label={
                                <Typography variant="body1" color="sucssecc.main">
                                    <CountUp start={0} end={item.total} duration={3} />

                                </Typography>
                            } sx={{ p: 2, backgroundColor: item.color, width: 1 }} />

                        </Tooltip>

                    </Box>
                ))
            }
        </>
    )
}

export default DevWorkCount;