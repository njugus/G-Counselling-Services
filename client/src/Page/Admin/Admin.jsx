import './Admin.css'
import Management from './Management'
import Sidebar from './Sidebar'
import Main from './Main'

export function Admin() {
    return (
        <>
        <section className="admin-dashboard">
            <div className="side-div">
            <Sidebar />
            </div>
            <div className="main-div">
            <Main />
            <Management />
            </div>
            
        </section>
        </>
    )
}