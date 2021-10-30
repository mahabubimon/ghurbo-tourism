import { useEffect, useState } from 'react';

const useTours = () => {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        //  if server not working, please try with fake data -- "fakeData.json"
        fetch("https://ghurbo-tourism.herokuapp.com/tours")
        .then(res => res.json())
        .then(data => setTours(data))
    }, [])

    return {tours};
};

export default useTours;