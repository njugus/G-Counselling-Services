import React, { useEffect, useState } from 'react';
import { useStoreTherapist } from './therapist';
import './Management.css';

function Therapist() {
    const { counsellors, fetchCounsellors, addCounsellor, updateCounsellor, deleteCounsellor } = useStoreTherapist();
    const [newCounsellor, setNewCounsellor] = useState({ name: '', title: '', qualifications: '' });

    useEffect(() => {
        const fetchData = async() => {
            await fetchCounsellors()}
            fetchData();
    }, [fetchCounsellors]);

    const handleAdd = () => {
        addCounsellor(newCounsellor);
        setNewCounsellor({ name: '', title: '', qualifications: '' });
    };

    return (
        <>
            <section className="Management-section">
                <h1>Counsellor Management</h1>
                <div className="management-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Title</th>
                                <th>Qualifications</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {counsellors.map(counsellor => (
                                <tr key={counsellor.id}>
                                    <td>{counsellor.name}</td>
                                    <td>{counsellor.title}</td>
                                    <td>{counsellor.qualifications}</td>
                                    <td>
                                        <button className="button edit" onClick={() => updateCounsellor(counsellor.id, { ...counsellor, name: 'Updated Name' })}>Edit</button>
                                        <button className="button delete" onClick={() => deleteCounsellor(counsellor.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="add-counsellor">
                    <input
                        type="text"
                        placeholder="Name"
                        value={newCounsellor.name}
                        onChange={(e) => setNewCounsellor({ ...newCounsellor, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        value={newCounsellor.title}
                        onChange={(e) => setNewCounsellor({ ...newCounsellor, title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Qualifications"
                        value={newCounsellor.qualifications}
                        onChange={(e) => setNewCounsellor({ ...newCounsellor, qualifications: e.target.value })}
                    />
                    <button className="button add" onClick={handleAdd}>Add Counsellor</button>
                </div>
            </section>
        </>
    );
}

export default Therapist;
