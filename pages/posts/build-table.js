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
import { TableSortLabel } from '@material-ui/core';
import { render } from 'react-dom';

export const getStaticProps = async () => {

  return { 
    props: {
      countryList: countries,
    },
  }
}

function sortAsc (array,order) {
  if (order === 'desc')
    return array.sort();

  if(order ==='asc')
    return array.sort().reverse();
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

  const handleClick = (event) => {
    console.log('click')
    
    if (order === 'asc') {
      setOrder('desc')
      console.log('hi1')
    }

    if (order === 'desc') {
      setOrder('asc')
      console.log('hi0')
    }

  };
   


  const onChange = (event) => {
    console.log(event.target.value)
    const value = event.target.value

    const newArray = countryList.filter(function (e) {
      return e.id.includes(value)
    });

    setValue(newArray)

      console.log([...newArray.values()])
    
    };

  const classes = useStyles();
  const [value, setValue] = useState([countryList].flat())
  const [order, setOrder] = useState('desc')
  console.log({order})

  useEffect(() => { 
    const newArray = sortAsc(countryList,order)
    console.log([...countryList.values()])
    setValue(newArray)
  }, [ order] )

  useEffect(() => { 
    
    setValue([countryList].flat()   )
  }, [ countryList ] )






  

  return (
  <>
  
  <div className = {styles.center}>
    <div className="form-group has-search">
      <h1>Table of all Countries</h1>
      <p>Click on a country for more information</p>
      <p>Click <Link href="/posts/datagrid"><a>here</a></Link> for an example using a Datagrid</p>
    <input className ="form-control border-end-0 border rounded-pill width"
     type="text"
     id="filter"
     placeholder="search by country name"
     autoComplete="off"
     onChange= {onChange}></input>
    </div>
    <br></br>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>
              <TableSortLabel
                direction={order === 'asc' ? 'asc' : 'desc'}
                onClick = {() => setOrder(order === 'asc' ? 'desc': 'asc')}
              >
              Country Name
              </TableSortLabel>
            </TableCell>
            <TableCell align ="right">Abbreviation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value.map((country) => (
            <TableRow key={country.id}>
              <TableCell className={classes.tableCell}>
              <Link href={'/posts/[id]'} as={'/posts/' + country.id}>
              <a className={styles.aunderline}>{country.id}</a>
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