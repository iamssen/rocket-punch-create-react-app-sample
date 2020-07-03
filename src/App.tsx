import { GithubUserRepo } from '@ssen-temp/github-user-repo';
import { useGithubRepos } from '@ssen-temp/use-github-repos';
import React from 'react';
import './App.css';

function App() {
  const repos = useGithubRepos('iamssen');
  
  return (
    <div>
      <ul>
        {
          repos.map(repo => (
            <GithubUserRepo key={repo.full_name} repo={repo}/>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
