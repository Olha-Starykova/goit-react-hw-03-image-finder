import React from 'react';
import PropTypes from 'prop-types';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  //other logic
  render() {
      return (
          <div style={{textAlign: "center", display: "block" }}>
              <Loader
                  text-align="center"
                  display="block"
                  type="Puff"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  timeout={10000} //3 secs
              />
          </div>
      );
  }
}