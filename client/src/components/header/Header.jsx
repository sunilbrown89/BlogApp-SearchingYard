import {useState} from 'react';
import { AppBar, Toolbar, styled, Button, dividerClasses } from '@mui/material'; 
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';



const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: space-between;
    text-decoration: none;
    
    &> button {
        background-color: white;
        // color: white;
        padding:10px;
        border-radius:8%;
    }
    & div{
        text-decoration: none;
    }
    &> div {

        padding: 20px;
        color: black;
        font-weight:bold;
        text-decoration: none;
        // box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    & >Link{
        text-decoration: none;
    }
    
`

const Header = () => {
    // const localToken=JSON.parse(localStorage.getItem('token'))
    // const [token,setToken]=useState(localToken)
    // console.log(token)

const loginToken=localStorage.getItem('loginToken')
console.log(loginToken)
    const navigate = useNavigate();

    const logout =  () => {
        localStorage.removeItem('loginToken')
        navigate('/account')
        // localStorage.setItem('token','1234')
};

// const login =  () => {
   
//     navigate('/account')
//     // localStorage.setItem('token','1234')
// };
        
    return (
        <Component>
            <Container>
                <button><Link to='/'>HOME</Link></button>
                <div>  {loginToken?  <div>{`Hii ${localStorage.getItem('loginToken')}`}</div>:<div></div>}</div>
                
                <button>{loginToken?<div onClick={logout}><Link to='/account'>LOGOUT</Link></div>:<div onClick={logout}><Link to='/account'>LOGIN</Link></div>}</button>
            </Container>
        </Component>
    )
}

export default Header;