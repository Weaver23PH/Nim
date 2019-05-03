import React from 'react';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import styles from "./Token.scss";

class Token extends React.Component {
    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).draggable();
    };


 
    render() {
        return (
            <div className={styles.Token} ></div>

        )
    }
}
export default Token;