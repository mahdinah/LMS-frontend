import React, { useState, Link,useEffect } from "react";
import API from "../../../api";
import Swal from "sweetalert2";
import Classroom_List from '../../../Components/Classrooms_List';
import Classroom_Section from '../../../Components/Classroom_Section';
export default function CreateAttendance() {
    const [state, updateState] = useState({
        students: [],
        name: "",
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

    const handleChangee = e => {
        let { name, value } = e.target;
        setState({ [name]: value });
    }

    const reqBody = {
        fname: state.name,
        classroom_id: state.classroom_id,
        section_id: state.section_id,
        gender: state.gender
    };

    const fetchdata = async () => {
        await API.post(`stu-sec-class`)
            .then(res => {
                let result = res.data.data;

                if (state.name != "") {
                    result = result.filter(r =>
                        (((r.fname + " " + r.lname).slice(0, state.name.length)).toLowerCase() == (state.name).toLowerCase())
                        ||
                        ((r.lname.slice(0, state.name.length)).toLowerCase() == (state.name).toLowerCase())
                    );
                }
                if (state.classroom_id != "") {
                    result = result.filter(r => r.classroom_id == state.classroom_id);
                }
                if (state.section_id != "") {
                    result = result.filter(r => r.section_id == state.section_id);
                }
                if (state.gender != "") {
                    result = result.filter(r => r.gender == state.gender);
                }

                setState({ students: result });
            });
    }

    useEffect(() => {
        fetchdata(reqBody);
    }, [JSON.stringify(reqBody)]);






  const [description, setDescription] = useState("");
  const [studentId, setStudentId] = useState("");
  const [sectionId, setSectionId] = useState("");
  const attendsuccess = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Attendance registered successfully ",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const attenderror = () => {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Error, Missing Informations",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!description || !studentId || !sectionId) {
      // check if all data fields are entered
      attenderror(); // call attenderror function to display error message
      return;
    }

    const data = {
      description: description,
      student_id: studentId,
      section_id: sectionId,
    };

    await API.post("/attendance", data)
      .then((response) => {
        console.log(response);
        attendsuccess(); // call attendsuccess function to display success message
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "description":
        setDescription(value);
        break;
      case "studentId":
        setStudentId(value);
        break;
      case "sectionId":
        setSectionId(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container-lg">
      <h2 className="listadmintitle">Create Attendance</h2>
      <form className="attform" onSubmit={handleSubmit}>
        <div>
          <label className="listo">Description: </label>
          <select
            name="description"
            onChange={handleChange}
            className="selectodesc"
          >
            <option value="Present">Present</option>
            <option value="Online">Online</option>
            <option value="Late">Late</option>
            <option value="Absent">Absent</option>
          </select>
          <div className="divrowselect">
                    <Classroom_List
                        name="classroom_id"
                        id={state.classroom_id}
                        onChange={handleChangee}
                        className="filterClass"
                    />

                    <Classroom_Section
                        name="section_id"
                        id={state.classroom_id}
                        idsec={state.section_id}
                        onChange={handleChangee}
                        className="filterClass"
                    />
                </div>

        </div>
        <div>
          <label className="listo">Student ID: </label>
          <input
            className="impodence"
            type="text"
            name="studentId"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="listo">Section ID: </label>
          <input
            className="impodence"
            type="text"
            name="sectionId"
            onChange={handleChange}
          />
        </div>
        <button className="bootandence" type="submit">
          Create Attendance
        </button>
      </form>



      <div className="navit" id="navbar">
        <nav className="navit__container">
          <a href="../Login" className="nav__link nav__logout">
            <i className="bx bx-log-out bx-tada nav__icon"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>





    </div>
  );
}
