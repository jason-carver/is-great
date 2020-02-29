import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css';

function Home(){
    return (
        <div>            
            <h1>this where the landing page will go</h1>
<button>
<Link to="/loginpage" className="btn btn-link">Login</Link>
</button>
<button>
<Link to="/registerpage" className="btn btn-link">Register</Link>
</button>
<button>
<Link to="/mdregistrationpage" className="btn btn-link">Provider Reistration</Link>
</button>
           
           
        </div>
        
    )
}

export default Home;



