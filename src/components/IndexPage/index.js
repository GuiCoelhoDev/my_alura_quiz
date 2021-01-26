import Head from 'next/head'
import db from "../../../db.json"

function IndexPage() {
  return (

    <Head>
      <title>Lol quiz</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta property="og:title" content="Lolinho" key="ogtitle" />
      <meta property="og:description" content="Iupi" key="ogdesc" />
      <meta property="og:image" content="https://i.pinimg.com/originals/bd/4c/23/bd4c236086fa1bb4bbcc8e6cdffdf785.png" key="ogima ge" />
    </Head>


  )
}

export default IndexPage
