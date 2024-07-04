import './Sidebar.css';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <>
        <section className="Sidebar">
            <ul className="sidebar-links" style={{listStyleType: "none"}}>
                <h1><Link to = "/">Admin Dashboard</Link></h1>
                <li ><Link to="/Users">Manage Users</Link></li>
                <li><Link to="/Therapist">Manage Cousellors</Link></li>
                <li><Link to="/Appointments">Manage Appointments</Link></li>
                <li><Link>Reports</Link></li>
                <li><Link>Settings</Link></li>
            </ul>
        </section>
        </>
    )
}

export default Sidebar;