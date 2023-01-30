import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import {API_KEY, CONTEXT_KEY} from '../keys'
import { useRouter } from 'next/router'
import SearchResults from '../components/SearchResults'


function Search({results}) {
    console.log(results)
    const router = useRouter();

  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
        </Head>

        {/* {Header} */}
        <Header />
        <SearchResults results={results}/>

        {/* {Search Results} */}

    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || 0;

    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
    .then((res) => res.json())

    return {
        props: {
           results: data            
    }
}
}