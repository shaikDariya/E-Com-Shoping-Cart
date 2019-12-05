import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const Loading = ({iconStyle}) => (
    <FontAwesomeIcon icon={faSpinner} spin className={iconStyle}/>
);

export default Loading;