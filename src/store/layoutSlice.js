import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: {
        sidebarOpen: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        },
    },
});

export const { toggleSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;