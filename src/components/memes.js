import React, { createRef } from 'react';
import memesdata from '../memesdata';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import Drag from 'react-draggable';
import { exportComponentAsPNG } from 'react-component-export-image';

export default function Memes() {
  const [value, setvalue] = React.useState('https://i.imgflip.com/9ehk.jpg');
  function getImage() {
    const arr = memesdata.data.memes;
    const randomNumber = Math.floor(Math.random() * arr.length);
    setvalue(arr[randomNumber].url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: arr[randomNumber].url,
    }));
  }
  // const tool=Tooltip

  const memeref = createRef();

  const [memevalue, setMeme] = React.useState({
    upperText: '',
    bottomText: '',
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
          
          <input
          data-tooltip-id='my-tooltip'
           data-tooltip-content='Write Upper Text'
            data-for='uptext'
            type='text'
            placeholder='UPPER TEXT'
            name='upperText'
            value={memevalue.upperText}
            onChange={handleChange}></input>
          <input
           data-tooltip-id='my-tooltip'
           data-tooltip-content='Write Bottom Text'
            type='text'
            placeholder='BOTTOM TEXT'
            name='bottomText'
            value={memevalue.bottomText}
            onChange={handleChange}></input>

          <button className='imgbutton' onClick={getImage}   data-tooltip-id='my-tooltip'
           data-tooltip-content='Click to Get New Meme'>
            GET A NEW IMAGE !!
          </button>
        </div>
          <Tooltip place='bottom' id='my-tooltip' />

        <div ref={memeref}  className='memediv'>
          <img  className='memeimage' src={value} />
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
