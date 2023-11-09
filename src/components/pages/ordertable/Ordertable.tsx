import { NavLink } from 'react-router-dom'
import CardTable from '../../componen/cardtable/CardTable'
import './Styles.css'

function Ordertable(){
    return(
        <div className='container-table-order'>
            <div className='icon-back-order'>
                <NavLink  to='/homeadmi'>
                    <img src="public/assets/Arrow.svg" alt="" />
                </NavLink>
            </div>
            <div className='container-logo-order'>
                <svg className='logo-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="64" viewBox="0 0 53 64" fill="none">
                    <path d="M18.793 49.0201C18.6991 48.9889 18.6366 48.9889 18.574 48.9577C18.0735 48.9577 17.573 48.9889 17.0412 49.0201M16.6658 49.0201C12.6303 48.9266 9.22048 47.7417 6.40504 45.4655C3.43318 43.0958 1.96289 40.2272 1.96289 36.8597V2.43657C6.59273 2.40539 10.5656 4.46329 13.8816 8.64147C16.9473 12.5078 18.574 17.1537 18.7617 22.5168C18.7617 22.8597 18.7617 31.6838 18.793 49.0201C19.0745 54.009 21.4833 57.6571 26.0193 59.9956C28.6471 61.3364 31.4625 61.9912 34.4031 61.9288C38.9078 61.7729 43.4438 61.6794 48.0423 61.617C48.9808 61.617 49.9193 61.617 50.8891 61.617C50.6075 56.6593 48.7306 53.1671 45.2269 51.1092C42.5679 49.519 38.9391 48.8018 34.3405 48.9577L19.1371 49.0201H16.6658Z" stroke="#AE4565" stroke-width="3.62416" stroke-miterlimit="3" stroke-linecap="round"/>
                </svg>
                <p className='type-text-order'>LAVU’s</p>
                <p className='type-text-order type_R-order'>Restaurant</p>
            </div>
            <h1 className='title-table-order'>Tus Mesas</h1>
            <div className='contend-card-table-order'>
                <div className='card-table-order'>
                    <CardTable title="Mesa 1"/>
                    <CardTable title="Mesa 2"/>
                    <CardTable title="Mesa 3"/>
                    <CardTable title="Mesa 4"/>
                    <CardTable title="Mesa 5"/>
                    <CardTable title="Mesa 6"/>
                    <CardTable title="Mesa 7"/>
                
                </div>
            </div>
        </div>
    )
}

export default Ordertable