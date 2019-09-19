import React from 'react';

export default class Navber extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-light bg-light" fixed="top" >
                    <a class="navbar-brand">Navbar</a>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </div>
        )
    }
    
}

