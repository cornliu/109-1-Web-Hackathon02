import React, { Component } from 'react';
import Grid_1x1 from '../components/Grid_1x1';

class Grid_9x9 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let gridStyle = {
            borderLeft: this.props.offsetX === 0 ? "" : "4px solid #666",
            borderRight: this.props.offsetX === 6 ? "" : "4px solid #666",
            borderTop: this.props.offsetY === 0 ? "" : "4px solid #666",
            borderBottom: this.props.offsetY === 6 ? "" : "4px solid #666",
            backgroundColor: "#999"
        };
        return (
            <div className="grid_9x9" style={gridStyle}>
                <div className="row">
                    <Grid_1x1 value={this.props.value[0]} fixed={this.props.fixedValue[0] !== "0"} row_index={this.props.offsetY + 0} col_index={this.props.offsetX + 0} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 0 && c.col_index === this.props.offsetX + 0) !== undefined} />
                    <Grid_1x1 value={this.props.value[1]} fixed={this.props.fixedValue[1] !== "0"} row_index={this.props.offsetY + 0} col_index={this.props.offsetX + 1} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 0 && c.col_index === this.props.offsetX + 1) !== undefined} />
                    <Grid_1x1 value={this.props.value[2]} fixed={this.props.fixedValue[2] !== "0"} row_index={this.props.offsetY + 0} col_index={this.props.offsetX + 2} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 0 && c.col_index === this.props.offsetX + 2) !== undefined} />
                </div>
                <div className="row">
                    <Grid_1x1 value={this.props.value[3]} fixed={this.props.fixedValue[3] !== "0"} row_index={this.props.offsetY + 1} col_index={this.props.offsetX + 0} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 1 && c.col_index === this.props.offsetX + 0) !== undefined} />
                    <Grid_1x1 value={this.props.value[4]} fixed={this.props.fixedValue[4] !== "0"} row_index={this.props.offsetY + 1} col_index={this.props.offsetX + 1} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 1 && c.col_index === this.props.offsetX + 1) !== undefined} />
                    <Grid_1x1 value={this.props.value[5]} fixed={this.props.fixedValue[5] !== "0"} row_index={this.props.offsetY + 1} col_index={this.props.offsetX + 2} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 1 && c.col_index === this.props.offsetX + 2) !== undefined} />
                </div>
                <div className="row">
                    <Grid_1x1 value={this.props.value[6]} fixed={this.props.fixedValue[6] !== "0"} row_index={this.props.offsetY + 2} col_index={this.props.offsetX + 0} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 2 && c.col_index === this.props.offsetX + 0) !== undefined} />
                    <Grid_1x1 value={this.props.value[7]} fixed={this.props.fixedValue[7] !== "0"} row_index={this.props.offsetY + 2} col_index={this.props.offsetX + 1} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 2 && c.col_index === this.props.offsetX + 1) !== undefined} />
                    <Grid_1x1 value={this.props.value[8]} fixed={this.props.fixedValue[8] !== "0"} row_index={this.props.offsetY + 2} col_index={this.props.offsetX + 2} handle_grid_1x1_click={this.props.handle_grid_1x1_click} selectedGrid={this.props.selectedGrid} conflicted={this.props.conflicts.find(c => c.row_index === this.props.offsetY + 2 && c.col_index === this.props.offsetX + 2) !== undefined} />
                </div>
            </div>
        );
    }
}

export default Grid_9x9;