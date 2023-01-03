import React from 'react';

const  page = {
  color: "White",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "75%",
  textAlign: "center",
  padding: "5px"
}
const center = {
  textAlign: "center"
};
const padding10 = {
  padding: "10px"
};
const border = {
  border: "2px solid teal",
  borderRadius: "5px",
  maxWidth: "1000px",
  margin: "auto"
}

function App(){
  return (
    <div
      style={page}
    >
      <h1>
        React - Hello World
      </h1>
      <div
        style={border}
      >
        <p
          style={padding10}
        >
          While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.
          The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”
        </p>
        <div>
          <picture
            style={center}
          >
            <source
              media='(max-width: 800px)'
              width="50%"
              alt="Image of the earth"
              srcSet="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.H_fz7Z9X7u5B6dPzDe1sdAAAAA%26pid%3DApi&f=1&ipt=53859a1855928906b89ba1621995e4e159b2764aa08a1fe6c329a20b709a9b70&ipo=images"
            />
            <source
              media='(max-width: 1920px)'
              alt="Image of the earth 2"
              width="50%"
              srcSet = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.4DZvJb-0uBPWQuDn-W9xdQHaFj%26pid%3DApi&f=1&ipt=d9241e814e2c9692654fae5deb40bdd385e7c74f0d914032218704cb50a67999&ipo=images"
            />
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.brookings.edu%2Fwp-content%2Fuploads%2F2021%2F01%2Fshutterstock_1558058690_small.jpg&f=1&nofb=1&ipt=f04850241922224dc633e1ef220560a7a6d9fb1c39bdf209bf6dbe6963fb5aca&ipo=images"
              width="50%"
              alt="Image of the earth"
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
export default App;
