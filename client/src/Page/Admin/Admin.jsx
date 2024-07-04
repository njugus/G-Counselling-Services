import './Admin.css'
import Management from './Management'
import Sidebar from './Sidebar'
import Main from './Main'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Connect } from './Connect';


export function Admin() {
    return (

        <section className="admin-dashboard">
            {/* <Connect /> */}
            <div className="side-div">
            <Sidebar />
            </div>
            <div className="main-div">
            <Main />
            <Management />
            </div>
            
        </section>

    )
}