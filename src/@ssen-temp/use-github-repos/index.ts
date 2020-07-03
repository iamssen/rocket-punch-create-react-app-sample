import { useEffect, useState } from 'react';

export interface UserRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  created_at: string;
  language: string;
}

export function useGithubRepos(userId: string) {
  const [repos, setRepos] = useState<UserRepo[]>([]);
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}/repos`).then(res => res.json()).then(setRepos);
  }, [userId]);
  
  return repos;
}