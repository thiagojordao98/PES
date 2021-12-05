import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import {Container, Menu, Pagebody} from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import MenuItem from './components/MenuItem';
import PrivateRouter from './components/PrivateRouter';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
         
        <Container>
            <Menu>
                <MenuItem icon="/assets/logo.png" link="/"/>
                <MenuItem icon="/assets/food.png" link="/food"/>
                <MenuItem icon="/assets/profile.png" link="/profile"/>
            </Menu>
            <Pagebody>
            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <PrivateRouter path ="/food">
                    <div>Receitas</div>
                </PrivateRouter>
                <PrivateRouter path ="/profile">
                    <div>Perfil</div>
                </PrivateRouter>
                <Route path="/tela2/:nome">
                    <Tela2Screen />
                </Route>
            </Switch>
            </Pagebody>
        </Container>
        </BrowserRouter>
    );
}