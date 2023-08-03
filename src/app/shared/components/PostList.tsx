
import { useContext, useState } from "react"
import { PostContext, usePost } from "../context/PostContext"

export const PostList = () => {
    const postCtx = usePost();

    const [titleInput, setTitleInput] = useState('');
    const [bodyInput, setBodyInput] = useState('')

    const handleAddButton = () => {
        if (titleInput && bodyInput) {
            postCtx?.dispatch(
                {
                    type: 'add',
                    payload: {
                        title: titleInput,
                        body: bodyInput
                    }
                }
            )
            setBodyInput('');
            setTitleInput('')
        }
    }

    return (
        <div className=" m-10">
            <div className="flex flex-col gap-5 justify-center items-center ">
                <input
                    className="h-8 rounded-md text-black p-5 w-80" type="text"
                    placeholder="Digite um titulo"
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />

                <textarea
                    className="rounded-md text-black p-5 w-80"
                    placeholder="Digite um corpo"
                    value={bodyInput}
                    onChange={e => setBodyInput(e.target.value)}
                />
                <button onClick={handleAddButton} className="bg-green-600 h-10 w-80 rounded-md hover:bg-green-800">Add</button>
            </div>
            <div className=" mt-10 flex justify-center items-center">
                <div className="flex flex-row flex-1 flex-wrap">
                    {postCtx?.posts.map((item) => (
                        <div className="border p-4 m-5 w-96">
                            <h1>{item.title}</h1>
                            <h3 key={item.id}>{item.body}</h3>
                            <button
                                className="bg-red-600 p-1 rounded-sm text-center mt-5 w-80"
                                onClick={() => postCtx.dispatch({ type: 'remove', payload: { id: item.id } })}
                                >
                                REMOVER
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}