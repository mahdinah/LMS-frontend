import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import { AddCircleOutline, ListAlt } from "@material-ui/icons";
import { PieChart, Pie, Cell } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function Admin_Panel() {
  const data = [
    { name: "Section A", value: 150 },
    { name: "Section B", value: 200 },
    { name: "Section C", value: 300 },
  ];

  const COLORS = ["#0088FE", "#f73859", "#FFBB28"];
  const COLORS2 = ["#8884d8", "#82ca9d"];
  const totalStudents = data.reduce(
    (total, section) => total + section.value,
    0
  );
  const data2 = [
    { day: "Monday", attendees: 23 },
    { day: "Tuesday", attendees: 18 },
    { day: "Wednesday", attendees: 25 },
    { day: "Thursday", attendees: 20 },
    { day: "Friday", attendees: 16 },
  ];
  const data3 = [
    { grade: "Grade 1", english: 25, french: 35 },
    { grade: "Grade 2", english: 15, french: 20 },
    { grade: "Grade 3", english: 30, french: 40 },
    { grade: "Grade 4", english: 10, french: 15 },
    { grade: "Grade 5", english: 5, french: 10 },
    { grade: "Grade 6", english: 20, french: 30 },
    { grade: "Grade 7", english: 15, french: 25 },
    { grade: "Grade 8", english: 10, french: 15 },
    { grade: "Grade 9", english: 5, french: 10 },
  ];
  // const data4 = [
  //   { name: 'Student', value: 400 },
  //   { name: 'Admin', value: 300 },
  //   { name: 'Classroom', value: 300 },
  //   { name: 'Section', value: 200 },
  //   { name: 'Attendance', value: 100 },
  // ];
  
  // const COLORS4 = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#B18FFF'];

  const englishTotal = data.reduce((total, { english }) => {
    if (!isNaN(english)) {
      return total + english;
    } else {
      return total;
    }
  }, 0);
  
  const frenchTotal = data.reduce((total, { french }) => {
    if (!isNaN(french)) {
      return total + french;
    } else {
      return total;
    }
  }, 0);

  return (
    <div className="container-lg">
      <div>
        <h2 className="listadmintitle">Admin Dashboard</h2>
      </div>
      <div className="Piecharts">
      <div className="Piechart1">
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#a2a8d3"
            label={({ name, percent }) =>
              `${name} ${Math.round(percent * 100)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="Studentnmbr">
          Total number of students: {totalStudents} (100%)
        </div>
        {data.map((section, index) => (
          <div key={`section-${index}`}>
            {section.name}: {section.value} (
            {Math.round((section.value / totalStudents) * 100)}%)
          </div>
        ))}
        <div>Section A: blue</div>
        <div>Section B: green</div>
        <div>Section C: yellow</div>
        </div>
        <div className="Piechart2">
        <BarChart width={700} height={400} data={data2}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="attendees"
          fill="#8884d8"
          label={({ value }) => `${value} students`}
        />
      </BarChart>
      </div>
        </div>
        <BarChart width={1300} height={400} data={data3}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="grade" />
          <YAxis
            yAxisId="left"
            label={{
              value: "Number of Students",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Number of Students",
              angle: 90,
              position: "insideRight",
            }}
          />
          <Legend />
          <Bar dataKey="english" yAxisId="left" fill="#FF8042" name="English" />
          <Bar dataKey="french" yAxisId="right" fill="#d195f9" name="French" />
        </BarChart>

        <div>Total number of students in English: {englishTotal}</div>
        <div>Total number of students in French: {frenchTotal}</div>
 

        <TableContainer>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Module</TableCell>
        <TableCell>Create</TableCell>
        <TableCell>List</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Student</TableCell>
        <TableCell>
          <Link to="/student/create">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutline />}
            >
              Create
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Link to="/student/list">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ListAlt />}
            >
              List
            </Button>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Admin</TableCell>
        <TableCell>
          <Link to="/admin/create">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutline />}
            >
              Create
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Link to="/admin/list">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ListAlt />}
            >
              List
            </Button>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Classroom</TableCell>
        <TableCell>
          <Link to="/classroom/create">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutline />}
            >
              Create
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Link to="/classroom/list">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ListAlt />}
            >
              List
            </Button>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Section</TableCell>
        <TableCell>
          <Link to="/section/create">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutline />}
            >
              Create
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Link to="/section/list">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ListAlt />}
            >
              List
            </Button>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Attendance</TableCell>
        <TableCell>
          <Link to="/attendance/create">
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutline />}
            >
              Create
            </Button>
          </Link>
        </TableCell>
        <TableCell>
          <Link to="/attendance/list">
            <Button
              variant="contained"
              color="primary"
              startIcon={<ListAlt />}
            >
              List
            </Button>
          </Link>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>
    </div>
  );
}
