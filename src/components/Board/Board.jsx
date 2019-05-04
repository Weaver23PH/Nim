import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./Board.scss";
import Token from "../Token/Token";

class Board extends React.Component {
    constructor(props) {
        super();
        this.state = {
            rowNum: 0,
            board: []
        }
    }
    nextId() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    }

    handleChange = (event) => {
        this.setState({
            rowNum: event.target.value
        },
        function() { console.log("setState completed", this.state)}
        );
    };

    board= (event)=>{
        event.preventDefault();
        let rows = parseInt(this.state.rowNum);
        if (rows <=5){
        let boardArr = [];
        for (let i = 0; i < rows; i++) {
            let innerArr = [];
            for (let j = 0; j < (i * 2 + 1); j++) {
                innerArr.push(<Token key={i*j+j} />);
            }
            boardArr.push(<div className={styles.Board_row} key={i + "_row"}>{innerArr}</div>)
        }

        this.setState({
            board: [...boardArr]
        });}
        else {
            alert("Five rows is enough!");
            this.setState({
                rowNum : 5
            });
        }
    }

    render() {
        return (
            <div className={styles.Board_main}>
            {this.state.board.length==0 && <form>
                <div className={styles.Board_menu}><label>How many rows?
    <input type="number" placeholder="number of rows" name="rowNum" value={this.state.rowNum} onChange={(event) => this.handleChange(event)}></input>
                </label>
                    <button type="submit" onClick={(event) => this.board(event)}>Build board</button>
                </div>
                </form>}
                {this.state.board}
            </div>
        )
    }
}
export default Board;