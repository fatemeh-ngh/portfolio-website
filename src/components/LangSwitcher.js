import React from 'react';

const LangSwitcher = () => {
    return (
        <div>
            <select placeholder='choose your language'>
                <option value="eng">English</option>
                <option value="fa">فارسی</option>
            </select>
        </div>
    );
};

export default LangSwitcher;