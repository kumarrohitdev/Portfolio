"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Card() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Shorts`);
        setResults(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        return [];
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 ml-6 mr-6 active:bg-inherit cursor-pointer">
      {results.map((result) => (
        <Link key={result.id} href={`/Shorts/${result.id}`}>
          <div className="border p-4 rounded-md shadow-md mb-4" key={result.id}>
            <h1 className="text-xl font-semibold">
              {result.Title || <Skeleton />}
            </h1>
            <p className="line-clamp-3 text-sm text-gray-800 dark:text-gray-100">
              {result.Description || <Skeleton count={2} />}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
