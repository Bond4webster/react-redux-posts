import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from "react-redux";
import {DetailsList} from "@fluentui/react"
import {Loader} from "./Loader";
import {deletePost, fetchPosts} from "../redux/actions";

 const Posts = ({syncPosts})=>{
     const dispatch = useDispatch()
     const posts = useSelector(state=>state.posts.fetchPosts)
     const loading = useSelector(state=>state.loader.loading)
     const allPosts = syncPosts.concat(posts)

     const columns = [
         { key: 'column1', name: 'Title', fieldName: 'title', minWidth: 150,  isResizable: true },
         { key: 'column2', name: 'Body', fieldName: 'body', minWidth: 150,  isResizable: true },
     ]

     useEffect(()=>dispatch(fetchPosts()),[])

     if(loading){
         return <Loader />
     }

    if(!allPosts.length){
        return <p className="text-center">Постов пока нет</p>
    }



    return (
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 `}>
                <DetailsList
                    items={allPosts.map(post=>{
                        return (
                            {
                                title:post.title,
                                body: (
                                    <div className="row">
                                        <div className="col-11">{post.body}</div>
                                        <div className="col-1">
                                            <button
                                                className="btn btn-danger"
                                                onClick={()=>dispatch(deletePost(post.id))}
                                            >
                                                Удалить
                                            </button>
                                        </div>
                                    </div>
                                )

                            }
                        )
                        //return <Post title={post.title} body={post.body} id={post.id}/>
                    })}
                    columns={columns}
                    selectionMode={0}
                />
            </div>
        </div>
    )

}

const mapStateToProps = state =>{
    return {
         syncPosts:state.posts.posts
    }
}

export default connect(mapStateToProps,null)(Posts)