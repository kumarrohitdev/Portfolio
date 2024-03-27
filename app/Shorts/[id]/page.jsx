"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function BlogPage() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/Shorts/?id=${id}`);
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto pt-32">
      <h1 className="text-3xl font-bold text-center mb-6">
        {post.Title || <Skeleton />}
      </h1>
      <p>{post.Description || <Skeleton count={15} />}</p>
      <h2 className="text-2xl font-bold mt-8">Conclusion</h2>
      <p>{post.Conclusion || <Skeleton count={5} />}</p>
    </div>
  );
}
