import React from 'react'

import RepoElement from './repoElement'

export default (props) => (
  <div>
    {props.repos.map((el, idx) => <RepoElement key={el.id} repo={el} />)}
  </div>
)
