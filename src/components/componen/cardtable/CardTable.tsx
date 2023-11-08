import { Link } from 'react-router-dom'
import './Styles.css'

const CardTable = ({title}: any) =>{
    return(
        <Link className='redirec' to='/ordertable/orderstable'>
            <div className='container-card_table'>
                <p className='card-text-table'>{title}</p>
            </div>
        </Link>
    )
}

export default CardTable