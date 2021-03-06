import Head from "next/head";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import request from "../utils/request";

export default function Home({ data }) {
  const value = useSelector((state) => state.search.value);
  const [filtred,setFiltred] = useState([])

  useEffect(async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=77b75897bd6de248789745dbd1270fe7&query=${value}`
    );
    const data = await res.json()
    setFiltred(data.results)
  },[value]);


  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://livingonefulllife.com/wp-content/uploads/2021/12/facebook_share_thumb_default_hulu.png"
        />
      </Head>

      <Header />
      <Nav />
      <Results data={data} filtred={filtred} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const res = await fetch(
    `https://api.themoviedb.org/3${
      request[genre]?.url || request.fetchTrending.url
    }`
  );
  const data = await res.json();
  return { props: { data: data.results } };
}
