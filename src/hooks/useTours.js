import { useEffect, useState } from 'react';

const useTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        fetch('https://ghurbo-tourism.herokuapp.com/tours' || 'fake.json')
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])

    return {tours};
};

export default useTours;