import React from 'react';
import './DatePicker.scss';
import { fetchUserTodos } from '../../../reducers/todoReducer';
import { useDispatch } from 'react-redux';

const DatePicker = ({userId}) => {
    const dispatch = useDispatch();
    const dateChangedHandler = (event) => {
        console.log(event.target.value);
        dispatch(fetchUserTodos(userId, event.target.value));
    }

    return (
        <div className="DatePicker">
            <label htmlFor="selectDate">Date: </label>
            <input type="date" max="2021-07-01" onChange={dateChangedHandler}/>
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