import { Link } from 'react-router-dom'
import './Styles.css'

const Deletecardtable = ({title1} : any) =>{
    return(
        <div className='container-card_table delete'>
            <p className='card-text-table'>{title1}</p>
            <div className='edit-delete'>
                <Link to='/tablemanagement/edittable'>
                    <button className='icon-edit-delete'>
                        <img src="public/Vector-edit.svg" alt="" />
                    </button>
                </Link>
                <button className='icon-edit-delete'>
                    <img src="public/Vector-delete.svg" alt="" />
                </button>
                
            </div>
        </div>
    )
}

export default Deletecardtable