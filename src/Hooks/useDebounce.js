import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDeboucedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDeboucedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
