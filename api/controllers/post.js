import { db } from "../db.js";
import jwt from "jsonwebtoken";
// import { AuthContext } from "../context/authContext";
// import { useContext } from "react";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";
  // console.log("category=",req.query);
  db.query(q, [req.query.cat], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`, `date`   FROM user u   JOIN posts p ON u.id = p.uid   WHERE p.id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) {
  //   // console.log("token", token);
  //   return res.status(401).json("not authenticated");
  // }

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) {
  //     return res.status(401).json("token is not valid");
  //   }

  const q =
    "INSERT INTO posts ( `title`, `desc`, `img`, `cat`, `date`, `uid` ) VALUES ( ? ) ";

  // console.log("request image", req.body.img);
  const values = [
    req.body.title,
    req.body.desc,
    req.body.img,
    req.body.cat,
    req.body.date,
    req.body.uid,
    // 20,
    // userInfo.id,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(data);
      return res.status(500).json(err);
    }
    return res.json("Post has been created. ");
  });
  // });
};

export const deletePost = (req, res) => {
  // const { currentUser, logout } = useContext(AuthContext);
  // console.log("current user", currentUser);
  // const token = req.cookies.access_token;
  // if (!token) {
  //   // console.log("token", token);
  //   return res.status(401).json("not authenticated");
  // }

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) {
  //     return res.status(401).json("token is not valid");
  //   }
  try {
    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ?";
    db.query(q, [postId], (err, data) => {
      if (err) {
        return res.status(401).json("you can only delete your post");
      }
      return res.json("post has been deleted");
    });
  } catch (e) {
    console.log("delete error = ", e);
  }

  // });
};

export const updatePost = (req, res) => {
  // const token = req.cookies.access_token;
  // if (!token) {
  //   // console.log("token", token);
  //   return res.status(401).json("not authenticated");
  // }

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) {
  //     return res.status(401).json("token is not valid");
  //   }

  // const postId = req.params.id;

  // console.log("requestbody=",req.body);
  // requestbody= {
  //   title: 'Quantum Computing: Unraveling the Power of Quantum Mechanics',
  //   desc: '<p>Quantum Computing: Unraveling the Power of Quantum Mechanics</p>',
  //   cat: 'science',
  //   img: ''
  // }
  // console.log(req.body);
  try {
    const postId = req.params.id;


    const q =
      "UPDATE posts SET `title`=?, `desc`=?, `img`=?, `cat`=? WHERE `id`=?";
    // if (req.body.img == "") {
    //   req.body.img = "https://placehold.co/800x400";
    // }
    // console.log("after = ", req.body.img)

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];
    // db.query(q, [...values, postId, userInfo.id], (err, data) => {
    db.query(q, [...values, postId], (err, data) => {
      // console.log("data", data);
      if (err) {
        return res.status(500).json(err.message);
      }
      return res.json("Post has been updated. ");
    });
  } catch (e) {
    console.log("update error = ", e);
  }

  // });
};
