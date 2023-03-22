import React, { useState } from 'react'

const Coins = [
    { id: 1, name: "bitcoin",  price: 25000 },
    { id: 2, name: "Doge",  price: 0.07 },
    { id: 3, name: "ripple",  price: 0.45 }
]
function Crypto() {
    const [coinlist, setCoinlist] = useState([])


    const addingCoin = (coins) => {
        setCoinlist([...coinlist, coins])
    }

    const total = () => {
        let totalPrice = 0;
        for (let i = 0; i < coinlist.length; i++) {
            totalPrice += coinlist[i].price
        }
        return totalPrice
    }
    return (
        <div>
            <h1>list of coins</h1>
            <ul>
                {Coins.map((cryptoCoin, i) => (
                    <li key={i}>
                        {cryptoCoin.name} - ${cryptoCoin.price}{' '}

                        <button onClick={() => addingCoin(cryptoCoin)}>Add to Cart</button>
                    </li>
                ))}
            </ul>


            <ul>
                {coinlist.map((items, i) => (
                    <li key={i}>
                        {items.name} - ${items.price}{' '}

                    </li>
                ))}
            </ul>
            <p>Grand Total : {total()}</p>
        </div>
    )
}

export default Crypto


// sameer@virsoftech.com