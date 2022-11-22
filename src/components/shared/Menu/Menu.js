import React, { useState } from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="nav-bar-wrapper">
      <nav className="nav-bar">
        <ul className="parent menu-level-0 ">
          <li className="menu-item menu-item-level-0">
            <NavLink exact={true} to="/" className="anchor">
              <span className="menu-text">Home</span>
            </NavLink>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/newtorent" className="anchor">
              <span className="menu-text">Movies</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/newtorent" className="anchor">
                  <span className="text">New To Rent</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/newtobuy" className="anchor">
                  <span className="text">New To Buy</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/preorder" className="anchor">
                  <span className="text">Pre-Order</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/movieboxsets" className="anchor">
                  <span className="text">Movie Box Sets</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/officialfilmchart" className="anchor">
                  <span className="text">Official Film Chart</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/browse" className="anchor">
                  <span className="text">Browse</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/atoz" className="anchor">
                  <span className="text">A to Z</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/skystorepremiere" className="anchor">
              <span className="menu-text">Sky Store Premiere</span>
            </NavLink>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/under3" className="anchor">
              <span className="menu-text">Sale</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/superherosavings" className="anchor">
                  <span className="text">Superhero savings</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/storepicks" className="anchor">
                  <span className="text">Store Picks</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/under3" className="anchor">
                  <span className="text">Under £3</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/under4" className="anchor">
                  <span className="text">Under £4</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/under5" className="anchor">
                  <span className="text">Under £5</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/skyvipgifts" className="anchor">
              <span className="menu-text">Sky VIP</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/skyvipgifts" className="anchor">
                  <span className="text">Sky VIP Gifts</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-level-0">
            <NavLink to="/mostpopular" className="anchor">
              <span className="menu-text">TV</span>
              <span className="menu-icon">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </NavLink>
            <ul className="menu-level-1">
              <li className="menu-item menu-item-level-1">
                <NavLink to="/mostpopular" className="anchor">
                  <span className="text">Most Popular</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/newtostore" className="anchor">
                  <span className="text">New To Store</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/drama" className="anchor">
                  <span className="text">Drama</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/comedy" className="anchor">
                  <span className="text">Comedy</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/kids" className="anchor">
                  <span className="text">Kids</span>
                </NavLink>
              </li>
              <li className="menu-item menu-item-level-1">
                <NavLink to="/all" className="anchor">
                  <span className="text">All</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="menu-item menu-item-level-0 highlighted">
            <NavLink to="/redeemvoucher" className="anchor">
              <span className="menu-text">Redeem Voucher</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
