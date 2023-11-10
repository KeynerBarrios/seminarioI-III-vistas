import { Link } from 'react-router-dom'
import Butonfoodtype from '../../componen/button-food-type/Button-food-type'
import './saucer.css'

function Sauceradd(){



    return(
        <div className="container-saucer">
            <h1 className='title-saucer'>Agregar Platillo</h1>
            <p className='type-p'>Tipo de Platillo</p>
            <div className='type-saucer'>
                <Butonfoodtype/>
                <Butonfoodtype/>
                <Butonfoodtype/>
                <Butonfoodtype/>
            </div>

            <div className='contend-saucer'>
                <div className='img-saucer'>
                    <div className='img-type-saucer'  /> 
                </div>

                <input className='file-type-saucer' type="file" name='foto' id='foto' accept='image/*' />
                <input className='input-name-saucer' type="text" placeholder='[Nombre del Platillo]' />
                <input className='input-name-saucer heigtht' type="text" placeholder='Descripción' />
                <input className='input-name-saucer' type="text" placeholder='Precio' />
                <Link to='/menumanagement'><button className='sub-saucer' >Subir foto</button></Link>
            </div>


        </div>
    )
}

export default Sauceradd