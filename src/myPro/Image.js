import React from 'react'
import ReactDOM from 'react-dom'
import './Image.css'

const name = "Ram"
const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/250/300"
const img3 = "https://picsum.photos/300/300"
const links = "https://youtube.com"

ReactDOM.render(
    <>
        <h1 className="heading">My Name is {name}</h1>
        <div className="images">
            <img src={img1} alt="Random" />
            <img src={img2} alt="Random" />
            <a href={links}>
                <img src={img3} alt="Random" />
            </a>
        </div>
    </>,
    document.getElementById('root')
)