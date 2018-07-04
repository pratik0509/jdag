import express from "express";
import root from "./root";
import fupload from "./upload";
import multer from "multer";
import path from "path";

const router    = express.Router();
var storage      = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/uploads/"));
    }, filename: function (req, file, cb) {
        cb(null, "JSON-" + Math.round(Math.random() * 1000) + "-" + Date.now());
    }
});

var upload  = multer({ storage: storage });

router.get("/", root);
router.post("/json/upload", upload.single("json_file"), fupload);

export default router;