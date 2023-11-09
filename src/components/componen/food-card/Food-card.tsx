import './Styles.css'

function Foodcard(){
    return(
        <div className='contend'>
            <div className='contend-food'>
                <div className='conted-img'>
                    <img className='img-food' src="public/image 11.png" alt="" />
                </div>
                <div className='contend-border'>
                    <div className='information'>
                        <p className='name-food'>Salmon Salad</p>
                        <p className='food-price'>$39</p>
                    </div>
                    <p className='description'>Introduction about dishes</p>
                </div>
            </div>

        </div>
    )
}

export default Foodcard