import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Board.scss";
import Token from "../Token/Token";

class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tokens_1: [null, null, null, 1, null, null, null],
            tokens_2: [null, null, 1, 1, 1, null, null],
            tokens_3: [null, 1, 1, 1, 1, 1, null],
            tokens_4: [1, 1, 1, 1, 1, 1, 1]
        }
    }
    eachToken = () => {
        return <Token />
    }

    render() {
        return (
            <div className={styles.Board_main}>
                <div className={styles.Board_row}> {this.state.tokens_1.forEach(tokenNum => {
                    (tokenNum!=null)&&<Token/> })} </div>
                 <div className={styles.Board_row}> {this.state.tokens_2.forEach(tokenNum => {
                    (tokenNum!=null)&&<Token/> })} </div>
                <div className={styles.Board_row}> {this.state.tokens_3.forEach(tokenNum => {
                    (tokenNum!=null)&&<Token/> })} </div>
                 <div className={styles.Board_row}> {this.state.tokens_4.forEach(tokenNum => {
                     (tokenNum!=null)&&<Token/> })} </div>
                </div>
                )
            }
        }
export default Board;