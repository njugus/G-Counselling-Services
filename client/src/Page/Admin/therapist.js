import { create }  from 'zustand'

export const useStoreTherapist = create((set) => ({
    counsellors : [],
    loading : false,
    error : null,
    fetchCounsellors: async () => {
        set({ loading: true, error: null });
        try {
            const response = await fetch("http://localhost:3000/counsellors/");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
            set({ counsellors: data.res, loading: false });
        } catch (e) {
            set({ loading: false, error: e.message });
        }
    },
    addCounsellor: async (counsellor) => {
        try {
            const response = await fetch("http://localhost:3000/counsellors", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(counsellor)
            });
            const newCounsellor = await response.json();
            set((state) => ({ counsellors: [...state.counsellors, newCounsellor] }));
        } catch (error) {
            set({ error: error.message });
        }
    },
    updateCounsellor: async (id, updatedCounsellor) => {
        try {
            const response = await fetch(`http://localhost:3000/counsellors/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedCounsellor)
            });
            const data = await response.json();
            set((state) => ({
                counsellors: state.counsellors.map(c =>
                    c.id === id ? data : c
                )
            }));
        } catch (error) {
            set({ error: error.message });
        }
    },
    deleteCounsellor: async (id) => {
        try {
            await fetch(`http://localhost:3000/counsellors/${id}`, {
                method: 'DELETE'
            });
            set((state) => ({
                counsellors: state.counsellors.filter(c => c.id !== id)
            }));
        } catch (error) {
            set({ error: error.message });
        }
    }

}))