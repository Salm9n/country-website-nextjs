import { countries } from '../../country.js'
import Link from 'next/link'

export const getStaticProps = async ( {params} ) => {
  const countryList = countries.filter(p => p.name.toString() == params.id)
  return {
    props: {
      country: countryList[0],
    },

  }
}

export const getStaticPaths = async () => {

  const paths = countries.map(country => ({
    params: {id : country.name.toString()},

  }))
  return {paths, fallback: false}
}


const Country =  ({country}) => {
  return(
  <div>
    <h1> Hello {country.name} </h1>
    <p> Country code is {country.code} </p>
    <Link href="/posts/build-table">
      <a>Back to country table</a>
    </Link>
    </div>
    );
  }

  export default Country;
