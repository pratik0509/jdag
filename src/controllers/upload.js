export default function(req, res) {
    res.redirect("/dag/" + req.file.filename);
}