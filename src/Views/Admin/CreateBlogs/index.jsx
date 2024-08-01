import React from "react";
import { app } from "../../../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

const CreateBlogs = () => {
  const handleAddData = () => {
    const db = getDatabase(app);
    const documentRef = push(ref(db, "blogs/created"));
    set(documentRef, {
      blog_name: "Blog 1",
      blog_desc: "Blog description",
    })
      .then(() => {
        alert("data set successfully!");
      })
      .catch((error) => {
        console.log("Error :-", error);
      });
  };
  return <button onClick={handleAddData}>CreateBlogs</button>;
};

export default CreateBlogs;
