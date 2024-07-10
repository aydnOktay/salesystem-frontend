import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
    name: 'layout',
    initialState: { // initial status 
        sidebarOpen: false, // side menu is initially closed
    },
    reducers: { // reductions
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen; // switches off if on, switches on if off
        },
    },
});

export const { toggleSidebar } = layoutSlice.actions;
export default layoutSlice.reducer;