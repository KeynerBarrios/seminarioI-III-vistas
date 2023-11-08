
import { NavLink } from 'react-router-dom'
import Bar from '../../componen/bar/Bar'
import Butonfoodtype from '../../componen/button-food-type/Button-food-type'
import Foodcard from '../../componen/food-card/Food-card'
import'./Styles.css'

function Menumanagement() {

 

  return (
    <>
    <div className='home-content'>
      <div className='top-log-out'>
        <div className='back-menu'>
          <NavLink  to='/homeadmi'>
            <img src="src/assets/Arrow.svg" alt="" />
          </NavLink>
        </div>
      </div>
      
      <div>
        <h2 className='titel-food_type'>Food type</h2>
        <div className='conten-button-food-type'>
          <Butonfoodtype/>
          <Butonfoodtype/>
          <Butonfoodtype/>
          <Butonfoodtype/>
          <Butonfoodtype/>
          <Butonfoodtype/>
          <Butonfoodtype/>
          <Butonfoodtype/>
        </div>
      </div>
      <h3 className='titel-popular'>Popular</h3>
      <div className='types-of-dish'>
        <Foodcard/>
        <Foodcard/>
        <Foodcard/>
        <Foodcard/>
        <Foodcard/>
      </div>
      <nav className="nav">
        <div className='nav__container'>

          <a href="#menu" className='nav__menu'>
            <img className='nav__icon' src="src/assets/gg_math-plus.svg" alt="" />
          </a>

        </div>

      </nav>
      
      <div className='bar-state'>
        <Bar/>
      </div>
     </div>
    </>
  )
}

export default Menumanagement