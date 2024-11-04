import React, {useState} from 'react';
import { useTheme } from '../ThemeProvider';

export const Tab = ({tabContent, onChange}) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const { theme, handleToggleTheme } = useTheme();

    const handleTabClick = (currentIndex) => {
        setCurrentTabIndex(currentIndex)
        onChange(currentIndex); // parent child relationship, for purpose of side effect
    }

    return (
        <div className="TabWrapper" theme={theme}>
            <h1>To Do List App</h1>
            <button onClick={handleToggleTheme} className='todo-btn'> Change Theme </button> 

            <div className='TabNavigation'> 
                {tabContent.map((tabItem, index) => (
                    <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} // dynamic className for active tab for css
                     key={tabItem.label} onClick={() => handleTabClick(index)}>
                        <span className='TabLabel'> {tabItem.label} </span>
                    </div>
                ))}
            </div>
            <div className="TabContent"> {/* if index valid then load its content*/}
                {tabContent[currentTabIndex] && tabContent[currentTabIndex].content}
            </div>
        </div>
    )
}


// onClick={() => handleTabClick(index)} // only run when click
// onClick={handleTabClick(index)} // will run immediately when rendering => not what you want