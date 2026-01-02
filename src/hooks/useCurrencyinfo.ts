import {use, useEffect,useState} from 'react';

function useCurrencyInfo(currency) {
    const [data, setdata] = useState(null);
useEffect(() => {
    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
    .then(response => response.json())
    .then(Response=> {
        setdata(Response[currency]);
    })
    .catch(error => {
        console.error('Error fetching currency data:', error);
    });

}, [currency]);

}