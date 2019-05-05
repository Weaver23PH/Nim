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
            tokens: []
        }
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    handleTokenClick = (rowIndex, index) => {
        let array = this.state.board;
        console.log(array[0][0]);
        let rowInd = rowIndex;
        let tokenInd = index;
        console.log(array[rowInd][tokenInd]);
        array[rowInd].
            this.setState({
                board: array
            })
    }


    handleChange = (event) => {
        let value = event.target.value;
        this.setState(prevState => ({
            rowNum: prevState.rowNum >= 0 ? value : 0
        }))
    };

    board = (event) => {
        event.preventDefault();
        let rows = parseInt(this.state.rowNum);
        if (rows <= 5) {
            let boardArr = [];
            if (this.state.tokens.length == 0) {
                for (let i = 0; i < rows; i++) {
                    let innerArr = [];
                    for (let j = 0; j < (i * 2 + 1); j++) {
                        let keyVal = this.nextId();
                        innerArr.push(<Token key={keyVal} rowIndex={i} index={keyVal} onClick={(rowIndex, index) => this.handleTokenClick(rowIndex, index)} />);
                        this.setState({
                            tokens: [...innerArr]
                        })
                    }
                    let array = this.state.tokens;
                    boardArr.push(<div className={styles.Board_row} key={i}>{innerArr}</div>)
                }
                this.setState({
                    board: [...boardArr]
                });
            }
        }
    }

    render() {
        return (
            <div className={styles.Board_main}>
                {this.state.board.length == 0 && <form>
                    <div className={styles.Board_menu}><label>How many rows?
    <input type="radio" name="rowNum3" value={3} onChange={(event) => this.handleChange(event)}></input><label>3</label>
                        <input type="radio" name="rowNum4" value={4} onChange={(event) => this.handleChange(event)}></input><label>4</label>
                        <input type="radio" name="rowNum5" value={5} onChange={(event) => this.handleChange(event)}></input><label>5</label>
                    </label>
                        <button type="submit" onClick={(event) => this.board(event)}>Build board</button>
                    </div>
                </form>}
                {this.state.board.length > 0 && this.state.board}
            </div>
        )
    }
}
export default Board;