import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Menu from '../comps/Menu';

export default {
    title: "Shark App",
    component: CustomButton,
  };

export const MyCustomButton = () => <CustomButton />;

export const MyHeader = () => <Header />

export const MyMenu = () => <Menu />