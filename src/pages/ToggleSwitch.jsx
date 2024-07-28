import React from 'react';

const ToggleSwitch = ({ checked, onChange }) => {
    return (
        <label className="inline-flex relative items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
            <div className=" w-20 h-10 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-400">
                <div className={`absolute top-0.5 left-0.5 w-9 h-9 bg-white border border-gray-300 rounded-full transition-transform ${checked ? 'transform translate-x-full' : ''}`}></div>
            </div>
        </label>
    );
};

export default ToggleSwitch;

