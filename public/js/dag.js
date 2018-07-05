function renderGraph(fname) {
    console.log(fname);
    
    $.ajax({
        url: '/get/' + fname,
        async: false,
        success: function (data) {
            let graph = {
                nodes: [],
                edges: [],
            };
            console.dir(data);
            data = JSON.parse(data);
            let level = 0;
            let edgeId = 0;
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    console.log('key: ' + key);
                    
                    if (key == 'topo_order')
                        continue;
                    graph.nodes.push({
                        id: key,
                        label: key + "(" + data[key]['TYPE'] + ")",
                        size: 1 + data[key]['INPUT'].length + Math.random(),
                        y: level,
                        x: Math.random() / 4,
                        color: '#616',
                    });
                    level += 0.1;
            
                    for (var nd of data[key]['INPUT']) {
                        graph.edges.push({
                            id: 'e' + edgeId,
                            source: nd,
                            target: key,
                            size: 3,
                            color: '#ccc',
                            type: 'arrow'
                        });
                        edgeId += 1;
                    }
                }
            }
        
            var s = new sigma({
                graph: graph,
                container: 'graph-container',
            });
        }
    })
};