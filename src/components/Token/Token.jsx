import React from 'react';
import ReactDOM from 'react-dom';
import { findDOMNode } from 'react-dom';
import styles from "./Token.scss";
import { Tag } from 'antd';

class Token extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            rowIndex: this.props.rowIndex,
            index: this.props.index
        }
    }
    render() {
        return (
            <div className={styles.Token} onClick={this.props.onClick}></div>
        )
    }

}
export default Token;