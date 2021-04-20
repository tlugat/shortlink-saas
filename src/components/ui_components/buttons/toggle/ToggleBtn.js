import './ToggleBtn.scss';


const ToggleBtn = ({values, handleToggleRate}) => {
  
  return ( 
    <div className="switch">
      <div className="switch__container">
        <input onClick={(e) => handleToggleRate(e)} value="monthly" id="toggle-on" className="toggle-left" name="toggle"  type="radio" defaultChecked/>
        <label  htmlFor="toggle-on" >Monthly</label>
        <input onClick={(e) => handleToggleRate(e)} value="yearly" id="toggle-off" className="toggle-right" name="toggle" type="radio"/>
        <label  htmlFor="toggle-off" >Yearly</label>
        <span className="cover"></span>
      </div>
      
    </div>
 
  )
}

export default ToggleBtn