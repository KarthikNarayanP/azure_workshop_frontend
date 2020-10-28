import React from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Register from './containers/register/Register';
import Login from './containers/login/Login';
import ProductListWidget from './containers/plp/ProductListWidget';
import ProductPage from './containers/pdp/ProductPage';
import Basket from './containers/basket/Basket';
import Checkout from './containers/checkout/Checkout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/home/Home';
import { getAppInsights } from './insights/TelemetryService';
import TelemetryProvider from './insights/telemetry-provider';



const theme = createMuiTheme({
  shadows: new Array(25),
  palette: {
    primary: amber,
    secondary: deepOrange,
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true
  }
});

function App() {
  let appInsights = null;
  let INSTRUMENT_KEY = process.env.INSTRUMENT_KEY||'';
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL + '/cts-shop/'}>
        <TelemetryProvider instrumentationKey={INSTRUMENT_KEY} after={() => { appInsights = getAppInsights() }}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/product/:id' exact component={ProductPage} />
            <Route path='/products/:id' exact component={ProductListWidget} />
            <Route path='/basket' exact component={Basket} />
            <Route path='/checkout' exact component={Checkout} />
          </Switch>
        </TelemetryProvider>
      </BrowserRouter>
      {/* <Header />
      <Slider />
      <Feature />
      <ProductWidget />
       <ProductListWidget />
        <ProductPage />
        <Basket />
        <Footer /><Login /> */}


    </MuiThemeProvider>
  );
}

export default App;
