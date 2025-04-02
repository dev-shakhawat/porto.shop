import React from 'react'

const List = ({lists , stylebx , stylels , islink}) => {
  return (
    <ul className={stylebx}>
        {islink ?
        lists.map((item , index)=>(<li key={index} className={stylels}><a href={islink}>{item.list}</a></li>)) 
        :
        lists.map((item , index)=>(<li key={index} className={stylels}> {item.list}</li>)) 
        }
    </ul>
  )
}

export default List