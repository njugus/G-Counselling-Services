import { create } from 'zustand';

export const Store = create((set) => ({
    counsellors: [],
    loading: null,
    error: null,
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
    }
}));
