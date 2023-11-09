import { Link, NavLink } from 'react-router-dom'
import './Styles.css'
import Deletecardtable from '../../componen/cardtable/Deletecardtable'

function Tablemanagement(){
    return(
        <div className='container-table'>
            <div className='icon-back'>
                <NavLink  to='/homeadmi'>
                    <img src="/Arrow.svg" alt="" />
                </NavLink>
            </div>
            <div className='container-logo'>
                <svg className='logo-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="64" viewBox="0 0 53 64" fill="none">
                    <path d="M18.793 49.0201C18.6991 48.9889 18.6366 48.9889 18.574 48.9577C18.0735 48.9577 17.573 48.9889 17.0412 49.0201M16.6658 49.0201C12.6303 48.9266 9.22048 47.7417 6.40504 45.4655C3.43318 43.0958 1.96289 40.2272 1.96289 36.8597V2.43657C6.59273 2.40539 10.5656 4.46329 13.8816 8.64147C16.9473 12.5078 18.574 17.1537 18.7617 22.5168C18.7617 22.8597 18.7617 31.6838 18.793 49.0201C19.0745 54.009 21.4833 57.6571 26.0193 59.9956C28.6471 61.3364 31.4625 61.9912 34.4031 61.9288C38.9078 61.7729 43.4438 61.6794 48.0423 61.617C48.9808 61.617 49.9193 61.617 50.8891 61.617C50.6075 56.6593 48.7306 53.1671 45.2269 51.1092C42.5679 49.519 38.9391 48.8018 34.3405 48.9577L19.1371 49.0201H16.6658Z" stroke="#AE4565" stroke-width="3.62416" stroke-miterlimit="3" stroke-linecap="round"/>
                </svg>
                <p className='type-text'>LAVU’s</p>
                <p className='type-text type_R'>Restaurant</p>
            </div>
            <h1 className='title-table'>Tus Mesas</h1>
            <div className='contend-card-table'>
            <div className='card-table'>
                <Deletecardtable title1="Mesa 1"/>
                <Deletecardtable title1="Mesa 2"/>
                <Deletecardtable title1="Mesa 3"/>
                <Deletecardtable title1="Mesa 4"/>
                <Deletecardtable title1="Mesa 5"/>
                <Deletecardtable title1="Mesa 6"/>
                <Deletecardtable title1="Mesa 7"/>
                <Deletecardtable title1="Mesa 8"/>
               
            </div>
            </div>

            <div className='container-card-button'>
                <Link to='/tablemanagement/addtable' className='button-setting-table'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                        <path d="M17.9997 3C17.5134 3 17.0471 3.18437 16.7033 3.51256C16.3595 3.84075 16.1663 4.28587 16.1663 4.75V15.25H5.16634C4.68011 15.25 4.2138 15.4344 3.86998 15.7626C3.52616 16.0908 3.33301 16.5359 3.33301 17C3.33301 17.4641 3.52616 17.9092 3.86998 18.2374C4.2138 18.5656 4.68011 18.75 5.16634 18.75H16.1663V29.25C16.1663 29.7141 16.3595 30.1593 16.7033 30.4874C17.0471 30.8156 17.5134 31 17.9997 31C18.4859 31 18.9522 30.8156 19.296 30.4874C19.6399 30.1593 19.833 29.7141 19.833 29.25V18.75H30.833C31.3192 18.75 31.7856 18.5656 32.1294 18.2374C32.4732 17.9092 32.6663 17.4641 32.6663 17C32.6663 16.5359 32.4732 16.0908 32.1294 15.7626C31.7856 15.4344 31.3192 15.25 30.833 15.25H19.833V4.75C19.833 4.28587 19.6399 3.84075 19.296 3.51256C18.9522 3.18437 18.4859 3 17.9997 3Z" fill="#F0ECE6"/>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Tablemanagement