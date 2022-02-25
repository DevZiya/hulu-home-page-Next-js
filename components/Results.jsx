import React from 'react'
import Thumbinal from './Thumbinal'

const Results = ({data,filtred}) => {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {filtred === undefined ? data?.map(item=>(
        <Thumbinal key={item.id} item={item}/>
      )):filtred?.map(item=>(
        <Thumbinal key={item.id} item={item}/>
      ))
    
    }
    </div>
  )
}

export default Results