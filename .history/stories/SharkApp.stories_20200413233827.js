import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Menu from '../comps/Menu';
import TitlePage from '../pages/TitlePage';
import TutPage from '../pages/TutPage';
import GamePage from '../pages/GamePage';
import ResPage from '../pages/ResPage';
import HelpPage from '../pages/HelpPage';
import AboutPage from '../pages/AboutPage';

export default {
    title: "Shark App",
    component: CustomButton,
  };

export const MyCustomButton = () => <CustomButton />;

export const MyHeader = () => <Header />;

export const MyMenu = () => <Menu />;

export const MyTitlePage = () => <TitlePage />;

export const MyAboutPage = () => <AboutPage />;

export const MyTutPage = () => <TutPage />;

export const MyGamePage = () => <GamePage />;

export const MyResPage = () => <ResPage />;

export const MyHelpPage = () => <HelpPage />;