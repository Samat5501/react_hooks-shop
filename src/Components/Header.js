import React from "react";

const Header = () => {
    return (
        <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.jpg" />
          <div className="headerInfo">
            <h3>_STAR_CLOTHES.KG</h3>
            <p>SHOP the best clothes</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img height={28} width={28} src="/img/cart.png" />
            <span>1500$</span>
          </li>
          <li>
            <img height={28} width={28} src="/img/users.png" />
          </li>
        </ul>
      </header>
    )
}
export default Header