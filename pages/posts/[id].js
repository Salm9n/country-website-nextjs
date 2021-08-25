import { countries } from '../../country.js'
import Link from 'next/link'

export const getStaticProps = async ( {params} ) => {
  const countryList = countries.filter(p => p.id.toString() == params.id)
  return {
    props: {
      country: countryList[0],
    },

  }
}

export const getStaticPaths = async () => {

  const paths = countries.map(country => ({
    params: {id : country.id.toString()},

  }))
  return {paths, fallback: false}
}


const Country =  ({country}) => {
  return(
  <div>
    <h1> Hello {country.id} </h1>
    <p> Country code is {country.code} </p>
    <Link href="/posts/build-table">
      <a>Back to Country Table</a>
    </Link>
    <br></br>
    <br></br>
    <Link href="/posts/datagrid">
      <a>Back to Country Data Grid </a>
    </Link>
    </div>
    );
  }

  export default Country;
