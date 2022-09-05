import './App.css';


function App () {
    return (
        <div style={{backgroundColor: 'black'}}>
        <div className="menu-header">
          <a href="#" className="menu-header-a">HOME</a>
          <a href="#" className="menu-header-a">MENU</a>
          <a href="#" className="menu-header-a">ABOUT</a>
          <a href="#" className="menu-header-a">CONTACT</a>
        </div>
        <div className="header">
          <img src="https://www.w3schools.com/w3images/pizza.jpg" width="100%" style={{maxHeight: '750px'}} height="100%" />
          <div className="text-one">
            <p style={{margin: 0}}>Open from 10am to 12pm</p>
          </div>
          <div className="text-big">
            <span className="text-100">
              thin
              <br />
              CRUST PIZZA
            </span>
            <a href="#">
              <p className="p-image">
                Let me see the menu
              </p>
            </a>
          </div>
        </div>
        <div className="content">
          <h1 className="center">THE MENU</h1>
          <div className="menu-content">
            <div className="menu-content-small div-red">
              PIZZA
            </div>
            <div className="menu-content-small">
              SALADS
            </div>
            <div className="menu-content-small">
              STARTER
            </div>
          </div>
          <div className="content-menu-big">
            <h3>
              <b>Margherita</b>
              <span className="span-right">$12.50</span>
            </h3>
            <p className="div-color75">
              Fresh tomatoes, fresh mozzarella, fresh basil
            </p>
            <hr />
            <h3>
              <b>Formaggio</b>
              <span className="span-right">$15.50</span>
            </h3>
            <p className="div-color75">
              Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)
            </p>
            <hr />
            <h3>
              <b>Chicken</b>
              <span className="span-right">$17.00</span>
            </h3>
            <p className="div-color75">
              Fresh tomatoes, mozzarella, chicken, onions
            </p>
            <hr />
            <h3>
              <b>Pineapple'o'clock</b>
              <span className="span-right">$16.50</span>
            </h3>
            <p className="div-color75">
              Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil
            </p>
            <hr />
            <h3>
              <b>Meat Town<span style={{backgroundColor: 'red', padding: '5px', borderRadius: '5px', color: '#FFF'}}>Hot!</span></b>
              <span className="span-right">$20.00</span>
            </h3>
            <p className="div-color75">
              Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken
            </p>
            <hr />
            <h3>
              <b>Parma <span style={{backgroundColor: 'rgb(164, 165, 167)', padding: '5px', borderRadius: '5px'}}>New</span></b>
              <span className="span-right">$21.50</span>
            </h3>
            <p className="div-color75">
              Fresh tomatoes, mozzarella, parma, bacon, fresh arugula
            </p>
          </div>
        </div>
        <div style={{backgroundColor: '#f44336', color: '#fff', filter: 'grayscale(75%)', marginTop: '100px'}}>
          <div className="content">
            <h1 style={{padding: '50px 0'}} className="center">About</h1>
            <p>The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="menu-text-image">
              <div className="menu-text">
                <p style={{marginTop: 0}}>The Chef? Mr. Italiano himself</p>
                <p style={{marginBottom: 0}}>We are proud of our interiors.</p>
              </div>
              <div className="menu-image">
                <img src="https://www.w3schools.com/w3images/chef.jpg" style={{width: '150px', borderRadius: '50%'}} />
              </div>
            </div>
            <img src="https://www.w3schools.com/w3images/onepage_restaurant.jpg" style={{width: '100%', margin: '16px 0'}} />
            <h2>Opening Hours</h2>
            <div className="div-float">
              <div className="div-float-left">
                <p>Mon &amp; Tue CLOSED</p>
                <p>Wednesday 10.00 - 24.00</p>
                <p>Thursday 10:00 - 24:00</p>
              </div>
              <div className="div-float-left">
                <p>Friday 10:00 - 12:00</p>
                <p>Saturday 10:00 - 23:00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
          </div>
          <img src="https://www.w3schools.com/w3images/map.jpg" width="100%" />
        </div>
      </div>
    )
};
export default App;