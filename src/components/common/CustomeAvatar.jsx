import { Avatar } from "@mui/material";

const CustomeAvatar = ({ avatar, size, fallback }) => {
    return (
        <>
            <Avatar src={avatar} variant="rounded" sx={{
                height: size,
                width: size,
                margin: "0 auto",
                display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "block",
                    xl: "block"
                }
            }}>{fallback}</Avatar>
        </>
    )
}
export default CustomeAvatar;