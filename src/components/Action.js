import React, {useState, useEffect} from 'react';

import './compo.css';

function Action () {
  

        const [name, setName] = useState('');
        const [userName, setUsername] = useState('');
        const [followers, setFollowers] = useState('');
        const [following, setFollowing] = useState('');
        const [repos, setRepos] = useState('');
        const [avatar, setAvatar] = useState('');
        const [id, setId] = useState('');
        const [userInput, setUserInput] = useState('');
        const [isGreen, setIsGreen] = useState(false);
        const [error, setError] = useState(null);
        const [newName, setNewName] = useState('');
        const [newUserName, setNewUsername] = useState('');
        const [newFollowers, setNewFollowers] = useState('');
        const [newFollowing, setNewFollowing] = useState('');
        const [newRepos, setNewRepos] = useState('');
        const [newAvatar, setNewAvatar] = useState('');
       
     
        useEffect(()=>{
            getUsers();
            
      }, []);

      const getUsers = () => {
        fetch('https://api.github.com/users/example')
        .then(res => res.json())
        .then(data=> {
            setData(data)
        });
      }

      const setData = ({ 
          name, 
          login, 
          followers,
          following,
          public_repos, 
          avatar_url, 
          id }) => {
          setName(name);
          setUsername(login);
          setFollowers(followers);
          setFollowing(following);
          setRepos(public_repos);
          setAvatar(avatar_url);
          setId(id);
      };
       
      const handleSearch = e => {
         setUserInput(e.target.value);
         getUser();  
      
        
      };
    
      const getUser = () => {
        fetch(`https://api.github.com/users/${userInput}`)
        .then(res => res.json())
        .then(data => {
            
            if(data.message){
                setError(data.message);
            } else {
                setData(data);
                setError(null);
            }
        });
      }
       const greenButton = (e)=> {
           setNewName(name)
           setNewUsername(userName)
           setNewFollowers(followers)
           setNewRepos(repos)
           setNewFollowers(following)
       
        setNewAvatar(avatar)
        
       
          setIsGreen(prevState => ({
            isGreen: !prevState.isGreen
          }));

      };
      const redButton = ()=> {
          setIsGreen(false);
      };

          const decider = (newName === name ? " match": (       <div>
            <div className="card">
                  <div className="row">
                          <div class="col-5">
                          <img className="rounded-circle" src={avatar} alt="Card image cap"/>
                          </div>
                          <div class="col">
                              <div className="row">
                                         <div className="col-8">
                                         <h4>{userName}</h4>
                                         <p>@{name}</p>
                                         </div>
                                         <div className="col-4">
                                         <i class="fas fa-plus-circle" onClick={()=> greenButton(name)}></i>
                                         </div>
                              </div>
                             
                              <div className="row">
                                         <div className="col-4">
                                         <p>{followers}</p>
                                         <p>followers</p>
                                         </div>
                                         <div className="col-4">
                                         <p>{following}</p>
                                         <p>following</p>
                                         </div>
                                         <div className="col-4">
                                         <p>{repos}</p>
                                         <p>Repos</p>
                                         </div>
                              </div>
                          </div>
                 </div>
             </div>
            </div>));

        return(
            <div>
               <div>
               
               <form action="#" className="form-group" >    
                     <input type="text" onChange={handleSearch} />    
                 </form>
               </div>
               {isGreen ? ( 
                     <div>
                     <div className="card">
                           <div className="row">
                                   <div class="col-5">
                                   <img className="rounded-circle" src={newAvatar} alt="Card image cap"/>
                                   </div>
                                   <div class="col">
                                       <div className="row">
                                                  <div className="col-8">
                                                  <h4>{newUserName}</h4>
                                                  <p>@{newName}</p>
                                                  </div>
                                                  <div className="col-4">
                                                  <i class="fas fa-plus-circle" onClick={redButton}></i>
                                                  </div>
                                       </div>
                                       
                                       <div className="row">
                                                  <div className="col-4">
                                                  <p>{newFollowers}</p>
                                                  <p>followers</p>
                                                  </div>
                                                  <div className="col-4">
                                                  <p>{newFollowing}</p>
                                                  <p>following</p>
                                                  </div>
                                                  <div className="col-4">
                                                  <p>{newRepos}</p>
                                                  <p>Repos</p>
                                                  </div>
                                       </div>
                                   </div>
                          </div>
                      </div>
                     </div>
               ) : ( 
                    <div>
                   <h1>No user has been ticked yet</h1>
               </div>
               )}

               {error ? (<h1>{error}</h1>): ( 
                   decider
                 )}    
            </div>
        );
    


}
export default Action;