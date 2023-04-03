import { useState, useEffect } from "react";
import {Skill} from "./";
import { devSkills } from "../../constants/Skills";
import { useTheme } from "@mui/material/styles";
const Skills = () => {
    const [javascript, serJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [react, setReact] = useState(0);
    const [sass, setSass] = useState(0);
    const [wordprass, setWordprass] = useState(0);
    const [git, setGit] = useState(0);
    const theme = useTheme();

    useEffect(() => {
        const time = setInterval(() => {
            serJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 70);
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 95);

            });
            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 85);
            });
            setBootstrap((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 80);
            });
            setReact((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 55);
            });
            setSass((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 60);
            });
            setWordprass((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75);
            });
            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 58);
            });
        }, 200);


        return () => {
            clearInterval(time);
        }
    }, []);
    const { skillHtml, skillCss, skillJavaScript, skillBootstrap, skillReact, skillSass, skillWordprass, skillgitHub } = devSkills;


    return (
        <>
            <Skill name={skillHtml.name} icon={skillHtml.icon} color={skillHtml.color} value={html} />
            <Skill name={skillCss.name} icon={skillCss.icon} color={skillCss.color} value={css} />
            <Skill name={skillJavaScript.name} icon={skillJavaScript.icon} color={skillJavaScript.color} value={javascript} />
            <Skill name={skillBootstrap.name} icon={skillBootstrap.icon} color={skillBootstrap.color} value={bootstrap} />
            <Skill name={skillReact.name} icon={skillReact.icon} color={skillReact.color} value={react} />
            <Skill name={skillWordprass.name} icon={skillWordprass.icon} color={skillWordprass.color} value={wordprass} />

            <Skill name={skillSass.name} icon={skillSass.icon} color={skillSass.color} value={sass} />
            <Skill name={skillgitHub.name} icon={skillgitHub.icon} color={skillgitHub.color} value={git} />
        </>
    )
}
export default Skills;