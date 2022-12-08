import React from 'react';


import guy from "../assets/guy7.jpg";
import dots from "../assets/dots.png";
import car from "../assets/c-class.jpg";
import hearth from "../assets/hearth.png";
import like from "../assets/like.png";
import { BiLike, BiSmile } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import share from "../assets/share.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import Image from "next/image";

const Post = () => {
  return (
    <div className='bg-white rounded-[1rem] px-5 py-4'>
        {/* Header */}
        <div className='flex items-center justify-between '>

         <div className='flex items-center'>
            
            <div className='w-12 h-12 rounded-full'>
            <Image src={guy} className="rounded-full"/>
         </div>
         
         <div className=' ml-3'>
             <p className='font-bold ml-3'>Joe D</p>

             <div className='flex items-center'>
                <p className='text-xs mr-1'>3 hours ago</p>
                
                     <BiWorld className='shrink-0'/>
              
               
             </div>
             
         </div>
            </div>   
         
         <div className='w-10 h-10'>
            <Image src={dots}/>
         </div>
         
        </div>
        
        
        {/* Input */}
         <div className='mt-3 mb-2'>
            <p>My brand new Car</p>
        </div>

        {/* Image */}
        <div className='-mx-4'>
            <Image src={car} className=""/>
        </div>
        {/* Likes + buttons */}
        
        <div className=''>

            <div className='flex items-center justify-between'>

          <div className='flex items-center mt-1 '>

            <div className='w-5 h-5'>
            <Image src={like} className="mr-1"/>
        </div>

        <div className='w-5 h-5'>
            <Image src={hearth}/>
        </div>
        <p className='pl-2'>Attila, Bjorn and 331 like this</p>
        </div>
        <p className='mt-1'>52 comments</p>
       </div>

       
        </div>
        <div className='border-b my-2'>

        </div>
        <div className='flex items-center my-2 justify-between'>
           <div className='flex items-center'>
            <BiLike/> 
            <p className='pl-1'>Like</p>
           </div>
           <div className='flex items-center'>
            <FaRegCommentAlt/>
            <p className='pl-1'>Comment</p>
           </div>
           <div className='flex items-center'>
            <Image src={share} className="w-5 h-5"/>
            <p className='pl-1'>Like</p>
           </div>
            
        </div>

        <div className='border-b'>

        </div>
    
       

      
        
        {/* Comment */}

        <div className='h-[10rem] overflow-y-scroll'>
             <div className=''>
            <div className='flex justify-between my-2'>
                <p> See previus 375  comments</p>
                <div className='flex items-center'>
                     <p>More relevant</p>
                     <RiArrowDownSLine/>
                </div>
               
            </div>
            <div>

                  <div className='flex items-center '>
                <div className='w-10 h-10 rounded-full'>
                    <Image src={guy} className="rounded-full"/>
                </div>
                <p className='font-bold ml-2'>Gall Dorin</p>
                <p className=' ml-10 text-xs md:text-base '>1 comment</p>
            </div>
            <div className='flex ml-[3rem]'>
              <p className='mr-2'>Like</p>
              <p>Share</p>
            </div>

            <div className='flex items-center '>
                <div className='w-10 h-10 rounded-full'>
                    <Image src={guy} className="rounded-full"/>
                </div>
                <p className='font-bold ml-2'>Blaga Attila THe boss</p>
                <p className=' ml-10  text-xs md:text-base'>I belive you</p>
            </div>
            <div className='flex ml-[3rem]'>
              <p className='mr-2'>Like</p>
              <p>Share</p>
            </div>

            <div className='flex items-center '>
                <div className='w-10 h-10 rounded-full'>
                    <Image src={guy} className="rounded-full"/>
                </div>
                <p className='font-bold ml-2'>Attila</p>
                <p className=' ml-10 text-xs md:text-base '>3 comments</p>
            </div>
            <div className='flex ml-[3rem]'>
              <p className='mr-2'>Like</p>
              <p>Share</p>
            </div>
             
            </div>
          
        </div>
        {/* Input */}
        <div className=''>
            <div className='flex items-center mt-4'>
             <div className=' w-10 h-10 rounded-full'>
            <Image src={guy} className="rounded-full"/>
        </div>
        <div className='ml-2 w-full flex items-center'>
            <input type="text" placeholder='write a comment' className="outline-none w-full bg-[#f2f3f7] rounded-[1rem] p-2 w-full"/>
            <div className='rounded-full'>
                <button>Post</button>
            </div>
        </div>
        </div>
       
        </div>
        
        </div>
       
       
        
    </div>
  )
}

export default Post