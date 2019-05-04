import React from 'react';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import styles from "./Token.scss";

class Token extends React.Component {

    render() {
        return (
            <div className={styles.Token} ></div>

        )
    }
}
export default Token;