import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';

import { getAllPosts } from '../../../service/api';
import { API } from '../../../service/api';

//components
import Post from './Post';

const Posts = () => {
    const [posts, getPosts] = useState([]);
    
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

  

    useEffect(() => {
        const fetchData = async () => { 
            let response = await API.getAllPosts({ category : category || '' });
            if (response.isSuccess) {
                console.log(response.data)
                getPosts(response.data);
            }
        }
        fetchData();
    }, [category]);

    return (
        <>
            {
                posts?.length ? posts.map(post => (
                    <Grid key={post._id} item lg={3} sm={4} xs={12}>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={`details/${post._id}`}>
                            <Post post={post} />
                        </Link>
                    </Grid>
                )) : <Box style={{color: '878787', margin: '30px 80px', fontSize: 18}}>
                        You can buy attention (advertising). You can beg for attention from the media (PR). You can bug people one at a time to get attention (sales). Or you can earn attention by creating something interesting and valuable and then publishing it online for free. ~David Meerman Scott
                    </Box>
            }
        </>
    )
}

export default Posts;