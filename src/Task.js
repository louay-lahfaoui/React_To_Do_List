export const Task = (props) =>{
    return (
        <div className='task'
            style={{backgroundColor : props.completed ? "green":"yellow"}}
        >
            <h1 >{props.taskName}</h1>
            <button onClick={() =>props.deleteTask(props.id)}>Delete</button>
            <button onClick ={()=> props.completeTask(props.id)}>Complete/Uncomplete</button>
          </div>
    )
}