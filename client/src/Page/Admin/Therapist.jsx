import './Management.css'
function Therapist() {
    return(
        <>
        <section className="Management-section">
            <h1>Counsellor Management</h1>
            <div className="management-table">
        <table>
        <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>Counsellor</td>
            <td>
                <button class="button edit">Edit</button>
                <button class="button delete">Delete</button>
            </td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>Counsellor</td>
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
export default Therapist;