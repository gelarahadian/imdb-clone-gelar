import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Navbar() {
  const router = useRouter();
  const { genre } = router.query;

  const genreList = [
    {
      title: 'Trending',
      param: 'fetchTrending',
    },
    {
      title: 'TopRated',
      param: 'fetchTopRated',
    },
  ];
  return (
    <div
      className={`flex justify-center space-x-8 bg-amber-100 dark:bg-gray-600 lg:text-lg p-4`}
    >
      {genreList.map(({ title, param }) => (
        <Link
          className={`m-4 hover:text-amber-600 font-semibold p-2 transition duration-300  ${
            genre &&
            genre === param &&
            'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg '
          }`}
          key={param}
          href={`/?genre=${param}`}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
