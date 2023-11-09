import { Link } from 'react-router-dom'
import './Styles.css'

function Bar(){
    return(
        <div className='bar'>
            <div className='img-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#AE4565"  viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                </svg>
                <p className='text-icon'>Menú</p> 
            </div>
            <Link to='/ordertable' className='order'>
                <p className='button-order'>Order</p>
            </Link>
            <div className='state'>
                <img className='state-icon' src="public/assets/Loading bar.svg" alt="" />
                <p className='state-text'>Estado del pedido</p>
            </div>
        </div>
    )
}

export default Bar