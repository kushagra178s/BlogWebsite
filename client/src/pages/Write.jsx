import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function write() {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
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
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label htmlFor="file">
            <b>
              <u>Upload Image</u>
            </b>
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="category" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" value="science" id="science" />
            <label htmlFor="art">Science</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              name="category"
              value="technology"
              id="technology"
            />
            <label htmlFor="technology">Technology</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" value="cinema" id="cinema" />
            <label htmlFor="cinema">Cinema</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" value="design" id="design" />
            <label htmlFor="design">Design</label>
          </div>

          <div className="cat">
            <input type="radio" name="category" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default write;
