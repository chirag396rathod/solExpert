import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  ref as dbRef,
  getDatabase,
  push,
  set,
  update,
} from "firebase/database";
import { app } from "../../../firebaseConfig";
import { CreateBlogsContainer } from "./styled";
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {
  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [mainInput, setMainInput] = useState({
    blogImage: null,
    title: "",
    previewURL: null,
  });
  const [inputsList, setInputsList] = useState([
    {
      input_type: "textarea",
      input_value: "",
    },
  ]);

  const handleAddInput = (type) => {
    if (type) {
      setInputsList([
        ...inputsList,
        {
          input_type: type,
          input_value: "",
        },
      ]);
    }
  };

  const handleRemove = (index) => {
    const FilteredData = inputsList.filter((_, key) => key !== index);
    setInputsList(FilteredData);
  };

  const handleChange = (e, index) => {
    const newInputsList = [...inputsList];
    newInputsList[index].input_value = e.target.value;
    setInputsList(newInputsList);
  };

  const handleMainInputChange = (e) => {
    const name = e.target.name;
    if (name === "title") {
      const value = e.target.value;
      setMainInput({
        ...mainInput,
        title: value,
      });
    }
    if (name === "image") {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setMainInput({
            ...mainInput,
            blogImage: file,
            previewURL: reader.result,
          });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const database = getDatabase(app);
    const requiredBody = {
      blog_title: mainInput.title,
      content: inputsList,
    };
    try {
      let imageUrl = "";
      if (mainInput.blogImage) {
        const storage = getStorage();
        const storageReference = storageRef(
          storage,
          `images/${mainInput.blogImage.name}`
        );
        const snapshot = await uploadBytes(
          storageReference,
          mainInput.blogImage
        );
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const timestamp = new Date().toISOString();
      const updatedBlogData = {
        ...requiredBody,
        image: {
          url: imageUrl,
          name: mainInput.blogImage ? mainInput.blogImage.name : "",
        },
        timestamp,
      };
      // Generate a unique key for the new blog entry
      const newBlogKey = push(dbRef(database, "blogs")).key;
      const updates = {};
      updates[`/blogs/${newBlogKey}`] = updatedBlogData;
      await update(dbRef(database), updates);
      setLoading(false);
      setMainInput({
        blogImage: null,
        title: "",
        previewURL: null,
      });
      setInputsList([
        {
          input_type: "textarea",
          input_value: "",
        },
      ]);
      toast.success("Blog Upload successfully!");
    } catch (error) {
      setLoading(false);
      console.error("Error saving data: ", error);
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <CreateBlogsContainer>
      <form onSubmit={handleSubmit}>
        <div className="form-title">Create New Blog</div>
        {mainInput.blogImage ? (
          <div className="preview-image-container">
            <img src={mainInput?.previewURL} alt="" />
            <div
              className="remove-button"
              onClick={() => {
                setMainInput({
                  ...mainInput,
                  previewURL: null,
                  blogImage: null,
                });
              }}
            >
              Remove
            </div>
          </div>
        ) : (
          <div className="upload-image">
            <input
              type="file"
              name="image"
              onChange={handleMainInputChange}
              accept="image/*"
            />
            <div className="helper-content">Click & Upload Blog Image</div>
          </div>
        )}
        <input
          type="text"
          name="title"
          placeholder="Enter Blog Title"
          className="form-input mb-3"
          onChange={handleMainInputChange}
          value={mainInput.title}
        />
        {inputsList.length > 0 &&
          inputsList.map((item, key) => {
            return (
              <>
                <div className="input-wrapper">
                  {item.input_type === "textarea" && (
                    <>
                      <div className="w-100 mb-2">
                        <div className="input-label ">
                          {`${key + 1}. `}Enter Description
                        </div>
                        <textarea
                          value={item.input_value}
                          rows={4}
                          placeholder="Enter Description"
                          className="form-input-description "
                          key={key}
                          onChange={(e) => handleChange(e, key)}
                        ></textarea>
                      </div>
                    </>
                  )}
                  {item.input_type === "sub_title" && (
                    <div className="w-100 mb-3">
                      <div className="input-label">
                        {`${key + 1}. `}Enter Subtitle
                      </div>
                      <input
                        type="text"
                        placeholder="Enter SubTitle"
                        className="form-input "
                        onChange={(e) => handleChange(e, key)}
                        value={item.input_value}
                      />
                    </div>
                  )}
                  {item.input_type === "bullate_point" && (
                    <>
                      <div className="w-100 mb-3">
                        <div className="input-label">
                          {`${key + 1}. `}Enter Bullate Point
                        </div>
                        <input
                          type="text"
                          placeholder="Enter bullate point description"
                          className="form-input "
                          onChange={(e) => handleChange(e, key)}
                          value={item.input_value}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className="remove-button"
                    onClick={() => handleRemove(key)}
                  >
                    Remove
                  </div>
                </div>
              </>
            );
          })}
        <div className="d-flex justify-content-end align-items-center">
          <div
            className="add-blog-text  mb-4"
            onClick={() => handleAddInput("sub_title")}
          >
            + Add Sub Title
          </div>
          <div
            className="add-blog-text mx-3 mb-4"
            onClick={() => handleAddInput("bullate_point")}
          >
            + Add Bullate Point
          </div>
          <div
            className="add-blog-text  mb-4"
            onClick={() => handleAddInput("textarea")}
          >
            + Add Description
          </div>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              navigation("/");
            }}
            type="button"
            className="create-blog-btn outline"
          >
            Back
          </button>
          <button type="submit" className="create-blog-btn">
            {loading ? (
              <div class="spinner-border spinner-border-sm  text-light"  role="status" />
            ) : (
              "Create Blog"
            )}
          </button>
        </div>
      </form>
      <Toaster />
    </CreateBlogsContainer>
  );
};

export default CreateBlogs;
