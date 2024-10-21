"use client";
import init from "@/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getBlog = async () => {
    setLoading(true);
    const mycollection = collection(init.db, "blog");
    let q = query(mycollection, orderBy("createdAt", "desc"));
    const data = await getDocs(q);
    setData(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setLoading(false);
  };

  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <div className="container-fluid bg-breadcrumb py-5">
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">Latest Blogs</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active text-white">Blogs</li>
          </ol>
        </div>
      </div>
      <div className="container py-5">
        {/* <h1 className="text-center mb-5">Latest Blogs</h1> */}
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card blog-card h-100">
                  <img
                    src={item.image}
                    className="card-img-top blog-image"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <small className="text-muted">
                        Posted on{" "}
                        {new Date(
                          item.createdAt.seconds * 1000
                        ).toLocaleDateString()}
                      </small>
                    </p>
                    <Link href={`blog/${item.slug}`}>
                      <button
                        className="btn btn-secondary"
                        style={{ fontWeight: "400" }}
                      >
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;
