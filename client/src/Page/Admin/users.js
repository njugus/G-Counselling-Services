import { create } from 'zustand';

export const useStoreUsers = create((set) => ({
    users: [],
    loading: false,
    error: null,
    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch("http://localhost:3000/users");
            const data = await response.json();
            set({ users: data.res, loading: false });
        } catch (error) {
            set({ loading: false, error: error.message });
        }
    }
    // addUser: async (user) => {
    //     try {
    //         const response = await fetch("http://localhost:3000/users", {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(user)
    //         });
    //         const newUser = await response.json();
    //         set((state) => ({ users: [...state.users, newUser] }));
    //     } catch (error) {
    //         set({ error: error.message });
    //     }
    // },
    // updateUser: async (id, updatedUser) => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/users/${id}`, {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(updatedUser)
    //         });
    //         const data = await response.json();
    //         set((state) => ({
    //             users: state.users.map(u =>
    //                 u.id === id ? data : u
    //             )
    //         }));
    //     } catch (error) {
    //         set({ error: error.message });
    //     }
    // },
    // deleteUser: async (id) => {
    //     try {
    //         await fetch(`http://localhost:3000/users/${id}`, {
    //             method: 'DELETE'
    //         });
    //         set((state) => ({
    //             users: state.users.filter(u => u.id !== id)
    //         }));
    //     } catch (error) {
    //         set({ error: error.message });
    //     }
    // }
}));
