import React from 'react'
import useTheme from '../contexts/theme';

export default function Theme_button() {
    const {theme , light_mode , dark_mode , toggle_mode} = useTheme()


    const switch_theme = () => {
       // toggle_mode()

       if(theme === "light"){
        dark_mode()
       }
       else{
        light_mode()
       }

        // const is_checkbox_checked = e.currentTarget.checked
        // if(is_checkbox_checked){
        //     dark_mode()
        // }
        // else{
        //     light_mode()
        // }

    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={switch_theme}
                checked={theme === "dark"} //checkbox check kab ho? jab theme dark ho!
                
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}