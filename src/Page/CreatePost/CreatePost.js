import React from 'react';

const CreatePost = () => {

const submitPost= (event)=> {
     event.preventDefault()
     const form = event.target;
     const postText = form.postText.value;
     console.log(postText)

     const postWords = {
          postText
     }

     fetch('http://localhost:5000/posts', {
          method:'POST',
          headers:{
               'content-type': 'application/json'
          },
          body: JSON.stringify(postWords)
     })
     .then(res => res.json())
     .then(data => console.log(data))
     .catch(error => {
          console.log(error)})
}
     

     return (
          <div className='border-2 mx-2'>
               <form onSubmit={submitPost}>
                    <div className='flex justify-around mt-8'>
                         {/* <img src="" alt="" /> */}
                         <p> user img</p>
                         <textarea name="postText" id="" className=' w-3/4 border p-1' placeholder='Whats in your mind? '></textarea>
                    </div>
                    <div className='flex justify-around my-5'>
                         <div>
                              <label htmlFor="postImg" className='w-28 border px-2 py-1'>img + video</label>
                              <input type="file" id='postImg' className="file-input file-input-bordered file-input-info hidden " />
                         </div>

                         <input className='btn btn-info' type="submit" name="post" id="" value='Post' />
                    </div>
               </form>
          </div>
     );
};

export default CreatePost;