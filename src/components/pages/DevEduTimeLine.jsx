import { Slide, Typography, } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineContent, TimelineConnector } from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { devEdu } from "../../constants/details";
const DevEduTimeLine = ({ loading }) => {
    return (
        <Timeline position="right" sx={{ direction: "ltr" }}>
            {
                devEdu.map((item, index) => (
                    <Slide in={loading} key={index} direction="up" style={{
                        transitionDelay: loading ? `${index + 4}99ms` : "0ms"
                    }}>
                        <TimelineItem >
                            <TimelineSeparator>
                                <TimelineDot color="info" variant="outLined">
                                    <SchoolRounded color="info" />
                                </TimelineDot>
                                {
                                    index !== 1 ? <TimelineConnector /> : null
                                }

                            </TimelineSeparator>
                            <TimelineContent>{/*برای محتوا */}
                                <Typography variant="caption" color="gray">
                                    {item.year}
                                </Typography>
                                <Typography variant="body1" color="black">
                                    {item.cart}
                                </Typography>
                                <Typography variant="body2" color="black">
                                    {item.major}
                                </Typography>
                                <Typography variant="body2" color="gray">
                                    {item.place}
                                </Typography>
                            </TimelineContent>

                        </TimelineItem>
                    </Slide>

                ))
            }
        </Timeline>

    )
}
export default DevEduTimeLine;