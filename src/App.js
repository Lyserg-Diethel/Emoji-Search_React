import './App.css';
import React from "react";
import { useState } from 'react';

import Header from './components/Header';
import EmojiContainer from './components/EmojiContainer.js';

import emojiList from "./emojiList.json"

function App() {

  const [searchString, setSearchString] = useState("");
  const [emojiArr, setEmojiArr] = useState(emojiList);
  const [spinImage, setSpinImage] = useState('X');

  return (
    
    <div className="App">
      <Header 
        useSpinImage={
          {
            spinImage:spinImage
          }
        }
        useSearchString={
          {
            setSearchString: setSearchString
          }
        } 
      />

      <EmojiContainer 
        useSpinImage={
          {
            setSpinImage:setSpinImage
          }
        }
        useFilteredEmojis={
          { 
            emojiArr: emojiArr
          }
        }
        useSearchString={
          {
            searchString: searchString
          }
        }  
      />
      
    </div>
  );
}

export default App;
