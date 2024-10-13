import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';
const FeedbackContext=createContext()
export const FeedbackProvider=({children})=>{
    const [feedback,setfeedback]=useState([
        {
            id :1,
            text:'this is from feedback list 1',
            rating:8,
        },
        {
            id :2,
            text:'this is from feedback list 2',
            rating:7,
        },
        {
            id :3,
            text:'this is from feedback list 3',
            rating:3,
        }
    ])
    const [feedbackEdit,setFeedbackEdit]= useState({
        item:{},
        edit: false
    })
    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit : true
        })
     }
    const addFeedback=(newFeedback)=>{
        newFeedback.id=uuidv4()
              console.log(newFeedback)
              setfeedback([newFeedback,...feedback])
  
     }
     const updateFeedback=(id,updItem)=>{
            setfeedback(feedback.map((item)=> item.id=== id ?{...item,...updItem}: item))
     }
    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete?')){
           setfeedback(feedback.filter((item)=>item.id!==id))
        }
     }
   return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
   }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext