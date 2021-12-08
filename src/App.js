import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import {Container, Menu, PageBody} from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import PrivateRouter from './components/PrivateRouter';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';

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
            <PageBody>
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
            </PageBody>
        <Cart />
        </Container>
        </BrowserRouter>
    );
}