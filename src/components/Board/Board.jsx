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
            boardMem: [],
            selected: "0"
        }
    }

    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    handleTokenClick = (rowIndex, index) => {
        let me = event.target;
        $(me).parent().siblings().css("pointer-events", "none");
        let array = this.state.boardMem;
        let rowInd = rowIndex;
        let tokenInd = index;
        if (tokenInd != (array[rowInd].length - 1)) {
            alert("Always remove from the right!")
        } else {
            array[rowInd].splice(tokenInd, 1);
            this.boardRebuild(array);
        }
    }
    releaseRow = (event) => {
        event.preventDefault();
        $("div[class^='Board_row_']").css("pointer-events", "auto");
    }

    handleChange = (event) => {
        let value = event.target.value;
        this.setState(prevState => ({
            rowNum: value,
            selected: value
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
    boardRebuild = (array) => {
        let rows = array.length;
        let boardArr = [];
        for (let i = 0; i < rows; i++) {
            let innerArr = array[i];
            boardArr.push(<div className={styles.Board_row} key={i}>{innerArr}</div>)
        }
                // for(let i= 0;i<this.state.boardMem.length;i++){
                //     if(this.state.boardMem[i].length == 0){
                //         this.state.boardMem.splice(this.state.boardMem[i], 1);
                //         if (this.state.boardMem.length == 0) {
                //             alert("Game over! You lost!")
                //         }
                //     }
                // }
        this.setState({
            board: boardArr,
            boardMem: array
        });
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
                {this.state.board.length == 0 && <div>
                    <div className={styles.depth}>
                        <p>Take as many tokens from one pile as You want.</p><br />
                        <p>Whoever takes the last one, loses.</p><br />
                    </div>
                    <form>
                        <div className={styles.Board_menu}>
                            <label>How many rows?
                            <input type="radio" name="rowNum3" value={3} checked={this.state.selected == "3"} onChange={(event) => this.handleChange(event)}></input><label> 3 </label>
                                <input type="radio" name="rowNum4" value={4} checked={this.state.selected == "4"} onChange={(event) => this.handleChange(event)}></input><label> 4 </label>
                                <input type="radio" name="rowNum5" value={5} checked={this.state.selected == "5"} onChange={(event) => this.handleChange(event)}></input><label> 5 </label>
                            </label>
                            <button type="submit" onClick={(event) => this.boardBuild(event)}>Build board</button>
                        </div>
                    </form></div>}
                <div className={styles.row_wrapper}>{this.state.board}</div>
                {this.state.board.length != 0 && <div className={styles.Board_menu}><button onClick={(event) => this.releaseRow(event)}>End of turn</button></div>}
            </div>
        )
    }
}
export default Board;