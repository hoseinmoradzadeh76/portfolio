import { useEffect, useRef, useCallback, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Typed from "typed.js";
import bg02 from "../assets/wallhaven-28y56x-min.jpg";
import Particles from "react-particles";
import TextTransition, { presets } from "react-text-transition";
import { loadFull } from "tsparticles";
import { links } from "../constants/particles";
const Home = ({title}) => {
    const [index, setIndex] = useState(0);
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const string = [
        "برنامه نویس و توسعه دهنده سایت هستم",
        "علاقه مند به زبان جاوا اسکریپت هستم",
        "فریلنسر هستم"
    ];


    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["حسین مرادزاده"],
            typeSpeed:110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false
        });
        const stringTransition = setInterval(() => {
            setIndex(index => index + 1);

        }, 3000);

        return () => {
            typedName.destroy();
            clearInterval(stringTransition)
        }

    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);

    }, []);
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, [])

    return (
        <Box sx={{
            backgroundImage: `url(${bg02})`
            , backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            , height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
            <Helmet>
                <title>سایت حسین مرادزاده-{title}</title>
            </Helmet>
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links} />
            <Box component="div" sx={{display:"flex"}}>
                <Typography variant="h3" color="#4682b4">
                    {"{{"}
                </Typography>
                <Typography variant='h3' ref={nameEl} sx={{ textAlign: "center" }} color="primary">

                </Typography>
                <Typography variant="h3" color="#4682b4">
                    {"}}"}
                </Typography>
            </Box>
            <Box component="div" sx={{ display: "flex" }}>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography variant="h4" color="whitesmoke" sx={{ textDecorationColor: "#F93C92", mt: 4 }}>
                        {string[index % string.length]}

                    </Typography>
                </TextTransition>
                <Typography variant="h4" color="whitesmoke" sx={{ mr: 1, mt: 4 }}>
                    من
                </Typography>
            </Box>

        </Box>
    )
}
export default Home;