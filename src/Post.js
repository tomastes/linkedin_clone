import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React,{forwardRef} from 'react'
import InputOptions from './InputOptions'
import './Post.css'
const Post = forwardRef( ({name,description,message,photoUrl,avatarSrc},ref) => {
    
    return (
        <div ref={ref} className="post">
            <div className="post_header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>
        <div className="post_body">
            <p>{message}</p>
        </div>
        {/* icons */}
        <div className="post_buttons">
            <InputOptions Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
            <InputOptions Icon={ChatOutlined} title="Comment" color="gray"/>
            <InputOptions Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOptions Icon={SendOutlined} title="Send" color="gray"/>
        </div>
        </div>
    )
})

export default Post
