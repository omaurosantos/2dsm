/* A basic graph usage example
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

import { Graph } from "./graph";

let g = new Graph(['mg', 'sp', 'rj', 'pr']);

/*
minas gerais - sao paulo (450km)
rio de janeiro - sp (350km)
parana - sao paulo (378km)
*/
console.log(g.adj_matrix);
console.log(g.vertices);


g.connect_vertices("mg","sp", 450);
g.connect_vertices("rj", "sp", 350);
g.connect_vertices("pr", "sp", 378);
console.log("\n");
g.print();

g.vertices.forEach((city)=>{
    console.log("Nodes connected to ", city, " : ", g.get_connected_vertices(city));
});




