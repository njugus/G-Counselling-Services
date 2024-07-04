import './Management.css'
function Management() {
    return(
        <>
        <section className="Management-section">
            <h1>User Management</h1>
            <div className="management-table">
        <table>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>Admin</td>
            <td>
                <button class="button edit">Edit</button>
                <button class="button delete">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>User</td>
            <td>
                <button class="button edit">Edit</button>
                <button class="button delete">Delete</button>
            </td>
        </tr>
    </table>
            </div>
        </section>

        </>
    )
}
export default Management;