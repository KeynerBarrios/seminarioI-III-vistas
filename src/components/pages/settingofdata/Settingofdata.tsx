import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import './Styles.css'
import Modal from '../../componen/modal/Modal';
import {useState} from 'react'


const Settingofdata = () =>{

    

    const [estadoModal2, cambiarEstadoModal2] = useState(false);


    return(
        <div className='container-setting_of_data'>
            <div className='icon-arrow-back'>
                <NavLink className='logo-setting-icon' to='/homeadmi'>
                    <img src="src/assets/Back.svg" alt="" />
                </NavLink>
            </div>
            {/*<div className='container-logo'>
                <img src="src/assets/Vector_logo1.svg" alt="" />
                <p className='type-text-setting'>LAVU’s</p>
                <p className='type-text-setting type_R_setting'>Restaurant</p>
            </div>*/}
            <h1 className='title-setting-sata'>Modificar datos</h1>
            <div className='contend-info'>
                <div className='setting-input'>
                    <div>
                        <p className='setting-name'>Full name</p>
                        <input className='setting-new-name' type="text" placeholder='New Name'/>
                    </div>
                </div>

                <div className='setting-input'>
                    <div>
                        <p className='setting-name'>Email</p>
                        <input className='setting-new-name' type="email" placeholder='lavus@gmail.com'/>
                    </div>
                </div>

                <div className='setting-input'>
                    <div>
                        <p className='setting-name'>Password</p>
                        <input className='setting-new-name setting_password' type="password" placeholder='**************'/>
                    </div>
                </div>

                <button onClick={()=> cambiarEstadoModal2(!estadoModal2)}  className='setting-button-change'>Cambiar</button>

                <Modal 
                    estado={estadoModal2}
                    cambiarEstado={cambiarEstadoModal2}
                >
                    <Container></Container>
                </Modal>

                <NavLink className='setting-link-home' to='/homeadmi'>
                    Cancelar
                </NavLink>
                
            </div>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
    `;

export default Settingofdata