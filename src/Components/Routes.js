import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import ProtectedRoute from "../utils/ProtectedRoute";
// import Login from '../Pages/Login/Login';
// import Header from './Header';
import Sidebar from './Sidebar';


import Profile from '../Pages/Admin_Panel/Profile';
import Admin_Panel from '../Pages/Admin_Panel/Admin_Panel';

import Create_Student from '../Pages/Admin_Panel/Manage_Student/Create_Student';
import List_Student from '../Pages/Admin_Panel/Manage_Student/List_Student';
import Info_Student from '../Pages/Admin_Panel/Manage_Student/Info_Student';
import Edit_Student from '../Pages/Admin_Panel/Manage_Student/Edit_Student';

import Create_Admin from '../Pages/Admin_Panel/Manage_Admin/Create_Admin';
import List_Admin from '../Pages/Admin_Panel/Manage_Admin/List_Admin';
import Edit_Admin from '../Pages/Admin_Panel/Manage_Admin/Edit_Admin';

import Create_Classroom from '../Pages/Admin_Panel/Manage_Classroom/Create_Classroom';
import List_Classroom from '../Pages/Admin_Panel/Manage_Classroom/List_Classroom';
import Edit_Classroom from '../Pages/Admin_Panel/Manage_Classroom/Edit_Classroom';

import Create_Section from '../Pages/Admin_Panel/Manage_Section/Create_Section';
import List_Section from '../Pages/Admin_Panel/Manage_Section/List_Section';
import Edit_Section from '../Pages/Admin_Panel/Manage_Section/Edit_Section';

import Attendance from '../Pages/Admin_Panel/Manage_Attendance/Attendance';
import Today_Attendance from '../Pages/Admin_Panel/Manage_Attendance/Today_Attendance';
import Old_Attendance from '../Pages/Admin_Panel/Manage_Attendance/Old_Attendance';

import Personal_Statistics from '../Pages/Admin_Panel/Statistics/Personal_Statistics';
import Total_Statistics from '../Pages/Admin_Panel/Statistics/Total_Statistics';

export default function Routes() {
    return (
        <div>
            <Sidebar />
            <Switch>

             
            {/* <Route path="/Login" component={Login} /> */}
                <Route path="/profile" component={Profile} />
                <Route path="/admin/panel" component={Admin_Panel} />

                <Route path="/admin/create" component={Create_Admin} />
                <Route path="/admin/list" component={List_Admin} />
                <Route path="/admin/edit/:id" component={Edit_Admin} />

                <Route path="/student/create" component={Create_Student} />
                <Route path="/student/list" component={List_Student} />
                <Route path="/student/info/:id" component={Info_Student} />
                <Route path="/student/edit/:id" component={Edit_Student} />

                <Route path="/classroom/create" component={Create_Classroom} />
                <Route path="/classroom/list" component={List_Classroom} />
                <Route path="/classroom/edit/:id" component={Edit_Classroom} />

                <Route path="/section/create" component={Create_Section} />
                <Route path="/section/list" component={List_Section} />
                <Route path="/section/edit/:id" component={Edit_Section} />

                <Route path="/attendance/panel" component={Attendance} />
                <Route path="/attendance/today" component={Today_Attendance} />
                <Route path="/attendance/old" component={Old_Attendance} />

                <Route path="/statistics/personal" component={Personal_Statistics} />
                <Route path="/statistics/total" component={Total_Statistics} />

            </Switch>
        </div>
    );
}