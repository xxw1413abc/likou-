 var findOrder = function(numCourses, prerequisites) {
    let courses = Array(numCourses).fill(0)           
    let obj = {}                                      
    prerequisites.forEach(item => {
      let [one, two] = item                            
      courses[one]++                                   
      obj[two] ? obj[two].push(one) : obj[two] = [one] 
    })
    let res = []
    let queue = []                    
…          queue.push(item)
        }
      })
    }
    
    return res.length === numCourses ? res : []
  };

