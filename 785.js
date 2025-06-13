const isBipartite = (graph) => {
    const visited = new Array(graph.length); 

    for (let i = 0; i < graph.length; i++) { 
        if (visited[i]) continue;
        const queue = [i];           
        visited[i] = 1;              

        while (queue.length) {       
            const cur = queue.shift();           
            const curColor = visited[cur];      
            const neighborColor = -curColor;     

            for (let i = 0; i < graph[cur].length; i++) {   
                const neighbor = graph[cur][i];
                if (visited[neighbor] == undefined) {          
                    visited[neighbor] = neighborColor;         
                    queue.push(neighbor);                      
                } else if (visited[neighbor] != neighborColor) { 
                    return false;
                }
            }
        }
    }
    return true; 
};
