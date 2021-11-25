
const Drawer = () => {
    return (
         <div className="drawer">
          <div className="items">
            <h3>Корзина</h3>
            <h3> remove</h3>
            <div className="cartItem">
          <div className="carttem">
            <div style={{backgroundImage: `url("https://i.pinimg.com/originals/a0/56/62/a056629624046e5dae7e2f83f44c516f.png")`}} className="cartItemImg"></div>
            <div >
              <p>Mens Clothes</p>
              <b>12 999 руб.</b>
            </div>
          <span className="removeBtn">rem </span>
          </div>
          <div className="carttem">
            <div style={{backgroundImage: `url("https://i.pinimg.com/originals/a0/56/62/a056629624046e5dae7e2f83f44c516f.png")`}} className="cartItemImg"></div>
            <div >
              <p>Mens Clothes</p>
              <b>12 999 руб.</b>
            </div>
          <span className="removeBtn">rem </span>
            </div>
          </div>
          </div>
          <ul className="cartTotalBlock">
            <li className="li">
              <span>All</span>
              <div></div>
              <b>21 498 usd</b>
            </li>
            <li className="li">
              <span>Налог 5%</span>
              <div></div>
              <b>1074 usd.</b>
            </li>
          <button>Оформить заказ</button>
          </ul>
        </div> 
    )
}
export default Drawer
