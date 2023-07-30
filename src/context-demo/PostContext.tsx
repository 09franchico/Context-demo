"use client"
import { Post } from "@/app/@types/Post";
import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { PostActions, postReducer } from "../context-demo/PostReducer";


type PostContextType = {
    posts:Post[],
    dispatch: Dispatch<PostActions>
}

export const PostContext = createContext<PostContextType | null>(null)

export const PostProvider = ({children}:{children:ReactNode})=>{

    // config reducerPost
    const [posts, dispatch] = useReducer(postReducer,[])

    return(
        <PostContext.Provider value={{posts,dispatch}}>
            {children}
        </PostContext.Provider>

    )
}