import React from 'react';
import '../../Css/Profile.css'
import { PieChart } from "react-minimal-pie-chart";

export default class App extends React.Component {
  
  render() {
    let data = [
      { title: "One", value: 1, color: "#FFC074" },
      { title: "Two", value: 2, color: "#A2D2FF" },
      { title: "Three", value: 3, color: "#FF9292" },
      { title: "Four", value: 4, color: "#FFC074" },
      { title: "Five", value: 5, color: "#A2D2FF" },

    ];
    return (
      <div style={{backgroundColor:"#DAE5D0"}} className="App">
      <h1 class="heading">Student Chart </h1>
        <PieChart
          animate
          animationDuration={40}
          animationEasing="ease-in"
          center={[50, 50]}
          data={data}
          lineWidth={15}
          lengthAngle={360}
          paddingAngle={0}
          radius={50}
          rounded
          startAngle={0}
          viewBoxSize={[100, 100]}
          labelStyle={{
            fontSize: "6px",
            fontColor: "FFFFFA",
            fontWeight: "500",
            fontFamily: "monospace"
          }}
          label={(data) => data.dataEntry.title}
          labelPosition={70}
        />
      </div>
    );
  }
}