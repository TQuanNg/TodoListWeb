import React from 'react';
import { useTheme } from './ThemeProvider';
import  TabWrapper from './custom-tab/TabWrapper'
//import './theme.css'

export const ThemeWrapper = () => {
    const { theme } = useTheme();

    // <TodoWrapper theme={theme}/> 
    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div> 
                <TabWrapper />
            </div>
        </div>
    )
}