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
            loading: true,
            problem: null,
            gridValues: null,
            selectedGrid: { row_index: -1, col_index: -1 },
            gameBoardBoarderStyle: "8px solid #000",
            completeFlag: false,
            conflicts: [{ row_index: -1, col_index: -1 }]
        }
    }

    handle_grid_1x1_click = (row_index, col_index) => {
        // TODO
        
        // Useful hints:
        // console.log(row_index, col_index)
        // console.log(this.state.selectedGrid)
    }

    handleKeyDownEvent = (event) => {
        // TODO

        // Useful hints:
        // console.log(event)
        // if (this.state.gridValues !== null && this.state.selectedGrid.row_index !== -1 && this.state.selectedGrid.col_index !== -1 && (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {}
        // if (this.state.problem.content[this.state.selectedGrid.row_index][this.state.selectedGrid.col_index] === "0") {}
    }

    handleScreenKeyboardInput = (num) => {
        // TODO
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

    updateState = (object) => {
        this.setState(object);
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
                <Header problemList={problemList} loadProblem={this.loadProblem} gridValues={this.state.gridValues} problem={this.state.problem} updateState={this.updateState} />
                {this.state.loading ? (<ReactLoading type={"bars"} color={"#777"} height={"40vh"} width={"40vh"} />) : (
                    <div id="game-board" className="gameBoard" style={{ border: this.state.gameBoardBoarderStyle }}>
                        <div className="row">
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 0, 0)} fixedValue={this.extractArray(this.state.problem.content, 0, 0)} offsetY={0} offsetX={0} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 3, 0)} fixedValue={this.extractArray(this.state.problem.content, 3, 0)} offsetY={0} offsetX={3} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 6, 0)} fixedValue={this.extractArray(this.state.problem.content, 6, 0)} offsetY={0} offsetX={6} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                        </div>
                        <div className="row">
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 0, 3)} fixedValue={this.extractArray(this.state.problem.content, 0, 3)} offsetY={3} offsetX={0} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 3, 3)} fixedValue={this.extractArray(this.state.problem.content, 3, 3)} offsetY={3} offsetX={3} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 6, 3)} fixedValue={this.extractArray(this.state.problem.content, 6, 3)} offsetY={3} offsetX={6} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                        </div>
                        <div className="row">
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 0, 6)} fixedValue={this.extractArray(this.state.problem.content, 0, 6)} offsetY={6} offsetX={0} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 3, 6)} fixedValue={this.extractArray(this.state.problem.content, 3, 6)} offsetY={6} offsetX={3} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
                            <Grid_9x9 handle_grid_1x1_click={this.handle_grid_1x1_click} value={this.extractArray(this.state.gridValues, 6, 6)} fixedValue={this.extractArray(this.state.problem.content, 6, 6)} offsetY={6} offsetX={6} selectedGrid={this.state.selectedGrid} conflicts={this.state.conflicts} />
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