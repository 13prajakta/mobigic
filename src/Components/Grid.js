import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/styles'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import '../assets/css/grid.css';
import Search from './Search'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        textAlign:"center"
    }
});

function Grid() {
    const gridd = JSON.parse(localStorage.getItem('Mygrid'));
    const classes = useStyles();
    const parentValue = gridd.m;
    const childValue = gridd.n;
    const [data, setdata] = useState("");
    const [alpha, setAlpha] = useState("");
    // console.log(alpha)
    const [tableCellsData, setTableCellsData] = useState({});
    //console.log(tableCellsData);
    const getUniqueKeyFromArrayIndex = (rowNum, columnNum) => {
        return `${rowNum}-${columnNum}`;
    };

    const onChangeHandler = (e) => {
        // console.log(e.target.name, e.target.value);

        setTableCellsData({
            ...tableCellsData,
            [e.target.name]: e.target.value
        });
    };

    
    const generateTable = () => {
        let table = [];
        // Outer loop to create parent
        for (let i = 0; i < parentValue; i++) {
            let children = [];
            //Inner loop to create children
            for (let j = 0; j < childValue; j++) {
                children.push(
                    <td>
                        <InputBase
                            name={getUniqueKeyFromArrayIndex(i, j)}
                            placeholder="Write Alphabate Here"
                            Value={data} inputProps={{minlength:0, maxLength: 1}} 
                            onChange={onChangeHandler}
                            term={alpha}
                        />
                    </td>
                );
            }
            table.push(
                <TableRow key={i}>
                    <TableCell>{children}</TableCell>
                </TableRow>
            );
        }
        return table;
    };

    useEffect(() => {
        const keys = Object.keys(tableCellsData);
        keys.forEach((item) => {
            const indexes = item.split("-");

            // console.log(
            //     `value of the item in index ${indexes} is  `,
            //     tableCellsData[item]
            // );
        });
    }, [tableCellsData]);

    const highlight = (index) => { 
        setAlpha(index)
      };
    return (
        <div className="container-fluid">
            <Search tableCellsData={tableCellsData} clickMe={highlight}/>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>{generateTable()}</TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Grid

