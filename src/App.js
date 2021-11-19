import "./App.css";

function App() {
  return (
    <div className="wrapper">
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
      <div className="content">
        <h1>All clothes</h1>
        <div className="clothes">
          <div className="card__item">
            <div className="card">
              <img
                height={50}
                width={50}
                src="https://www.bfgcdn.com/1500_1500_90/204-3447-0211/sunday-afternoons-havana-hat-hat.jpg"
              />
              <p>Men's clothes</p>
              <div className="cardBottom">
                <div>
                  <span>Cost</span>
                  <b>12 999 $</b>
                </div>
                <button>Button</button>
              </div>
            </div>
            <div className="card">
              <img
                height={50}
                width={50}
                src="https://www.bfgcdn.com/1500_1500_90/204-3447-0211/sunday-afternoons-havana-hat-hat.jpg"
              />
              <p>Men's clothes</p>
              <div className="cardBottom">
                <div>
                  <span>Cost</span>
                  <b>12 999 $</b>
                </div>
                <button>Button</button>
              </div>
            </div>
            <div className="card">
              <img
                height={50}
                width={50}
                src="https://www.bfgcdn.com/1500_1500_90/204-3447-0211/sunday-afternoons-havana-hat-hat.jpg"
              />
              <p>Men's clothes</p>
              <div className="cardBottom">
                <div>
                  <span>Cost</span>
                  <b>12 999 $</b>
                </div>
                <button>Button</button>
              </div>
            </div>
            <div className="card">
              <img
                height={50}
                width={50}
                src="https://www.bfgcdn.com/1500_1500_90/204-3447-0211/sunday-afternoons-havana-hat-hat.jpg"
              />
              <p>Men's clothes</p>
              <div className="cardBottom">
                <div>
                  <span>Cost</span>
                  <b>12 999 $</b>
                </div>
                <button>Button</button>
              </div>
            </div>
            <div className="card">
              <img
                height={50}
                width={50}
                src="https://www.bfgcdn.com/1500_1500_90/204-3447-0211/sunday-afternoons-havana-hat-hat.jpg"
              />
              <p>Men's clothes</p>
              <div className="cardBottom">
                <div>
                  <span>Cost</span>
                  <b>12 999 $</b>
                </div>
                <button>Button</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
