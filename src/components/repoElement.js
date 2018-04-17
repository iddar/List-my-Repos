import React from 'react'

export default ({repo}) => (
  <div className='repo-element'>
    <div className='header'>
      <h3>{repo.name}</h3>
      <small>★ {repo.stargazers_count} ⑂ {repo.forks}</small>
    </div>
    <div className='description'>
      {repo.language != null && <div>language: <span>{repo.language}</span></div>}
      {(repo.license != null && 'name' in repo.license) && <div>license: <span>{repo.license.name}</span></div>}
    </div>
  </div>
)
