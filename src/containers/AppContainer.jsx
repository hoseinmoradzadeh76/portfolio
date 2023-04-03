import MainLayout from '../layout/MainLayout';
import { Sidebar } from '../components/Sidebar';
import PagesContainer from './PagesContainer';
import { useState,useEffect } from 'react';
import {Page} from '../components/pages';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SidebarContainer from './SidebarContainer';
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer/"
import SwipeableViews from 'react-swipeable-views';


import  {Home,About,Resume,Projehme, Comments, Contact}  from '../pages';



function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode,setMode]=useState();
 

  const theme=useTheme();
  const isMdUp=useMediaQuery(theme.breakpoints.up("md"));//هرموقعه ار smبه بابا رفت  true می شود
  const prefersDarkMode=useMediaQuery('(prefers-color-scheme:dark)');
  useEffect(()=>{
    setMode(prefersDarkMode ? "dark":"light");
  },[]);

  useEffect(()=>{
    if(isMdUp){
      setDrawerOpen(false);
    }

  },[isMdUp])
  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };
  const handleThemeChange=()=>{
    setMode((prevMode)=>(prevMode==="light"?"dark":"light"));
  }
 

  return (
    <MainContext.Provider value={{ pageNumber, handlePageNumber,handleThemeChange, drawerOpen, setDrawerOpen }}>
      <MainLayout mode={mode}>
        <DrawerActionButton />
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <PagesContainer>
          <SwipeableViews index={pageNumber} onChangeIndex={handlePageNumber}>
            <Page pageNumber={pageNumber} index={0}>
              <Home title="صحفه اصلی"/>

            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About title="درباره من"/>

            </Page>
            <Page pageNumber={pageNumber} index={2}>
              
                <Resume title="رزومه من"/>
             

            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Projehme title="نمونه کارها"/>

            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Comments title="نظرات دوستان"/>
            </Page>
            <Page pageNumber={pageNumber} index={5}>
              <Contact title="ارتباط با من"/>

            </Page>

          </SwipeableViews>

        </PagesContainer>

      </MainLayout>

    </MainContext.Provider>

  );
}

export default AppContainer;
