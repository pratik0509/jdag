export default function (req, res) {
    console.log('drawgraph: ' + req.params.filename);
    
    res.render('dag', { data: req.params.filename});
}