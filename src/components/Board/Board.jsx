import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Board.scss";
import Token from "../Token/Token";

class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tokens_1: [null, null, null, <Token id= {this.nextId}/>, null, null, null],
            tokens_2: [null, null, <Token/>, <Token/>, <Token/>, null, null],
            tokens_3: [null, <Token/>, <Token/>, <Token/>, <Token/>, <Token/>, null],
            tokens_4: [<Token/>, <Token/>, <Token/>, <Token/>, <Token/>, <Token/>, <Token/>]
        }
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    render() {
        return (
            <div className={styles.Board_main}>
                <div className={styles.Board_row}> {this.state.tokens_1} </div>
                <div className={styles.Board_row}> {this.state.tokens_2} </div>
                <div className={styles.Board_row}> {this.state.tokens_3} </div>
                <div className={styles.Board_row}> {this.state.tokens_4} </div>
            </div>
        )
    }
}
export default Board;