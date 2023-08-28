const Todo=require("../models/Todo")


exports.getTodo = async (req,res)=>{
    try{
 
       const todo =await Todo.find({});
 
       res.status(200).json({
         success:true,
         data:todo,
         message:" Entire tobo is fetched"
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




exports.getTodobyID = async (req,res)=>{
    try{
       const  id = req.params.id;
       const todo =await Todo.findById({_id:id});
 

        if(!todo){
            res.status(404).json({
                success:false,
                message:"no tobo is fetched"
              })
        }

       res.status(200).json({
         success:true,
         data:todo,
         message:`tobo ${id}  data fetched`
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

 