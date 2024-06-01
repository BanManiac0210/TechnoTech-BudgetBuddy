import React from "react";

const formattedValue = ({value}) => {
    return value.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND', // You can change the currency as needed
        minimumFractionDigits: 0,
    })
}

export default formattedValue