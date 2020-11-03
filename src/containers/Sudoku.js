import React, { Component } from 'react';
import ReactLoading from "react-loading";
import { Fireworks } from 'fireworks/lib/react'

import "./Sudoku.css"
import Header from '../components/Header';
import Grid_9x9 from '../components/Grid_9x9';
import ScreenInputKeyBoard from '../components/ScreenInputKeyBoard'
import { problemList } from "../problems"

class Sudoku extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true, // Return loading effect if this is true.
            problem: null, // Stores problem data. See "../problems/" for more information.This is the origin problem and should not be modified. This is used to distinguish the fixed numbers from the editable values
            gridValues: null,  // A 2D array storing the current values on the gameboard. You should update this when updating the game board values.
            selectedGrid: { row_index: -1, col_index: -1 }, // This objecct store the current selected grid position. Update this when a new grid is selected.
            gameBoardBorderStyle: "8px solid #000", // This stores the gameBoarderStyle and is passed to the gameboard div. Update this to have a error effect (Bonus #2).
            completeFlag: false, // Set this flag to true when you wnat to set off the firework effect.
            conflicts: [{ row_index: -1, col_index: -1 }] // The array stores all the conflicts positions triggered at this moment. Update the array whenever you needed.
        }
    }

    handle_grid_1x1_click = (row_index, col_index) => {
        // TODO
        this.setState({ selectedGrid: { row_index: row_index, col_index: col_index } })
        // Useful hints:
        // console.log(row_index, col_index)
        // console.log(this.state.selectedGrid)
    }

    handleKeyDownEvent = (event) => {
        // TODO
        // console.log(this.state.gridValues[this.state.selectedGrid.row_index][this.state.selectedGrid.col_index])
        // Useful hints:
        let flag = false
        console.log(this.state.gridValues)
        if (this.state.gridValues !== null && this.state.selectedGrid.row_index !== -1 && this.state.selectedGrid.col_index !== -1 && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
            let shift = 0
            if (event.keyCode >= 48 && event.keyCode <= 57) {
                shift = 48
            }
            else { shift = 96 }
            let num = event.keyCode - shift

            
            if (num !== 0) {
                const row_inx = this.state.selectedGrid.row_index
                const col_inx = this.state.selectedGrid.col_index
                for (let i = 0; i < 9; i++) {
                    if (this.state.gridValues[i][col_inx] === String(num)) {
                        flag = true
                        this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                        setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333" }); }, 1000);
                    }
                }
                for (let j = 0; j < 9; j++) {
                    if (this.state.gridValues[row_inx][j] === String(num)) {
                        flag = true
                        this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                        setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333" }); }, 1000);
                    }
                }
                const test = [[0, 1, 2], [-1, 0, 1], [-2, -1, 0]]
                const rowinxmod = test[row_inx % 3]
                const colinxmod = test[col_inx % 3]
                rowinxmod.forEach(i => {
                    colinxmod.forEach(j => {
                        // console.log(String(this.state.gridValues[row_inx+i][col_inx+j]))
                        // console.log(String(num))
                        if (this.state.gridValues[row_inx + i][col_inx + j] === String(num)) {
                            flag = true
                            this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                            setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333" }); }, 1000);
                        }
                    });
                });
            }
            if (flag === false) {
                let new_matrix = []
                for (let i = 0; i < this.state.gridValues.length; i++) {
                    let row = []
                    for (let j = 0; j < this.state.gridValues[i].length; j++) {
                        if (i === this.state.selectedGrid.row_index && j === this.state.selectedGrid.col_index && this.state.problem.content[i][j] === "0") {
                            // console.log(typeof this.state.gridValues[i][j])
                            row.push(String(event.keyCode - shift))
                        }
                        else {
                            row.push(this.state.gridValues[i][j])
                        }
                    }
                    new_matrix.push(row)
                }
                this.setState({ gridValues: new_matrix })
            }







            // console.log(event.value)
            // console.log(this.state.gridValues)
        }
        console.log(this.state.gridValues)
        if (this.state.problem.content[this.state.selectedGrid.row_index][this.state.selectedGrid.col_index] === "0") {}
        let count = 0
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                // console.log(this.state.gridValues[i][j])
                if (this.state.gridValues[i][j] !== "0") {
                    count = count+1
                }
            }
        }
        console.log(count)
        console.log(flag)
        if (count == 81 && flag == false) {
            this.setState({ completeFlag: true });
            setTimeout(() => { this.setState({ completeFlag: false }); }, 2500);
        }

    }

    handleScreenKeyboardInput = (num) => {
        console.log(num)
        // TODO
        // console.log(this.state.gridValues)
        // console.log(num)
        // console.log("index:")
        // console.log(this.state.selectedGrid.row_index)
        // console.log(this.state.selectedGrid.col_index)
        let flag = false
        if (num !== 0) {
            const row_inx = this.state.selectedGrid.row_index
            const col_inx = this.state.selectedGrid.col_index
            for (let i = 0; i < 9; i++) {
                if (this.state.gridValues[i][col_inx] === String(num)) {
                    flag = true
                    this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                    setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333" }); }, 1000);
                }
            }
            for (let j = 0; j < 9; j++) {
                if (this.state.gridValues[row_inx][j] === String(num)) {
                    flag = true
                    this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                    setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333" }); }, 1000);
                }
            }
            const test = [[0, 1, 2], [-1, 0, 1], [-2, -1, 0]]
            const rowinxmod = test[row_inx % 3]
            const colinxmod = test[col_inx % 3]
            // console.log("mod")
            // console.log(rowinxmod)
            // console.log(colinxmod)
            rowinxmod.forEach(i => {
                colinxmod.forEach(j => {
                    // console.log(String(this.state.gridValues[row_inx+i][col_inx+j]))
                    // console.log(String(num))
                    if (this.state.gridValues[row_inx + i][col_inx + j] === num) {
                        flag = true
                        this.setState({ gameBoardBorderStyle: "8px solid #E77" });
                        setTimeout(() => { this.setState({ gameBoardBorderStyle: "8px solid #333" }); }, 1000);
                    }
                });
            });
        }

        if (flag === false) {
            let new_matrix = []
            for (let i = 0; i < this.state.gridValues.length; i++) {
                let row = []
                for (let j = 0; j < this.state.gridValues[i].length; j++) {
                    if (i === this.state.selectedGrid.row_index && j === this.state.selectedGrid.col_index && this.state.problem.content[i][j] === "0") {
                        row.push(String(num))
                    }
                    else {
                        row.push(this.state.gridValues[i][j])
                    }
                }
                new_matrix.push(row)
            }
            this.setState({ gridValues: new_matrix })
        }


        // let count = 0
        // for (let i = 0; i < 9; i++) {
        //     for (let j = 0; j < 9; j++) {
        //         // console.log(this.state.gridValues[i][j])
        //         if (this.state.gridValues[i][j] !== "0") {
        //             count = count+1
        //         }
        //     }
        // }
        // console.log(count)
        // console.log(flag)
        // if (count == 81 && flag == false) {
        //     this.setState({ completeFlag: true });
        //     setTimeout(() => { this.setState({ completeFlag: false }); }, 2500);
        // }

    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDownEvent);
    }

    loadProblem = async (name) => {
        this.setState({
            loading: true,
            problem: null,
            gridValues: null,
            selectedGrid: { row_index: -1, col_index: -1 }
        });

        const problem = await require(`../problems/${name}`)
        if (problem.content !== undefined) {
            let gridValues = [];
            for (let i = 0; i < problem.content.length; i++)
                gridValues[i] = problem.content[i].slice();
            this.setState({ problem: problem, gridValues: gridValues, loading: false });
        }
    }

    extractArray(array, col_index, row_index) {
        let rt = []
        for (let i = row_index; i < row_index + 3; i++) {
            for (let j = col_index; j < col_index + 3; j++) {
                rt.push(array[i][j])
            }
        }
        return rt;
    }

    render() {
        const fxProps = {
            count: 3,
            interval: 700,
            canvasWidth: window.innerWidth,
            canvasHeight: window.innerHeight,
            colors: ['#cc3333', '#81C784'],
            calc: (props, i) => ({
                ...props,
                x: (i + 1) * (window.innerWidth / 3) * Math.random(),
                y: window.innerHeight * Math.random()
            })
        }
        return (
            <>
                <Header problemList={problemList} loadProblem={this.loadProblem} gridValues={this.state.gridValues} problem={this.state.problem} />
                {this.state.loading ? (<ReactLoading type={"bars"} color={"#777"} height={"40vh"} width={"40vh"} />) : (
                    <div id="game-board" className="gameBoard" style={{ border: this.state.gameBoardBorderStyle }}>
                        <div className="row">
                            <Grid_9x9 row_offset={0} col_offset={0}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 0, 0)}
                                fixedValue={this.extractArray(this.state.problem.content, 0, 0)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={0} col_offset={3}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 3, 0)}
                                fixedValue={this.extractArray(this.state.problem.content, 3, 0)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={0} col_offset={6}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 6, 0)}
                                fixedValue={this.extractArray(this.state.problem.content, 6, 0)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />
                        </div>
                        <div className="row">
                            <Grid_9x9 row_offset={3} col_offset={0}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 0, 3)}
                                fixedValue={this.extractArray(this.state.problem.content, 0, 3)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={3} col_offset={3}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 3, 3)}
                                fixedValue={this.extractArray(this.state.problem.content, 3, 3)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={3} col_offset={6}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 6, 3)}
                                fixedValue={this.extractArray(this.state.problem.content, 6, 3)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />
                        </div>
                        <div className="row">
                            <Grid_9x9 row_offset={6} col_offset={0}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 0, 6)}
                                fixedValue={this.extractArray(this.state.problem.content, 0, 6)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={6} col_offset={3}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 3, 6)}
                                fixedValue={this.extractArray(this.state.problem.content, 3, 6)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />

                            <Grid_9x9 row_offset={6} col_offset={6}
                                handle_grid_1x1_click={this.handle_grid_1x1_click}
                                value={this.extractArray(this.state.gridValues, 6, 6)}
                                fixedValue={this.extractArray(this.state.problem.content, 6, 6)}
                                selectedGrid={this.state.selectedGrid}
                                conflicts={this.state.conflicts} />
                        </div>
                    </div>
                )}
                {this.state.completeFlag ? (<Fireworks {...fxProps} />) : null}
                {this.state.loading ? null : (<ScreenInputKeyBoard handleScreenKeyboardInput={this.handleScreenKeyboardInput} />)}
            </>
        );
    }
}

export default Sudoku;