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
    onClick= ()=>{
        this.props.onClick(this.state.rowIndex, this.state.index);
    }
    render() {
        return (
            <div className={styles.Token} onClick={this.onClick}></div>
        )
    }

}
export default Token;