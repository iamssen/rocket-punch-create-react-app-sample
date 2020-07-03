import React from 'react';

export interface UserRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  created_at: string;
  language: string;
}

export interface GithubUserRepoProps {
  repo: UserRepo;
}

export function GithubUserRepo({ repo }: GithubUserRepoProps) {
  return (
    <li>
      <a href={repo.html_url}>{repo.full_name} ({repo.language})</a>
    </li>
  );
}