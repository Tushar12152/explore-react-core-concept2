export default function Singer({singer}){
    console.log(singer)
    const {name,age}=singer;
    const style={
        backgroundColor:'gray',
        padding:'5px',
        margin:'1px',
        borderRadius:'10px'
    }
    return (
        
         <div style={style}>
            
             <h4 className="title">name:{name}</h4>
             <p>age:{age}</p>
         </div>
    )
}