import fs from "fs";
import path from "path";

export default function (req, res) {
    var location = path.join(__dirname, "../../public/uploads/", req.params.filename);
    var file = fs.readFileSync(location, 'utf-8');
    res.send(file);
}