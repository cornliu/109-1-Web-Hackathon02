import "./Grid.css"
//TODO
// Useful hints:
// for React Component:
// const gridStyle = {
//     color: (this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index) || this.props.conflicted ? "#FFF" : this.props.fixed ? "#666" : "#6CC",
//     backgroundColor: this.props.selectedGrid.row_index === this.props.row_index && this.props.selectedGrid.col_index === this.props.col_index ? "#333" : this.props.conflicted ? "#E77" : "#FFF",
// };
// return (
//     <div className="grid_1x1" id={`grid-${this.props.row_index}*${this.props.col_index}`} tabindex="1" style={gridStyle} onClick={() => this.props.handle_grid_1x1_click(this.props.row_index, this.props.col_index)}>
//         { this.props.value === "0" ? "" : this.props.value}
//     </div>
// );

// for React Hook:
export default (props) => {
    const gridStyle_0_0 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid transparent',
        borderBottom: '1.5px solid #999',
        borderLeft: '1.5px solid transparent',
        borderRight: '1.5px solid #999',
    };
    const gridStyle_1_0 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid #999',
        borderBottom: '1.5px solid #999',
        borderLeft: '1.5px solid transparent',
        borderRight: '1.5px solid #999'
    };
    const gridStyle_2_0 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid #999',
        borderBottom: '1.5px solid transparent',
        borderLeft: '1.5px solid transparent',
        borderRight: '1.5px solid #999'
    };
    const gridStyle_0_1 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid transparent',
        borderBottom: '1.5px solid #999',
        borderLeft: '1.5px solid #999',
        borderRight: '1.5px solid #999'
    };
    const gridStyle_1_1 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid #999',
        borderBottom: '1.5px solid #999',
        borderLeft: '1.5px solid #999',
        borderRight: '1.5px solid #999'
    };
    const gridStyle_2_1 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid #999',
        borderBottom: '1.5px solid transparent',
        borderLeft: '1.5px solid #999',
        borderRight: '1.5px solid #999'
    };
    const gridStyle_0_2 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid transparent',
        borderBottom: '1.5px solid #999',
        borderLeft: '1.5px solid #999',
        borderRight: '1.5px solid transparent'
    };
    const gridStyle_1_2 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid #999',
        borderBottom: '1.5px solid #999',
        borderLeft: '1.5px solid #999',
        borderRight: '1.5px solid transparent'
    };
    const gridStyle_2_2 = {
        color: (props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index) || props.conflicted ? "#FFF" : props.fixed ? "#666" : "#6CC",
        backgroundColor: props.selectedGrid.row_index === props.row_index && props.selectedGrid.col_index === props.col_index ? "#333" : props.conflicted ? "#E77" : "#FFF",
        borderTop: '1.5px solid #999',
        borderBottom: '1.5px solid transparent',
        borderLeft: '1.5px solid #999',
        borderRight: '1.5px solid transparent'
    };
    const getstyle = ()=>{
        // console.log(props.row_index, props.col_index)
        if (props.row_index%3 == 0 && props.col_index%3==0){
            // console.log("1")
            return gridStyle_0_0
        }
        else if (props.row_index%3 === 1 && props.col_index%3===0){
            // console.log("2")
            return gridStyle_1_0
        }
        else if (props.row_index%3 == 2 && props.col_index%3==0){
            // console.log("3")
            return gridStyle_2_0
        }
        else if (props.row_index%3 == 0 && props.col_index%3==1){
            return gridStyle_0_1
        }
        else if (props.row_index%3 == 1 && props.col_index%3==1){
            return gridStyle_1_1
        }
        else if (props.row_index%3 == 2 && props.col_index%3==1){
            return gridStyle_2_1
        }
        else if (props.row_index%3 == 0 && props.col_index%3==2){
            return gridStyle_0_2
        }
        else if (props.row_index%3 == 1 && props.col_index%3==2){
            return gridStyle_1_2
        }
        else if (props.row_index%3 == 2 && props.col_index%3==2){
            return gridStyle_2_2
        }
    }
    return (
        <div className="grid_1x1" id={`grid-${props.row_index}*${props.col_index}`} tabindex="1" style={getstyle()} onClick={() => props.handle_grid_1x1_click(props.row_index, props.col_index)}>
            { props.value === "0" ? "" : props.value}
        </div>
    );
}

