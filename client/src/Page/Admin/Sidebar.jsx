import './Sidebar.css';
function Sidebar() {
    return (
        <>
        <section className="Sidebar">
            <ul className="sidebar-links">
                <h1>Admin Dashboard</h1>
                <li>Manage Users</li>
                <li>Manage Cousellors</li>
                <li>Manage Appointments</li>
                <li>Reports</li>
                <li>Settings</li>
            </ul>
        </section>
        </>
    )
}

export default Sidebar;