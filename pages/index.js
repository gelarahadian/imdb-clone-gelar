import Card from '@/components/Card';
import Layout from '@/components/Layout';

export default function Home({ results, error }) {
  let contain;
  if (results) {
    contain = results?.map((result) => (
      <Card key={result.poster_path} result={result} />
    ));
  } else {
    contain = <div>{error}</div>;
  }
  return (
    <Layout>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {contain}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const { genre } = context.query;
    const data = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/movie/week'
      }?api_key=${process.env.TMDB_API_KEY}`
    ).then((data) => data.json());
    return {
      props: { results: data.results, error: '' },
    };
  } catch (err) {
    return {
      props: { result: null, error: err.message },
    };
  }
}
