import { Link } from 'react-router-dom'
import './Styles.css'
import Weigthorder from '../../componen/weigthorder/Weigthorder'

const Orderstable = () =>{
    return(
        <div className='container-table-orders'>
            <div className='icon-back-orders'>
                <Link  to='/ordertable'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="24" viewBox="0 0 15 24" fill="none">
                        <path d="M4.73796 12.0051L13.7163 3.02634C13.9635 2.77971 14.0995 2.44995 14.0995 2.09834C14.0995 1.74654 13.9635 1.41698 13.7163 1.16995L12.9296 0.38361C12.6827 0.136195 12.3528 0 12.0012 0C11.6496 0 11.32 0.136195 11.073 0.38361L0.382834 11.0736C0.134834 11.3214 -0.000970382 11.6525 5.22757e-06 12.0045C-0.000970382 12.358 0.134639 12.6888 0.382834 12.9368L11.063 23.6164C11.3101 23.8638 11.6396 24 11.9914 24C12.343 24 12.6726 23.8638 12.9198 23.6164L13.7063 22.83C14.2182 22.3182 14.2182 21.4851 13.7063 20.9735L4.73796 12.0051Z" fill="black"/>
                    </svg>
                </Link>
            </div>
            <div className='container-logo-orders'>
                <svg className='logo-svg' xmlns="http://www.w3.org/2000/svg" width="53" height="64" viewBox="0 0 53 64" fill="none">
                    <path d="M18.793 49.0201C18.6991 48.9889 18.6366 48.9889 18.574 48.9577C18.0735 48.9577 17.573 48.9889 17.0412 49.0201M16.6658 49.0201C12.6303 48.9266 9.22048 47.7417 6.40504 45.4655C3.43318 43.0958 1.96289 40.2272 1.96289 36.8597V2.43657C6.59273 2.40539 10.5656 4.46329 13.8816 8.64147C16.9473 12.5078 18.574 17.1537 18.7617 22.5168C18.7617 22.8597 18.7617 31.6838 18.793 49.0201C19.0745 54.009 21.4833 57.6571 26.0193 59.9956C28.6471 61.3364 31.4625 61.9912 34.4031 61.9288C38.9078 61.7729 43.4438 61.6794 48.0423 61.617C48.9808 61.617 49.9193 61.617 50.8891 61.617C50.6075 56.6593 48.7306 53.1671 45.2269 51.1092C42.5679 49.519 38.9391 48.8018 34.3405 48.9577L19.1371 49.0201H16.6658Z" stroke="#AE4565" stroke-width="3.62416" stroke-miterlimit="3" stroke-linecap="round"/>
                </svg>
                <p className='type-text-orders'>LAVU’s</p>
                <p className='type-text-orders type_R-orders'>Restaurant</p>
            </div>
            <h1 className='title-table-orders'>Platillos de la mesa</h1>

            <div className='weigth'>
                <Weigthorder/>
                <Weigthorder/>
                <Weigthorder/>
            </div>
         
        </div>
    )
}

export default Orderstable