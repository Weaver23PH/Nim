import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Board.scss";
import Token from "../Token/Token";

class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            rowNum: 0,
            board: [],
            tokens_1: [null, null, null, <Token key={this.nextId} />, null, null, null],
            tokens_2: [null, null, <Token />, <Token />, <Token />, null, null],
            tokens_3: [null, <Token />, <Token />, <Token />, <Token />, <Token />, null],
            tokens_4: [<Token />, <Token />, <Token />, <Token />, <Token />, <Token />, <Token />]
        }
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    handleChange = (event) => {
        this.setState({
            rowNum: event.target.value
        })
    };

    board = (rows) => {
        let boardArr = [];
        let i;
        for (i = 0; i < rows; i++) {
            let innerArr = [];
            for (let j = 0; j < (i * 2 + 1); j++) {
                innerArr.push(<Token key={i+j} />);
            }
            boardArr.push(<div className={styles.Board_row} key={i + "_row"}>{innerArr}</div>)
        }
        console.log(boardArr);
        this.state.board = boardArr;
    }

    render() {
        return (
            <div className={styles.Board_main}>
                <div><label>How many rows?
    <input type="number" placeholder="number of rows" name="rowNum" value={this.state.rowNum} onChange={(event) => this.handleChange(event)}></input>
                </label>
                    <button onClick={this.board(this.state.rowNum)}>Build board</button>
                </div>
                {this.state.board}
            </div>
        )
    }
}
export default Board;