import React from 'react';
import './Definitions.css';

const Definitions = ({ word, meanings, category, lightTheme }) => {
  return (
    <div className='meanings'>
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}
      {word === "" ? (
        <span className='subtitle'>Start by typing a word in Search</span>
      ) : (
        meanings.map((meaning) => (
          meaning.meanings.map((item) => (item.definitions.map((def) => (
            <div className='singleMean' style={{ backgroundColor:lightTheme?'#3b5360':'white', color:lightTheme?'white':'black'}}>
              <b>{def.definition}</b>
              <hr style={{backgroundColor:"black", width:"100%"}}/>
              {
                def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )
              }
              {def.synonyms && (
                <span>
                  <b>Synonyms :</b> {def.synonyms.map((s)=>`${s}, `)}
                </span>
              )}
            </div>
          )
          )))
        ))
      )}
    </div>
  )
}

export default Definitions;