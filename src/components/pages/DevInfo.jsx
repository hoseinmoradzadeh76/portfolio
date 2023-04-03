import { Typography } from "@mui/material";
import { KeyboardArrowLeft } from "@mui/icons-material";
const Info = ({ children }) => {
    return (
        <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }} >
            {children}
            <KeyboardArrowLeft sx={{ color: "primary.main", verticalAlign: "bottom" }} />
        </Typography>
    )
};
const DevInfo = () => {
    return (
        <>
            <Info>نام ونام خانوادگی:حسین مرادزاده</Info>
            <Info>سن : 25</Info>
            <Info>شهر : مشهد</Info>
            <Info>hosein.moradzadeh76@gmail.com:آدرس ایمیل</Info>
        </>
    )
}
export default DevInfo;