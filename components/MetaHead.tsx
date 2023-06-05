import React from "react"
import Head from "next/head"

type Props = {
  title: string
  path?: string
}

export default function MetaHead({ title, path }: Props) {
  return (
    <Head>
      <title>{`${title} - Checkified`}</title>
      <meta name="description" content={`Learn more about ${title}`} />
      <meta property="og:title" content={`${title} - Checkified`} />
      <meta property="og:description" content={`Learn more about ${title}`} />
      {/* <meta
        property="og:URL"
        content={`https://fakestoreapi.com/products/${productId}`}
      /> */}
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
