import './Styles.css'

function Butonfoodtype(){
    return(
        <button className="type">
          <div className='content'>
            <div className='icon-salad'>
              <img className='icon-img' src="/02.svg" alt="" />
            </div>
            <h3 className='food-type'>Salad</h3>
          </div>
          
        </button>
    )
}

export default Butonfoodtype