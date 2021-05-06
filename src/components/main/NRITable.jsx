import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const NRITable = () => {
  const classes = useStyles();
  const tablevalues = [
    {
      india: "India",
      china: "China",
      usa: "USA",
      australia: "Australia",
      japan: "Japan",
      uae: "UAE",
      singapore: "Singapore",
      uk: "UK",
      france: "France",
      germany: "Germany",
    },
    {
      india: "6%",
      china: "3.85%",
      usa: "0.25%",
      australia: "0.25%",
      japan: "0.2%",
      uae: "1.25%",
      singapore: "0.9%",
      uk: "0.1%",
      france: "-0.015%",
      germany: "-0.5%",
    },
  ];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {tablevalues.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.india}
              </TableCell>
              <TableCell align="right">{row.china}</TableCell>
              <TableCell align="right">{row.usa}</TableCell>
              <TableCell align="right">{row.australia}</TableCell>
              <TableCell align="right">{row.japan}</TableCell>
              <TableCell align="right">{row.uae}</TableCell>
              <TableCell align="right">{row.singapore}</TableCell>
              <TableCell align="right">{row.uk}</TableCell>
              <TableCell align="right">{row.france}</TableCell>
              <TableCell align="right">{row.germany}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NRITable;
