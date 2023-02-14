import Card from '@/components/Card';
import Layout from '@/components/Layout';
import React from 'react';

export default function searchScreen({ search }) {
  let contain;
  contain = search.map((result) => <Card key={result.id} result={result} />);
  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {contain}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { searchTerm } = context.params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`
  ).then((res) => res.json());
  return {
    props: {
      search: res.results,
    },
  };
}
