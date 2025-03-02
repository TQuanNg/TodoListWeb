import React from 'react';
import { useTheme } from './ThemeProvider';
import  TabWrapper from './custom-tab/TabWrapper'

export const ThemeWrapper = () => {
    const { theme } = useTheme();

    return (
        <div className='light-dark-mode' data-theme={theme}>
            <div> 
                <TabWrapper />
            </div>
        </div>
    )
}