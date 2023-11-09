import Butonfoodtype from '../../componen/button-food-type/Button-food-type'
import Foodcard from '../../componen/food-card/Food-card'
import Bar from '../../componen/bar/Bar'
import styled from 'styled-components'
import Modal from '../../componen/modal/Modal'
import {useState} from 'react'
import './Styles.css'
import { Link, NavLink } from 'react-router-dom'

function Homeadmi() {
  const [estadoModal1, cambiarEstadoModal1] = useState(false);

  return (
    <>
     <div className='home-content'>
      <div className='top-log-out'>
        <div>
          <h1 className='titel'>Welcome</h1>
          <div className='line'></div>
        </div>
        <button className='log-out'>Log Out</button>
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
        <Foodcard/>
      </div>
      <nav className="nav">
        <div className='nav__container'>

          <a href="#menu" className='nav__menu'>
            <img className='nav__icon' src="public/assets/akar-icons_gear.svg" alt="" />
          </a>

          <a href="#" className='nav__menu nav__icon--second'>
            <img className='nav__icon' src="public/assets/Back.svg" alt="" />
          </a>

          <ul className='dropdown' id='menu'>
            <div className='conteainer-menu'>
              <div className='icon-logo'>
                <img className='logo' src="public/assets/Vector_logo.svg" alt="" />
                <p className='name_res'>LAVU’s</p>
                <p className='name_titel'>Restaurant</p>
              </div>
              <button onClick={()=> cambiarEstadoModal1(!estadoModal1)} className='account-management'>Manejo de Cuenta</button>
              <NavLink to='/menumanagement' className='account-management link'>Manejo de Menú</NavLink>
              <Link to='/tablemanagement' className='account-management link'>Manejo de Mesas</Link>

              <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
              >
                <Container>
                  <NavLink to='/settingofdata' className='modify-button setting_data'>Modificar datos</NavLink>
                  <button className='modify-button'>Eliminar cuenta</button>
                </Container>
              </Modal>
            </div>
          </ul>
        </div>
      </nav>
      <div className='bar-state'>
        <Bar/>
      </div>
      
      
     </div>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
  `;

export default Homeadmi

