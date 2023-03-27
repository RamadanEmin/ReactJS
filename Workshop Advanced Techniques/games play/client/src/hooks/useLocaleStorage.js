import { useState } from 'react';

export const useLocaleStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            const storedData = localStorage.getItem(key);
            return storedData
                ? JSON.parse(storedData)
                : defaultValue;
        } catch (error) {
            console.log(error);
            return defaultValue;
        }
    });

    const setLocalStorageValue = (newValue) => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));

            setValue(newValue);
        } catch (error) {
            console.log(error);
        }
    };

    return [value, setLocalStorageValue];
};