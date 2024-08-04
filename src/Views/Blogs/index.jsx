import React, { useState, useEffect } from "react";
import moment from "moment";
import {
  getDatabase,
  ref,
  query,
  orderByKey,
  startAfter,
  limitToLast,
  get,
  limitToFirst,
} from "firebase/database";
import { app } from "../../firebaseConfig";
import { BlogsContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import ScrollToTopOnMount from "../../Components/ScrollToTopOnMount";
import { generateBlogUrl } from "../../Utils/urlUtils";
import Meta from "../../Utils/Meta";
import LazyLoad from "react-lazyload";

export const LazyLoadImage = ({ src, alt, height }) => (
  <LazyLoad height={height || 300} offset={100}>
    <img src={src} alt={alt} />
  </LazyLoad>
);

const Blogs = ({ className, isSubSection }) => {
  const navigation = useNavigate();
  const [blogsList, setBlogsList] = useState([]);
  const [lastKey, setLastKey] = useState(null);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasBlogs = localStorage.getItem("blogs");
    const blogsData = hasBlogs && JSON.parse(hasBlogs);
    if (!hasBlogs) {
      fetchInitialBlogs();
    } else {
      setLastKey(blogsData?.lastKey);
      setBlogsList(blogsData?.blogsList);
      setTotal(blogsData?.totalRecords);
    }
  }, []);

  const fetchInitialBlogs = async () => {
    setLoading(true);
    const db = getDatabase(app);
    const blogsRef = ref(db, "blogs");

    // Configure query for initial blogs
    let blogsQueryConfig = isSubSection ? limitToLast(3) : limitToLast(6); // Adjust limit as needed
    const blogsQuery = query(blogsRef, orderByKey(), blogsQueryConfig);

    try {
      const snapshot = await get(blogsQuery);
      if (snapshot.exists()) {
        const blogData = snapshot.val();
        const keys = Object.keys(blogData);

        // Reverse keys to get them in descending order
        const sortedKeys = keys.reverse();
        const data = sortedKeys.map((key) => ({ id: key, ...blogData[key] }));

        setBlogsList(data);
        setLastKey(keys[keys.length - 1]);

        // Fetch total number of records
        const totalSnapshot = await get(ref(db, "blogs"));
        const totalRecords = totalSnapshot.exists()
          ? Object.keys(totalSnapshot.val()).length
          : 0;
        setTotal(totalRecords);

        localStorage.setItem(
          "blogs",
          JSON.stringify({
            lastKey: keys[keys.length - 1],
            blogsList: data,
            totalRecords,
          })
        );
      }
    } catch (error) {
      console.error("Error fetching initial blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreBlogs = async () => {
    if (isSubSection) {
      navigation("/blogs");
      return;
    }
    if (!lastKey) return;
    setLoading(true);
    const db = getDatabase(app);
    const blogsRef = ref(db, "blogs");

    // Configure query for fetching more blogs
    const blogsQuery = query(
      blogsRef,
      orderByKey()
      // startAfter(lastKey),
      // limitToFirst(3) // Fetch the next set of blogs
    );

    try {
      const snapshot = await get(blogsQuery);
      if (snapshot.exists()) {
        const blogData = snapshot.val();
        const keys = Object.keys(blogData);

        // Reverse keys to maintain descending order
        const sortedKeys = keys.reverse();
        const newData = sortedKeys.map((key) => ({
          id: key,
          ...blogData[key],
        }));

        // Append new data to existing list
        const updatedData = [...newData];

        setBlogsList(updatedData);
        setLastKey(sortedKeys[0]); // Update lastKey for pagination

        // Save updated data and lastKey to local storage
        localStorage.setItem(
          "blogs",
          JSON.stringify({
            lastKey: sortedKeys[0],
            blogsList: updatedData,
          })
        );
      }
    } catch (error) {
      console.error("Error fetching more blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBlogClick = (key, title) => {
    navigation(`/blog/${generateBlogUrl(title)}`);
  };

  const data =
    blogsList.length > 0 && isSubSection ? blogsList.slice(0, 3) : blogsList;

  return (
    <BlogsContainer className={className}>
      {!isSubSection && <Meta title={"Blogs"} />}

      {!isSubSection && (
        <>
          <ScrollToTopOnMount />
          <div className="section-header">
            <div className="section-label">Blogs</div>
            <div className="section-title">Explore new Updates</div>
          </div>
        </>
      )}
      {!loading ? (
        <div className="row g-4">
          {data.map((item, key) => (
            <div
              className="col-sm-12 col-md-6 col-lg-4"
              key={key}
              onClick={() => handleBlogClick(key, item?.blog_title)}
            >
              <div className="blog-card">
                <div className="image-cover">
                  <LazyLoadImage
                    src={item?.image?.url}
                    alt={item?.blog_title}
                  />
                </div>
                <div className="content">
                  <div className="title">{item?.blog_title}</div>
                  <div className="sub-title">
                    {item?.content[0]?.input_value}
                  </div>
                  <div className="date">
                    {moment(item?.timestamp).format("MMM D, YYYY")}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {!isSubSection && blogsList.length < total && (
            <div className="view-more" onClick={fetchMoreBlogs}>
              View More
            </div>
          )}
          {isSubSection && (
            <div className="view-more" onClick={fetchMoreBlogs}>
              View More
            </div>
          )}
        </div>
      ) : (
        <div className="d-flex justify-content-center align-item-center my-4">
          <div className="spinner-border text-dark" role="status" />
        </div>
      )}
    </BlogsContainer>
  );
};

export default Blogs;
