import React from 'react';
import { faUpLong, faDownLong } from '@fortawesome/free-solid-svg-icons';

export const Theme = ({}) => {
    return (
        <div>
            <FontAwesomeIcon icon={faCircle} />
            <button> Light Mode </button>
            <FontAwesomeIcon icon={faCircle} />
            <button> Dark Mode</button>
        </div>
    )
}

