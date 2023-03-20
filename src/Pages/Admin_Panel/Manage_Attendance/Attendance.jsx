import React from 'react';

export default function Attendance(props) {
    return (
        <div className='divaddadmin'>
            <div><h2 className="listadmintitle">STUDENTS ATTENDENCE</h2></div>
            <div className="flexflowdiv">
                <button
                    onClick={() => props.history.push('/attendance/old')}
                    className="old-list-attendance"
                >
                    Old Attendance
                </button>

                <button
                    onClick={() => props.history.push('/attendance/today')}
                    className="add-new-attendance"
                >
                    Today Attendance
                </button>

            </div>
        </div>
    )
}