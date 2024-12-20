import React from "react";

const BlogCard= () => {
    return(
       <>
        <div className='row'>
            <div className='column' style={{backgroundColor: 'red'}}>
                <div>Column 1</div>
                </div>
            <div className='column' style={{backgroundColor: 'green'}}>
                    <div>Column 2</div>
            </div>
            <div className='column' style={{backgroundColor: 'blue'}}>
                <div>Column 3</div>
            </div>
        </div>
       </>
    );
};

export default BlogCard;