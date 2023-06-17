import React, { useState } from 'react';
export default function AboutCard() {
  const [Mystyle, setMYytyle] = useState({
    backgroundColor: 'black',
    color: 'white',
    border: '2px solid white',
    p: {
      textcolor: 'white'
    }
  })
  const [btntext, setBtnText] = useState("Dark mode")

  const togelStyle = () => {
    if (Mystyle.color === 'black') {
      setMYytyle({
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid white'
      })
      setBtnText("Ligth mode")
    }
    else {
      setMYytyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Dark mode")
    }
  }
  return (
    <>
      <button onClick={togelStyle} type='button' className='btn btn-primary'>{btntext}</button>
      <div className="container1 m-3" style={Mystyle}>
        <div className="card m-3" style={{ ...Mystyle, width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card m-3" style={{ ...Mystyle, width: '18rem' }}>
          <img src="logo.svg" className="card-img-top" alt=".0.." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card m-3" style={{ ...Mystyle, width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
        <div className="card m-3" style={{ ...Mystyle, width: '18rem' }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  );
}
