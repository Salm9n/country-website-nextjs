import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { countries } from "../../country.js";
import Link from "next/link";
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/table.module.css';

export const getStaticProps = async () => {

    return { 
      props: {
        countryList: countries,
      },
    }
  }

  const useStyles = makeStyles({
    root: {
      '& .super-app-theme--header': {
        backgroundColor: '#ADD8E6',
      },
    },
  });


const columns = [
  { field: 'id', 
    headerName: 'ID',
    headerClassName: 'super-app-theme--header',
    width: 300,
    renderCell: (params) => (
        <Link
     href={'/posts/[id]'}
     as={'/posts/' + params.id}
     passHref>
     <Button
        component="a">
        {params.id}
     </Button>
  </Link>
    ),
  },
  {
    field: 'code',
    headerName: 'Abbreviation',
    headerClassName: 'super-app-theme--header',
    width: 411,
    editable: true,
  },
];


export default function DataGridDemo() {
    const classes = useStyles();
  return (
<div className={styles.datagridcenter}>
    <h1>Data Grid with all Countries</h1>
    <p>Click on the headers for more options</p>
    <div style={{ height: 1000, width: '50%' }} className={classes.root}>
      <DataGrid
        rows={countries}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[2]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
</div>
  );
}
