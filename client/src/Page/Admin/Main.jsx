import './Main.css';
function Main(){
    return(
        <>
        <div className="dashboard-content">
            <div className="stats">
                <div className="stat-card">
                    <h3>Number of Users</h3>
                    <p>150</p>
                </div>
                <div className="stat-card">
                    <h3>Active Sessions</h3>
                    <p>75</p>
                </div>
                <div className="stat-card">
                    <h3>Upcoming Appointments</h3>
                    <p>20</p>
                </div>
                <div className="stat-card">
                    <h3>Reports Generated</h3>
                    <p>10</p>
                </div>
            </div>
            {/* <UserManagement /> */}
        </div>
        </>
    )
}
export default Main;