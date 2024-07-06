import React, { useEffect, useState } from 'react';
import { useStoreUsers } from './users';
import './Management.css';

function Management() {
    const { users, fetchUsers, addUser, updateUser, deleteUser } = useStoreUsers();
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: '' });

    useEffect(() => {
        const fetchData = async() => {
            await fetchUsers()};
            fetchData();
    }, [fetchUsers]);

    const handleAdd = () => {
        addUser(newUser);
        setNewUser({ name: '', email: '', password: '', role: '' });
    };

    return (
        <>
            <section className="Management-section">
                <h1>User Management</h1>
                <div className="management-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        {/* <button className="button edit" onClick={() => updateUser(user.id, { ...user, name: 'Updated Name' })}>Edit</button> */}
                                        {/* <button className="button delete" onClick={() => deleteUser(user.id)}>Delete</button> */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="add-user">
                    <input
                        type="text"
                        placeholder="Name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={newUser.password}
                        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Role"
                        value={newUser.role}
                        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    />
                    <button className="button add" onClick={handleAdd} style={{backgroundColor: "blue", color: "white"}}>Add User</button>
                </div>
            </section>
        </>
    );
}

export default Management;
