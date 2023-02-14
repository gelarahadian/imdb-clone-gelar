import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';

export default function Card({ result }) {
  return (
    <div
      className="cursor-pointer border border-slate-600 m-2 rounded-lg p-2 hover:shadow-md hover:shadow-slate-400
    trnsition duration-300 group"
    >
      <Link href={`/movie/${result.id}`}>
        <div className="relative w-full h-28 ">
          <Image
            src={`https://image.tmdb.org/t/p/original${
              result.backdrop_path || result.poster_path
            }`}
            fill
            className="object-cover sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="image not found"
          />
        </div>

        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <HandThumbUpIcon className="h-5 ml-4" />
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
