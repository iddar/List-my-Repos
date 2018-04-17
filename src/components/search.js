import React from 'react'

export default (props) => (
  <form className='form' onSubmit={props.onSearch}>
    <input
      value={props.username}
      onChange={props.onChange}
      type='text'
      placeholder='username' />
    <input type='submit' value='Buscar' />
  </form>
)
