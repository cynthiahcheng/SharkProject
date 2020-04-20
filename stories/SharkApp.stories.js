import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Menu from '../comps/Menu';
import TitlePage from '../pages/TitlePage';
import TutPage from '../pages/TutPage';
import GamePage from '../pages/GamePage';
import GamePage2 from '../pages/GamePage2';
import GamePage3 from '../pages/GamePage3';
import ResPage from '../pages/ResPage';
import HelpPage from '../pages/HelpPage';
import AboutPage from '../pages/AboutPage';
import MeetPage from '../pages/MeetPage';

export default {
  title: "Shark App",
  component: CustomButton,
};

export const MyCustomButton = () => <CustomButton />;

export const MyHeader = () => <div>
  <Header text="1. Pick the size of your shark."/>
  <Header text="2. Pick the location."/>
  <Header text="3. How endangered is the shark?"/>
  <Header text="3. How endangered is the shark?"/>
  <Header text="About"/>
  <Header text="How you can help"/>
</div>

export const MyMenu = () => <Menu />;

export const MyTitlePage = () => <TitlePage />;

export const MyAboutPage = () => <AboutPage />;

export const MyTutPage = () => <TutPage />;

export const MyGamePage = () => <GamePage />;
export const MyGamePage2 = () => <GamePage2 />;
export const MyGamePage3 = () => <GamePage3 />;

export const MyResPage = () => <ResPage />;

export const MyHelpPage = () => <HelpPage />;

export const MyMeetPage = () => <MeetPage />;