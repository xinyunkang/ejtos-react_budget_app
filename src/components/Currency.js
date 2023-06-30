import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import "./StyleCurrency.css" ;

const Currency = () => {
  const {dispatch } = useContext(AppContext);

	const changeCurrency = (val)=>{
			dispatch({
				type: 'CHG_CURRENCY',
				payload: val,
			})
	}
	
   return (
		<div className='alert alert-secondary'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}} >Currency
      <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#33FF49', color:'white'}}>
        <option style={{color:'black'}} value="£">£ Pound</option>
        <option style={{color:'black'}} value="$">$ Dollar</option>
        <option style={{color:'black'}} value="€">€ Euro</option>
        <option style={{color:'black'}} value="₹">₹ Rupee</option>
      </select>	
      </label>
      	
    </div>
	);
};

export default Currency;