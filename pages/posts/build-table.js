import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { countries } from "../../country.js";
import Link from "next/link";

export const getStaticProps = async () => {

  return { 
    props: {
      countryList: countries,
    },
  }
}

const useStyles = makeStyles({
  table: {
    maxWidth: 500,
    "& .MuiTableCell-root": {
      borderRight: "1px solid rgba(224, 224, 224, 1)" }
  },

  tableHead: {
    backgroundColor: '#ADD8E6'
  },

  tableRow: {
    padding: "1"
  },
});


export default function BasicTable({ countryList }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align ="right">Abbreviation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countryList.map((country) => (
            <TableRow key={country.id}>
              <TableCell>
              <Link href={'/posts/[id]'} as={'/posts/' + country.name}>
                <a>{country.name}</a>
                </Link>
              </TableCell>
              <TableCell align="right">{country.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
