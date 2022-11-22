// import { useState } from 'react';
import HomePage from "./components/HomePage/HomePage";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import "./App.css";
import AtoZ from "./components/HomePage/Movies/AtoZ";
import Browse from "./components/HomePage/Movies/Browse";
import MovieBoxSets from "./components/HomePage/Movies/MovieBoxSets";
import NewToBuy from "./components/HomePage/Movies/NewToBuy";
import NewToRent from "./components/HomePage/Movies/NewToRent";
import OfficialFilmChart from "./components/HomePage/Movies/OfficialFilmChart";
import PreOrder from "./components/HomePage/Movies/PreOrder";
import StorePicks from "./components/HomePage/Sale/StorePicks";
import SuperHeroSavings from "./components/HomePage/Sale/SuperHeroSavings";
import Under3 from "./components/HomePage/Sale/Under3";
import Under4 from "./components/HomePage/Sale/Under4";
import Under5 from "./components/HomePage/Sale/Under5";
import SkyStorePremiere from "./components/HomePage/SkyStorePremiere/SkyStorePremiere";
import SkyVipGifts from "./components/HomePage/SkyVip/SkyVipGifts";
import All from "./components/HomePage/TV/All";
import Comedy from "./components/HomePage/TV/Comedy";
import Drama from "./components/HomePage/TV/Drama";
import Kids from "./components/HomePage/TV/Kids";
import MostPopular from "./components/HomePage/TV/MostPopular";
import NewToStore from "./components/HomePage/TV/NewToStore";
import RedeemVoucher from "./components/HomePage/RedeemVoucher/RedeemVoucher";
import SignIn from "./components/auth/SignIn/SignIn";
import SignUp from "./components/auth/SignUp/SignUp";
import Details from "./components/Details/Details";
import Show from "./components/Show/Show";
import { useLocation } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Helmet from "react-helmet";
function App() {
  const mainpath = useLocation();
  // console.log("App", mainpath.searchVal);
  return (
    <>
      {mainpath.pathname === "/signin" || mainpath.pathname === "/signup" ? (
        <Helmet bodyAttributes={{ style: "background-color : #fff" }} />
      ) : (
        <Header />
      )}
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/atoz">
          <AtoZ />
        </Route>
        <Route path="/browse">
          <Browse />
        </Route>
        <Route path="/movieboxsets">
          <MovieBoxSets />
        </Route>
        <Route path="/newtobuy">
          <NewToBuy />
        </Route>
        <Route path="/newtorent">
          <NewToRent />
        </Route>
        <Route path="/officialfilmchart">
          <OfficialFilmChart />
        </Route>
        <Route path="/preorder">
          <PreOrder />
        </Route>
        <Route path="/storepicks">
          <StorePicks />
        </Route>
        <Route path="/superherosavings">
          <SuperHeroSavings />
        </Route>
        <Route path="/under3">
          <Under3 />
        </Route>
        <Route path="/under4">
          <Under4 />
        </Route>
        <Route path="/under5">
          <Under5 />
        </Route>
        <Route path="/skystorepremiere">
          <SkyStorePremiere />
        </Route>
        <Route path="/skyvipgifts">
          <SkyVipGifts />
        </Route>
        <Route path="/all">
          <All />
        </Route>
        <Route path="/comedy">
          <Comedy />
        </Route>
        <Route path="/drama">
          <Drama />
        </Route>
        <Route path="/kids">
          <Kids />
        </Route>
        <Route path="/mostpopular">
          <MostPopular />
        </Route>
        <Route path="/newtostore">
          <NewToStore />
        </Route>
        <Route path="/redeemvoucher">
          <RedeemVoucher />
        </Route>
        <Route path="/show">
          <Show />
        </Route>
        {/* Authentication */}
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        {/* Details Tab */}
        <Route exact path="/details/:id">
          <Details />
        </Route>
      </Switch>
      {mainpath.pathname === "/signin" ||
      mainpath.pathname === "/signup" ? null : (
        <Footer />
      )}
    </>
  );
}

export default App;
