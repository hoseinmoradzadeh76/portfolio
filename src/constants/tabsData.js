import { HomeRounded, FaceRounded, TextSnippetRounded, TerminalRounded, MessageRounded, ConnectWithoutContactRounded,} from '@mui/icons-material';
const tabProps=(index)=>{
    return{
        id:`sidebar-tab${index}`,
        "aria-controls":`tabpanel-${index}`,

    };
};
export const tabsData=()=>{
const tabs=[
    {label:"صحفه اصلی",icon:<HomeRounded/>,...tabProps(0)},
    {label:"درباره ی من",icon:<FaceRounded/>,...tabProps(1)},
    {label:"رزومه من",icon:<TextSnippetRounded/>,...tabProps(2)},
    {label:"نمونه کارها",icon:<TerminalRounded/>,...tabProps(3)},
    {label:"نظرات دوستان",icon:<MessageRounded/>,...tabProps(4)},
    {label:"ارتباط با من",icon:<ConnectWithoutContactRounded/>,...tabProps(5)}
]
return tabs;
}