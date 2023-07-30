
import { useContext } from "react"
import { PostContext } from "../context/PostContext"

export const Footer = ()=>{
    const postCtx = useContext(PostContext)
    return(
        <div>
            Quantidade de POST : {postCtx?.posts.length}
        </div>
    )
}