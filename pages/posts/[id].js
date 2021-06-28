import { countries } from '../../country.js'

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


export default ({country}) => (
  <div>
    <h1> Hello {country.name} </h1>
    <p> Country code is {country.code} </p>
    </div>

  )
