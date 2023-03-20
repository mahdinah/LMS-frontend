import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';

import IN from '../../../Components/Input';
import Gender_Radio from '../../../Components/Gender_Radio';
import Classroom_List from '../../../Components/Classrooms_List';
import Classroom_Section from '../../../Components/Classroom_Section';

export default function List_Student(props) {

    const [state, updateState] = useState({
        students: [],
        name: "",
        pnumber: "",
        classroom_id: "",
        section_id: "",
        gender: ""
    });

    const setState = (nextState) => {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }));
    }

    const handleChange = e => {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    const reqBody = {
        fname: state.name,
        pnumber: state.pnumber,
        classroom_id: state.classroom_id,
        section_id: state.section_id,
        gender: state.gender
    };

    const fetchdata = async () => {
        await API.post(`stu-sec-class`)
            .then(res => {
                let result = res.data.data;

                if (state.name !== "") {
                    result = result.filter(r =>
                        (((r.fname + " " + r.lname).slice(0, state.name.length)).toLowerCase() === (state.name).toLowerCase())
                        ||
                        ((r.lname.slice(0, state.name.length)).toLowerCase() === (state.name).toLowerCase())
                    );
                }
                if (state.pnumber !== "") {
                    result = result.filter(r => r.pnumber.toLowerCase().startsWith(state.pnumber.toLowerCase()));
                }
                if (state.classroom_id !== "") {
                    result = result.filter(r => r.classroom_id === state.classroom_id);
                }
                if (state.section_id !== "") {
                    result = result.filter(r => r.section_id === state.section_id);
                }
                if (state.gender !== "") {
                    result = result.filter(r => r.gender === state.gender);
                }

                setState({ students: result });
            });
    }

    useEffect(() => {
        fetchdata(reqBody);
    }, [JSON.stringify(reqBody)]);
    return (
        <div className="container-lg">
            <div className="table-title">
                <div><h2 className="listadmintitle">LIST OF STUDENTS</h2></div>
                <button onClick={() => props.history.push('/student/create')} className="add-new"><i className="fa fa-plus"></i></button>
            </div>
            <div className="divFilterS">
                <div>
                    <IN
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                        placeholder="Search"
                        className="inputSearchSpan"
                    />
                    <span className="searchspan">
                        <i className="fa fa-search"></i>
                    </span>
                </div>

                <div className="divrowselect">
                    <Classroom_List
                        name="classroom_id"
                        id={state.classroom_id}
                        onChange={handleChange}
                        className="filterClass"
                    />

                    <Classroom_Section
                        name="section_id"
                        id={state.classroom_id}
                        idsec={state.section_id}
                        onChange={handleChange}
                        className="filterClass"
                    />
                </div>

                <Gender_Radio
                    onChange={handleChange}
                    check={state.gender}
                    className="malefemalename"
                    classFlexRadio="classFlexRadio"
                />

            </div>

            <div className="flexRowStu">
                {state.students.map(student => (
                    <Link onClick={() => props.history.push(`/student/info/${student.id}`)}>
                        <div key={student.id} class="container mt-5 d-flex justify-content-center widthAndDiv">
                            <div class="card p-3">
                                <div class="d-flex align-items-center">
                                    <div class="image">
                                        <img src={`http://127.0.0.1:8000/api/image/${student.image}`} class="rounded widthheightimg" />
                                    </div>
                                    <div class="ml-3 w-100">
                                        <h4 class="mb-0 mt-0">{student.fname}</h4> <h5>{student.lname}</h5>
                                        <div class="d-flex flex-row"> <span class="articles">{student.classroom_name}</span> <span class="number1"> &nbsp; {student.section_name}</span> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div >
        </div >
    );
}