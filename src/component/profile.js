import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../hoc/card';
import Auth from '../hoc/auth';


const Profile = (props) => {

    // const Redir = () => {
    //     return(
    //          <Redirect to="/" />
    //     )
    // }

    return(
        <Auth>
        <Card>
            <Link to={{
                pathname: `${props.match.url}/post`
            }}>Take me to /profile/post</Link>

            {/* {Redir()} */}

            
        </Card>
        </Auth>
    )
}

export default Profile;