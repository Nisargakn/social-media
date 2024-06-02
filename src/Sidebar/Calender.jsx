import React, { useState } from 'react'
import Calendar from 'react-calendar';

const Calender = () => {
    const [date, changeDate] = useState(new Date());

    function changeValue(val) {
        changeDate(val);
    }

    return (
        <div>
            <Calendar onChange={changeValue} value={date} />
            <p>The selected date is - {date.toLocaleDateString()}</p>
        </div>
    );
}

export default Calender