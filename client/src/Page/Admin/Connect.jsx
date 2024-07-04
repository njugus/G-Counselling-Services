import Management from "./Management"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Therapist from "./Therapist";
import './Connect.css'
import Main from "./Main";

export function Connect(){
    return(
        <>
        <BrowserRouter>
        <div className = "dashboard">
        <Sidebar />
        <div className="main-content">
                    <Main />
                    <Routes>
                        <Route path="/Users" element={<Management />} />
                        <Route path="/Therapist" element={<Therapist />} />
                        {/* <Route path="/Appointments" element={<Appointments />} />
                        <Route path="/Reports" element={<Reports />} />
                        <Route path="/Settings" element={<Settings />} /> */}
                        
                    </Routes>
                </div>

            </div>

        </BrowserRouter>
        </>
    )
}

