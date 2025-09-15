import React from 'react'
async function getData() {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return { message: 'slider' }
}
const Slider = async () => {
    const data = await getData();
    return (
        <div className='text-center'>Slider</div>
    )
}

export default Slider