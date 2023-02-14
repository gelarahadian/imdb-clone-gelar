import Layout from '@/components/Layout';
import Image from 'next/image';
import React from 'react';

export default function movieScreem({ movie }) {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row max-w-6xl items-center md: space-x-6 p-4">
        <div className="relative w-full md:w-[50%] h-[400px] shrink-0">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            fill
            className="object-cover rounded-lg"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image not found"
          />
        </div>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { movieId } = context.query;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
  ).then((res) => res.json());
  return {
    props: {
      movie: res,
    },
  };
}
