import React from 'react'

const AmazingOffersContainer = () => {
    const data = await new Promise(resolve => setTimeout(() => resolve(res.json()), 180000));
    return (
        <div>AmazingOffersContainer</div>
    )
}

export default AmazingOffersContainer