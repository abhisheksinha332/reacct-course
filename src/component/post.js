import React from 'react';
import { Link } from 'react-router-dom';


const Post = () => {

    const ids = [
        {id:'1' , name:'Link 1' },
        {id:'2' , name:'Link 2' },
        {id:'3' , name:'Link 3' }
    ]

    const list = ids.map((item) => {
        return (
            <span key={item.id}>
                <Link to ={item.id}>{item.name}</Link><br/>
            </span>
        )
    })

    return(
        <div>
           {/* <Link to = "/post/1">Link 1</Link><br/>
           <Link to = "/post/2">Link 2</Link><br/>
           <Link to = "/post/3">Link 3</Link> */
           list
           }

           
        </div>
    )
}

export default Post;