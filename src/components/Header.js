import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    headerHolder: {
        fontSize: "5vh",
        margin: "3vh",
        color: "#666"
    },
    title: {
        fontSize: "6vh",
    },
    buttonHolder: {
        display: "flex",
        // width: "50vw",
        justifyContent: "space-around"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
    },
    button: {
        margin: theme.spacing(1),
        maxWidth: "30vw",
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const [proplem, setPreblem] = React.useState('');

    const handleChange = (event) => {
        setPreblem(event.target.value);
        props.loadProblem(String(event.target.value));
    };

    const handleAutocomplete = () => {
        // props.updateState()
    }
    const handleResetGame = () => {
        // props.updateState()
    }

    const problemList = props.problemList.map(p => <MenuItem value={p}>{p}</MenuItem>)
    return (
        <div className={classes.headerHolder}>
            <div className={classes.title}><b>My Sudoku</b></div>
            <div className={classes.buttonHolder}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">problem</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={proplem}
                        onChange={handleChange}
                        label="problem"
                        autoWidth
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {problemList}
                    </Select>
                </FormControl>
                <Button className={classes.button} onClick={handleAutocomplete} variant="contained" size="small">
                    Auto Complete
                </Button>
                <Button className={classes.button} onClick={handleResetGame} variant="contained" size="small">
                    Reset Game
                </Button>
            </div>
        </div>
    );
}
