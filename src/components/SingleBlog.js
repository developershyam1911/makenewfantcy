"use client";
import { useEffect, useState } from "react";
import "./blog.css";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import init from "@/firebase";
import dayjs from "dayjs";

const SingleBlog = ({ blog_id }) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  // Fetch the blog document based on blog_id
  const getBlogData = async () => {
    setLoading(true);
    try {
      const mycollection = collection(init.db, "blog");
      let q = query(mycollection, where("slug", "==", blog_id));
      const res = await getDocs(q);
      setBlogData(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching document:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (blog_id) {
      getBlogData();
    }
  }, [blog_id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!blogData) {
    return <div>No blog found.</div>;
  }

  return (
    <>
      <div className="single-blog my-2">
        <div className="container py-5">
          <h1 className="text-center mb-4">{blogData[0].title}</h1>
          <p className="text-center text-muted">
            Posted on{" "}
            {dayjs(blogData[0]?.createdAt?.seconds * 1000).format(
              "DD MMM, YYYY"
            )}
          </p>

          <div className="row">
            <div className="col-md-12">
              <center>
                {" "}
                <img
                  src={blogData[0].image}
                  alt={blogData[0].title}
                  className="img-fluid mb-4"
                />
              </center>
            </div>

            <div className="col-md-12">
              {/* Render description safely since it's HTML */}
              <div
                className="blog-description"
                dangerouslySetInnerHTML={{ __html: blogData[0].description }}
              ></div>
            </div>
          </div>

          <div className="mt-4">
            <h5>Keywords:</h5>
            <p>{blogData[0].keyword}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
