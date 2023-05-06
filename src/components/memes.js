import React, { createRef } from 'react';
import {initialData} from '../memesdata'
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Drag from 'react-draggable';
import { exportComponentAsPNG } from 'react-component-export-image';



export default function Memes() {
  
  // FOR GENERATING RANDOM MEME
  const [value, setvalue] = React.useState('https://i.imgflip.com/9ehk.jpg');
  function getImage() {
    const arr = initialData.data.memes;
    const randomNumber = Math.floor(Math.random() * arr.length);
    setvalue(arr[randomNumber].url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: arr[randomNumber].url,
    }));
  }

  const memeref = createRef();

  //EDITING THE MEME BY ADDING UPPER TEXT AND BOTTOM TEXT
  const [memevalue, setMeme] = React.useState({
    upperText: 'JUST...',
    bottomText: 'MAKE A MEME',
    randommeme: 'https://i.imgflip.com/1ur9b0.jpg ',
  });
  
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div>
        <div className='text-editor'>
          // INPUT FOR THE UPPER TEXT
          <input
          data-tooltip-id='my-tooltip'
           data-tooltip-content='Write Upper Text'
            data-for='uptext'
            type='text'
            placeholder='UPPER TEXT'
            name='upperText'
            value={memevalue.upperText}
            onChange={handleChange}></input>

            //INPUT FOR THE LOWER TEXT
          <input
           data-tooltip-id='my-tooltip'
           data-tooltip-content='Write Bottom Text'
            type='text'
            placeholder='BOTTOM TEXT'
            name='bottomText'
            value={memevalue.bottomText}
            onChange={handleChange}></input>

            //BUTTON FOR GETTING THE NEW IMAGE
          <button className='imgbutton' onClick={getImage}   data-tooltip-id='my-tooltip'
           data-tooltip-content='Click to Get New Meme'>
            GET A NEW IMAGE !!
          </button>
        </div>
          <Tooltip place='bottom' id='my-tooltip' />
            
            
            // FOR EDITING THE MEME IMG
        <div ref={memeref}  className='memediv'>
          <img alt="img"  className='memeimage' src={value} />
          <Drag >
            <h2 className='memetext top' data-tooltip-id='my-tooltip'
           data-tooltip-content='Double Click To Move Text'>{memevalue.upperText}</h2>
          </Drag>
          <Drag>
            <h2  data-tooltip-id='my-tooltip'
           data-tooltip-content='Double Click To Move Text' className='memetext bottom' id='btext' >
              {memevalue.bottomText}
            </h2>
          </Drag>

            //DOWNLOAD BUTTON 
        </div>
        <button
          className='download-button'
          onClick={(e) => exportComponentAsPNG(memeref)} data-tooltip-id='my-tooltip'
          data-tooltip-content='Download Your Meme'>
          DOWNLOAD
        </button>
      </div>
    </main>
  );
}
