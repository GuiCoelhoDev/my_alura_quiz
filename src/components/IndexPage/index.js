import Head from 'next/head'
import db from "../../../db.json"

function IndexPage() {
  return (

    <Head>
      <title>Lol quiz</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:title" content="League of legends" key="ogtitle" />
      <meta property="og:description" content="Lol" key="ogdesc" />
      <meta property="og:image" content={db.bg} key="ogimage" />
    </Head>


  )
}

export default IndexPage
