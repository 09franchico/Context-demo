
import { useContext, useState } from "react"
import { PostContext, usePost } from "../context/PostContext"

export const PostList = ()=>{
    const postCtx = usePost();

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('')

    const handleAddButton = ()=>{
        if(titleInput  && bodyInput){
            postCtx?.dispatch(
                {
                    type:'add',
                    payload:{
                        title:titleInput,
                        body:bodyInput
                    }
                }
            )
            setBodyInput('');
            setTitleInput('')
        }
    }

    return(
        <div className=" m-10">
            <div className="flex flex-col gap-5 max-w-sm ">
                <input 
                  className="h-8 rounded-md text-black p-5" type="text"
                   placeholder="Digite um titulo" 
                   value={titleInput}
                   onChange={e=> setTitleInput(e.target.value)}
                   />

                <textarea 
                     className="rounded-md text-black p-5" 
                     placeholder="Digite um corpo" 
                     value={bodyInput}
                     onChange={e=>setBodyInput(e.target.value)}
                     />
                <button onClick={handleAddButton} className="bg-green-600 h-10 rounded-md hover:bg-green-800">Add</button>
            </div>
            <div>
                <ul>
                    {postCtx?.posts.map((item)=>(
                        <div>
                            <h2>{item.title}</h2>
                            <li key={item.id}>{item.body}</li>
                            <li className="bg-red-600 p-5 max-w-sm" onClick={()=> postCtx.dispatch({type:'remove',payload:{id:item.id}})}>REMOVER</li>

                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}