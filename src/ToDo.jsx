// export default function ToDo({task}){
//     const style={
//        backgroundColor:'gray',
//        padding:'30px',
//        borderRadius:'50px',
//        marginBottom:'2px'
//     }
//    return <h3 style={style}>task: {task}</h3>
// }

// export default function ToDo({task , isDone}){
//   return (
//   <li>{ isDone? 'finished':'work On'}:{task}</li>
//   )

// }

// export default function ToDo({task , isDone}){
//       if(isDone){
//         return <li>finished:{task}</li>
//       }
//       else{
//         return <li>work on:{task}</li>
//       }
    
//     }

// export default function ToDo({task , isDone}){
//     if(isDone){
//       return <li>finished:{task}</li>
//     }
    
//       return <li>work on:{task}</li>
    
  
//   }


// export default function ToDo({task , isDone}){
//       return (
//       <li>{ isDone && 'done'}:{task}</li>
//       )
    
//     }


// export default function ToDo({task , isDone}){
//     return (
//     <li>{ isDone || 'learn more'}:{task}</li>
//     )
  
//   }



export default function ToDo({task , isDone}){

    let listItem;
    if(isDone){
       listItem=<li>finished:{task}</li>
    }
    else{
        listItem=<li>work on:{task}</li>
    }
    
    return listItem
  
  }