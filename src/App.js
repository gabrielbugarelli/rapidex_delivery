import React from 'react'
import { BrowserRouter, Switch, Route, Router } from "react-router-dom"
import { useSelector } from 'react-redux'
import ReactTooltip from 'react-tooltip'
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
                    <MenuItem title="Loja" icon={store} link="/" />
                    <MenuItem title="Pedidos" icon={order} link="/order" />
                    <MenuItem title="Perfil" icon={profile} link="/profile" />
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
                <ReactTooltip id="tip-bottom" place="bottom" effect="solid" />
                <ReactTooltip id="tip-right" place="right" effect="solid" />
            </Container>
        </BrowserRouter>
    );
}