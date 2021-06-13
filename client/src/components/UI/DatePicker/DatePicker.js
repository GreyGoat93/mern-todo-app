import React from 'react';
import './DatePicker.scss';

const DatePicker = () => {
    return (
        <div className="DatePicker">
            <label htmlFor="selectDate">Date: </label>
            <input type="date" max="2021-06-13" onChange={(e) => {console.log(e.target.value)}}/>
            {/* <select name="selectDate" id="selectDate" onChange={(e) => {console.log(e.target.value)}}>
                <option value="">All</option>
                <option value="21.02.2020">21.02.2020</option>
                <option value="21.01.2020">21.01.2020</option>
                <option value="20.01.2020">20.01.2020</option>
            </select> */}
        </div>
    )
}

export default DatePicker;