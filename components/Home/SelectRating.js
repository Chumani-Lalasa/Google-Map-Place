import Data from '@/Shared/Data'
import React, { useState } from 'react'

function SelectRating() {
    const [selectedRating, setSelectedRating] = useState([]);

    const onSelectRating = (isChecked, value) => {
        if(isChecked){
            setSelectedRating([...selectedRating, value]);
        }else{
            setSelectedRating(selectedRating.filter((n) => n !== value))
        }
        console.log(selectedRating)
    }
  return (
    <div className='px-5 mt-5'>
        <h2 className='font-bold'>
            <div>
                {Data.ratingList.map((item, index) => (
                    <div className='flex justify-between' key={index}>
                        <label>{item.icon}</label>
                        <input type='checkbox' onChange={(e) => onSelectRating(e.target.checked, item.name)}/>
                    </div>
                ))}
            </div>
        </h2>
    </div>
  )
}

export default SelectRating
