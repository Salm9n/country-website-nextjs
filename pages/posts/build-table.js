import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'; 
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from '../../styles/table.module.css';

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
      borderRight: "1px solid rgba(224, 224, 224, 1)",
      borderLeft: "1px solid rgba(224, 224, 224, 1)"  } 
  },

  tableHead: {
    backgroundColor: '#ADD8E6'
  },

  tableCell: {
    backgroundColor: 'white'
  },

  tableRow: {
    padding: "1"
  },
});


export default function BasicTable({ countryList }) {

  const onChange = (event) => {
    console.log(event.target.value)
    const value = event.target.value

    const newArray = countryList.filter(function (e) {
      return e.name.includes(value)
    });

    setValue(newArray)

      console.log([...newArray.values()])
    
    };

  const classes = useStyles();
  const [value, setValue] = useState([countryList].flat())

  useEffect(() => { 
    
    setValue([countryList].flat()   )
  }, [ countryList ] )

  console.log('value',[...value.values()])
  console.log('countryList',[...countryList.values()])


  

  return (
  <>
  <div className = {styles.center}>
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback"></span>
    <input className ="form-control border-end-0 border rounded-pill"
     type="text"
     id="filter"
     placeholder="search by country name"
     onChange= {onChange}></input>
    </div>
    <br></br>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align ="right">Abbreviation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((country) => (
            <TableRow key={country.id}>
              <TableCell className={classes.tableCell}>
              <Link href={'/posts/[id]'} as={'/posts/' + country.name}>
              <a className={styles.aunderline}>{country.name}</a>
                </Link>
              </TableCell>
              <TableCell className={classes.tableCell} align="right">{country.code}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </>
  );
}
