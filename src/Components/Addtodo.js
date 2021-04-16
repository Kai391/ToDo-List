import React,{useState} from 'react'

export const Addtodo = (props) => {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!Title || !Desc){
            alert("Title and Description shouldn't blank!");
        }
        props.addTodo(Title,Desc);
    }
    return (
        <div className="container">
            <h2>Add To-Do Here!</h2>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputtitle" aria-describedby="TitleHelp" value={Title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={Desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
