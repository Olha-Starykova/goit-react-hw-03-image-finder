import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class App extends React.Component {

  render() {
      return (
          <div style={{textAlign: "center", display: "block" }}>
              <Loader
                  text-align="center"
                  display="block"
                  type="Puff"
                  color="#00BFFF"
                  height={40}
                  width={40}
                  timeout={3000} //3 secs
              />
          </div>
      ); 
  }
}
;

