import React, {useState} from 'react'

export const AboutWrapper = () => {
    const [tabIndex, setTabIndex] = useState(0)

    const handleOnClick = (index) =>  {
        setTabIndex(index)
        onchange(index)
    }


    return (
        <div className='AboutWrapper'>
            <div className='AboutHeader'>
                <h1> Tan Nguyen </h1>
                <p>Senior in ASU</p>
                <p>Email: ntminhquan2106@gmail.com</p>
            </div>
            <div className='AboutTab'>

                

            </div>
            <h2>Game that I am playing</h2>
            <div className='row'>
                <div className='column'>
                    <img src="C:\Program Files\Genshin Impact\Genshin Impact game\ScreenShot\20240821022854.png" ></img>
                    <h2>Genshin Impact</h2>
                </div>
                <div className='column'>
                    <img src="C:\Program Files\Genshin Impact\Genshin Impact game\ScreenShot\20240821022854.png" ></img>
                    <h2>League of Legend</h2>
                </div>
                <div className='column'>
                    <img src="C:\Program Files\Genshin Impact\Genshin Impact game\ScreenShot\20240821022854.png" ></img>
                    <h2>GTA V</h2>
                </div>
            </div>
        </div>
    )
}