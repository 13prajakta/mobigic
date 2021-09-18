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
import { Link } from "react-router-dom";
    
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
            textAlign:"center"
        }
    });
    
    function Searched() {
        const gridd = JSON.parse(localStorage.getItem('Mygrid'));
        const gridd1 = JSON.parse(localStorage.getItem('Mysearch'));
        const classes = useStyles();
        const parentValue = 1;
        const childValue = gridd1.count;
        const Valuee = gridd1.search;
        const [data, setdata] = useState("");
        const [alpha, setAlpha] = useState("");
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
                                defaultValue={Valuee}
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
            setAlpha(index);
            setdata(gridd1.search);
          };
        return (
            <div className="container-fluid">
                <h2 className="text-warning">Searched Result</h2>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableBody>{generateTable()}</TableBody>
                    </Table>
                </TableContainer>
                <div className="back">
                <Link to="/yourgrid"><button className="btn btn-warning">Back To Grid</button></Link>
                </div>
            </div>
        );
    }
    
    export default Searched
    
    

