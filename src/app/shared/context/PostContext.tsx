
import { Post } from "@/app/@types/Post";
import { Dispatch, ReactNode, createContext, useReducer, useEffect, useContext } from "react";
import { PostActions, postReducer } from "../reducers/PostReducer";

const KEYSTORE = 'postContext'

type PostContextType = {
    posts: Post[],
    dispatch: Dispatch<PostActions>
}

//criacao do context
export const PostContext = createContext<PostContextType | null>(null)



//criacao do provider
export const PostProvider = ({ children }: { children: ReactNode }) => {

    // config reducerPost
    const [posts, dispatch] = useReducer(
        postReducer,
        JSON.parse(localStorage.getItem(KEYSTORE) || "[]")
    )

    useEffect(() => {
        localStorage.setItem(KEYSTORE, JSON.stringify(posts))
    }, [posts])


    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            {children}
        </PostContext.Provider>

    )
}

//criacao de hoock para o context
export const usePost = () =>  useContext(PostContext);