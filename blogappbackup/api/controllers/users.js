import express  from "express";

const router = express.Router();

router.get("/test", function(req, res) {
    return (
        res.json("/test route")
    )
})

export default router ;