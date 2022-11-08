import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes, useNavigate, useParams, useSearchParams} from "react-router-dom";

const Profile = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get('name'));
    console.log(Object.fromEntries(searchParams));

    const navigate = useNavigate()
    const params = useParams();
    const some = params;
    console.log(some);
    return (
        <div>
            profile
            <button onClick={() => navigate('/login')}>logout</button>
    {/*        <button onClick={() => setSearchParams({age: "32"})}>add age</button>*/}
            <button onClick={() => setSearchParams({...Object.fromEntries(searchParams), age: "32"})}>add age</button>

            {/*  <button onClick={() => navigate(-1)}>logout</button> return to a previous page*/}
        </div>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* links*/}
                <NavLink to={"/"}>main</NavLink> ----
                <NavLink to={"/login"}>login</NavLink> ----
                <NavLink to={"/profile"}>profile</NavLink> ----
                <NavLink to={"/profile/1"}>profile-1</NavLink> ----
                <NavLink to={"/profile/settings"} className={(isActive) => {
                    return isActive.isActive ? 'act' : ''
                }}>settings</NavLink> ----
                <a href="https://reactrouter.com/en/main" target={"_blank"} rel={'noreferrer nofollow noopener'}>xxx</a>

                <Routes>
                    <Route path={'/'} element={<div>main</div>}/>
                    <Route path={'/*'} element={<div>404</div>}/>
                    <Route path={'/login'} element={<div>login</div>}/>
                    {/*<Route path={'/profile/:id'} element={<Profile/>}/>*/}
                    <Route path={'/profile/*'} element={<Profile/>}/>
                    <Route path={'/profile/settings'} element={<div>settings</div>}/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
