import React from 'react'
import List from '../common/List'

const Navbar = () => {

    const navlist = [
        {list : "Home"},
        {list : "Elements"},
        {list : "feature"},
        {list : "pages"},
        {list : "portfolio"},
        {list : "blogs"},
        {list : "shop"},
    ]
  return (
    <nav >
        <hr  className='opacity-10' />
        <div className="container">
            <div className="flex justify-between  ">
                <div className="">
                    <List lists={navlist} stylebx={"flex gap-4 md:gap-6 font-semibold text-primary uppercase ml-5  "} stylels={"hover:text-brand py-4 border-t-3 border-transparent hover:border-brand " } />
                </div>
                <List lists={[{list : "outlet"} , {list : "buy porto!"}]} stylebx={"flex gap-4 md:gap-6 font-semibold text-primary uppercase ml-5  "} stylels={"hover:text-brand py-4 border-t-3 border-transparent hover:border-brand " }/>
            </div>
        </div>
        <hr  className='opacity-10' />
    </nav>
  )
}

export default Navbar