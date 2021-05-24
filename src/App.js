import React from 'react'
import { BrowserRouter, Switch, Route, Router } from "react-router-dom"
import { useSelector } from 'react-redux'
import store from './assets/store.png'
import order from './assets/order.png'
import profile from './assets/profile.png'

import { Container, Menu, PageBody } from './AppStyled'

import HomeScreen from './pages/HomeScreen'
import Tela2Screen from './pages/Tela2Screen'
import PrivateRoute from './components/PrivateRoute'

import MenuItem from './components/MenuItem'
import Cart from './components/Cart'

export default () => {

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon={store} link="/" />
                    <MenuItem icon={order} link="/order" />
                    <MenuItem icon={profile} link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute path="/order">
                            <div>TELA DE PEDIDOS</div>
                        </PrivateRoute>

                        <PrivateRoute path="/profile">
                            <div>TELA DE PERFIL</div>
                        </PrivateRoute>

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