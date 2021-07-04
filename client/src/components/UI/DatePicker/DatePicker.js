import React from 'react';
import './DatePicker.scss';
import { fetchUserTodos } from '../../../reducers/todoReducer';
import { useDispatch, useSelector } from 'react-redux';
import { dateObjectToString } from '../../../common/date';

const DatePicker = ({userId}) => {
    const dispatch = useDispatch();
    const todoDates = useSelector(state => state.todoReducer.userTodoDates);
    const dateChangedHandler = (event) => {
        console.log(event.target.value);
        dispatch(fetchUserTodos(userId, event.target.value));
    }

    return (
        <div className="DatePicker">
            <label htmlFor="selectDate">Date: </label>
            {/* <input type="date" max="2021-07-01" onChange={dateChangedHandler}/> */}
            <select name="selectDate" id="selectDate" onChange={dateChangedHandler}>
                <option value="">All</option>
                {todoDates.map(date => <option key={date} value={date}>{date}</option>)}
            </select>
        </div>
    )
}

export default DatePicker;