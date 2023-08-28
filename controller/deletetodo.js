const Todo=require("../models/Todo")


exports.deleteTodo = async (req,res)=>{
    try{
       const  {id} = req.params;
     
 
      await Todo.findByIdAndDelete(id)

       res.status(200).json({
         success:true,
     
         message:`tobo delete  data successfully`
       })
    }
    catch(err){
      console.log(err);
      console.error(err);
      res.status(500).json({
         success:false,
         data:" server error",
         message:err.message
      })
    }
 }