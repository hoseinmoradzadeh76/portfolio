import { Slide, Typography, } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@mui/lab";
import { HomeRepairServiceRounded } from "@mui/icons-material";
import { devPro } from "../../constants/details";
const DevExpTimeLine = ({loading}) => {
    return (
        <Timeline position="right" sx={{ direction: "ltr" }}>
            {
                devPro.map((item, index) => (
                    <Slide in={loading} key={index} direction="up" style={{
                        transitionDelay: loading ? `${index + 3}99ms` : "0ms"
                    }}>
                        <TimelineItem >
                            <TimelineSeparator>
                                <TimelineDot color="warning" variant="outLined">
                                    <HomeRepairServiceRounded color="warning" />
                                </TimelineDot>
                                {
                                    index !== 2 ? <TimelineConnector /> : null
                                }
                            </TimelineSeparator>
                            <TimelineContent>

                                <Typography variant="body1" color="black">{item.titlePro}</Typography>
                                <Typography variant="caption" color="gray">{item.landguach}</Typography>

                                <Typography variant="body2" color="gray">
                                    <a href={item.href} target="_blank" rel="noopener noreferrer" color="gray">{item.address}</a>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Slide>

                ))

            }
        </Timeline>
    )
}
export default DevExpTimeLine;