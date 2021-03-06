const express = require("express");
const router = express.Router();
const Crud = require("../modals/Crud");


//add post
router.post("/", async (req, res) => {
  try {
    const newPost = await new Crud(req.body);
    const post = await newPost.save();
    res.json(post);
  } catch (error) {
      res.status(500).json(error)
  }
});

//get post
router.get("/", async (req, res) => {
  try {
    const post = await Crud.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Crud.findById(req.params.id);
    if(post)
    {
    await post.updateOne(req.body);
    res.status(200).json("post has been updated");
    }
    else{
        res.status(401).json('post not available')
    }
    
  } catch (error) {
      res.json('error')
  }
});

//delete post
router.delete("/:id", async (req, res) => {
  try {
    
    const post = await Crud.findById(req.params.id);
    if(post)
    {
    await post.deleteOne();
    res.status(200).json("post has been deleted");
    }
    else{
        res.status(401).json('post is not available')
    }
  } catch (error) {
    res.json("error");
  }
});

module.exports = router;
