import React from 'react';
import SearchBar from './SearchBar';
import {copySelectedEmoji} from '../helpers.js';


function Header(props) {
    const {spinImage} = props.useSpinImage;

    const setSearchString = props.useSearchString.setSearchString;
    return (
        <div className="header">
            <div style={{ textAlign: 'center' }}>
                <div className="imageSpinnerContainer" onClick={()=>{copySelectedEmoji() }}>
                    <div className="imageSpinner">
                        {spinImage}
                    </div>
                </div>
            </div>
            <SearchBar
                useSearchString={
                    {
                        setSearchString: setSearchString
                    }
                }
            />
        </div>
    )
}



export default Header;