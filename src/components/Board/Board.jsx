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
            tokens: [],
            boardMem: []
        }
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    handleTokenClick = (rowIndex, index) => {
        let array = this.state.boardMem;
        let rowInd = rowIndex;
        let tokenInd = index;
        console.log(array[rowInd][tokenInd]);
        array[rowInd].splice(tokenInd,1);
        this.setState({
            boardMem: array
        })
    }


    handleChange = (event) => {
        let value = event.target.value;
        this.setState(prevState => ({
            rowNum: prevState.rowNum >= 0 ? value : 0
        }))
    };

    boardBuild = (event) => {
        event.preventDefault();
        let rows = parseInt(this.state.rowNum);
        let boardMemory = [];
        let boardArr = [];
        if (this.state.tokens.length == 0) {
            for (let i = 0; i < rows; i++) {
                let innerArr = [];
                let array = this.tokenBuild(i, innerArr);
                boardArr.push(<div className={styles.Board_row} key={i}>{array}</div>)
                boardMemory.push(array);
            }
            this.setState({
                board: [...boardArr],
                boardMem: [...boardMemory]
            });
        }
    }
    tokenBuild = (i, array) => {
        for (let j = 0; j < (i * 2 + 1); j++) {
            let keyVal = this.nextId();
            array.push(<Token key={keyVal} rowIndex={i} index={j} onClick={(rowIndex, index) => this.handleTokenClick(rowIndex, index)} />);
            this.setState({
                tokens: [...array]
            })
        }
        return array;
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
                        <button type="submit" onClick={(event) => this.boardBuild(event)}>Build board</button>
                    </div>
                </form>}
                {this.state.board.length > 0 && this.state.board}
            </div>
        )
    }
}
export default Board;