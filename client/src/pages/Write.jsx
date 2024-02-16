import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import moment from "moment";
function write() {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "art");
  const storage = localStorage.getItem("user");
  const userId = JSON.parse(storage).id;
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post(
        "http://localhost:8800/api/upload/",
        formData
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log("error = ",err);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      state
        ? await axios.put(`http://localhost:8800/api/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`http://localhost:8800/api/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            uid: userId,
          });
      navigate("/");
    } catch (err) {
      console.log("here is the error", err);
    }
  };
  return (
    <div className="add">
      <div className="content">
        <input
          value={title}
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <div className="editorContainer">
          <ReactQuill theme="snow" style={{height:"390px"}} value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft{" "}
          </span>
          <span>
            <b>Visiblity: </b> Public{" "}
          </span>
          <input
            style={{ fontSize:"20px", paddingLeft:"15%" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <label htmlFor="file">
            <b>
              <u style={{ fontSize:"20px"}}>Upload Image</u>
            </b>
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              checked={cat == "art"}
              type="radio"
              name="category"
              value="art"
              id="art"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input
              checked={cat == "science"}
              type="radio"
              name="category"
              value="science"
              id="science"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="art">Science</label>
          </div>

          <div className="cat">
            <input
              checked={cat == "technology"}
              type="radio"
              name="category"
              value="technology"
              id="technology"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input
              checked={cat == "cinema"}
              type="radio"
              name="category"
              value="cinema"
              id="cinema"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input
              checked={cat == "design"}
              type="radio"
              name="category"
              value="design"
              id="design"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
            <input
              checked={cat == "food"}
              type="radio"
              name="category"
              value="food"
              id="food"
              onChange={(e) => {
                setCat(e.target.value);
              }}
            />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default write;
