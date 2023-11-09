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
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="akar-icons:gear">
                <g id="Group">
                  <path id="Vector" d="M21 4.49488C21 3.531 20.148 2.75 19.0965 2.75H16.905C15.852 2.75 15 3.531 15 4.49488C15 5.28963 14.406 5.97162 13.5975 6.26312C13.47 6.30987 13.3425 6.35937 13.218 6.40887C12.4215 6.72512 11.475 6.62888 10.86 6.0665C10.5031 5.73954 10.0191 5.55588 9.5145 5.55588C9.00989 5.55588 8.52594 5.73954 8.169 6.0665L6.618 7.48825C6.26132 7.81544 6.06096 8.25907 6.06096 8.72162C6.06096 9.18418 6.26132 9.62781 6.618 9.955C7.233 10.5187 7.338 11.385 6.99 12.1165C6.93532 12.2316 6.88282 12.3476 6.8325 12.4644C6.5145 13.2055 5.7705 13.75 4.9035 13.75C3.852 13.75 3 14.531 3 15.4949V17.5051C3 18.469 3.852 19.25 4.9035 19.25C5.7705 19.25 6.5145 19.7945 6.8325 20.5356C6.8835 20.6525 6.9375 20.7694 6.99 20.8835C7.3365 21.6136 7.2315 22.4813 6.618 23.045C6.26132 23.3722 6.06096 23.8158 6.06096 24.2784C6.06096 24.7409 6.26132 25.1846 6.618 25.5118L8.169 26.9335C8.52594 27.2605 9.00989 27.4441 9.5145 27.4441C10.0191 27.4441 10.5031 27.2605 10.86 26.9335C11.475 26.3697 12.42 26.2735 13.218 26.5911C13.3425 26.642 13.47 26.6901 13.5975 26.7369C14.406 27.0284 15 27.7104 15 28.5051C15 29.469 15.852 30.25 16.9035 30.25H19.0965C20.148 30.25 21 29.469 21 28.5051C21 27.7104 21.594 27.0284 22.4025 26.7355C22.53 26.6901 22.6575 26.642 22.782 26.5925C23.5785 26.2735 24.525 26.3711 25.1385 26.9335C25.3153 27.0956 25.5251 27.2242 25.7561 27.3119C25.9871 27.3997 26.2347 27.4448 26.4848 27.4448C26.7348 27.4448 26.9824 27.3997 27.2134 27.3119C27.4444 27.2242 27.6542 27.0956 27.831 26.9335L29.382 25.5118C29.7387 25.1846 29.939 24.7409 29.939 24.2784C29.939 23.8158 29.7387 23.3722 29.382 23.045C28.767 22.4813 28.662 21.615 29.0085 20.8835C29.064 20.7694 29.1165 20.6525 29.1675 20.5356C29.4855 19.7945 30.2295 19.25 31.0965 19.25C32.148 19.25 33 18.469 33 17.5051V15.4963C33 14.5324 32.148 13.7514 31.0965 13.7514C30.2295 13.7514 29.4855 13.2069 29.166 12.4657C29.1157 12.349 29.0632 12.233 29.0085 12.1179C28.6635 11.3877 28.7685 10.5201 29.382 9.95638C29.7387 9.62918 29.939 9.18555 29.939 8.723C29.939 8.26044 29.7387 7.81682 29.382 7.48963L27.831 6.06788C27.4741 5.74092 26.9901 5.55725 26.4855 5.55725C25.9809 5.55725 25.4969 5.74092 25.14 6.06788C24.525 6.63163 23.58 6.72788 22.782 6.41025C22.6564 6.35966 22.5299 6.31107 22.4025 6.2645C21.594 5.97163 21 5.28825 21 4.49488Z" stroke="#F0ECE6" stroke-width="2"/>
                  <path id="Vector_2" d="M24 16.5C24 17.9587 23.3679 19.3576 22.2426 20.3891C21.1174 21.4205 19.5913 22 18 22C16.4087 22 14.8826 21.4205 13.7574 20.3891C12.6321 19.3576 12 17.9587 12 16.5C12 15.0413 12.6321 13.6424 13.7574 12.6109C14.8826 11.5795 16.4087 11 18 11C19.5913 11 21.1174 11.5795 22.2426 12.6109C23.3679 13.6424 24 15.0413 24 16.5Z" stroke="#F0ECE6" stroke-width="2"/>
                </g>
              </g>
            </svg>
          </a>

          <a href="#" className='nav__menu nav__icon--second'>
            <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Back">
              <path id="Vector" d="M4.73796 12.0051L13.7163 3.02634C13.9635 2.77971 14.0995 2.44995 14.0995 2.09834C14.0995 1.74654 13.9635 1.41698 13.7163 1.16995L12.9296 0.38361C12.6827 0.136195 12.3528 0 12.0012 0C11.6496 0 11.32 0.136195 11.073 0.38361L0.382834 11.0736C0.134834 11.3214 -0.000970382 11.6525 5.22757e-06 12.0045C-0.000970382 12.358 0.134639 12.6888 0.382834 12.9368L11.063 23.6164C11.3101 23.8638 11.6396 24 11.9914 24C12.343 24 12.6726 23.8638 12.9198 23.6164L13.7063 22.83C14.2182 22.3182 14.2182 21.4851 13.7063 20.9735L4.73796 12.0051Z" fill="#F0ECE6"/>
              </g>
            </svg>
          </a>

          <ul className='dropdown' id='menu'>
            <div className='conteainer-menu'>
              <div className='icon-logo'>
                <img className='logo' src="public/Vector_logo.svg" alt="" />
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

