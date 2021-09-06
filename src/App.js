import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import Uploadform from './comps/uploadform';

function App() {
  const [selectedImg, setselectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <Uploadform/>
      <ImageGrid setselectedImg = {setselectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setselectedImg={setselectedImg} /> }
    </div>
  );
}

export default App;
