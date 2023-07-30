import User from '../models/User.js'


  export const createUser=async(req, res)=>{
    const newTour=  new User(req.body);
    try {
        const savedTour=await newTour.save();
        res.status(200).json({
            sucess:true,
            message:"Successfully created",
            data:savedTour
        })
    } catch (err) {
        res.status(500).json({
            sucess:false,
            message:"Failed to create"
        })
    }
  }

// update User
  export const updateUser=async(req, res)=>{
    const id=req.params.id;
    try {
        const updateTour=await User.findByIdAndUpdate(id, {
            $set: req.body,
        }, {new:true})
        res.status(200).json({
            sucess:true,
            message:"Successfully updated",
            data:updateTour
        })
    } catch (err) {
        res.status(500).json({
            sucess:false,
            message:"Failed to update"
        })
    }
  }
// delete User
  export const deleteUser=async(req, res)=>{
    const id=req.params.id;
    try {
        const deleteTour=await User.findByIdAndDelete(id)
        res.status(200).json({
            sucess:true,
            message:"Successfully deleted",
            data:deleteTour
        })
    } catch (err) {
        res.status(500).json({
            sucess:false,
            message:"Failed to delete"
        })
    }
  }
// getSingle User
  export const getSingleUser=async(req, res)=>{
    const id=req.params.id;
    try {
        const tour=await User.findById(id)
        res.status(200).json({
            sucess:true,
            message:"Successfully",
            data:tour
        })
    } catch (err) {
        res.status(404).json({
            sucess:false,
            message:"not found"
        })
    }
  }
// getAll User
  export const getAllUser=async(req, res)=>{
    const page=parseInt(req.query?.page)
    console.log(page)
    try {
         const tours=await User.find({}).skip(page*8).limit(8)
        res.status(200).json({
            sucess:true,
            message:"Successful",
            count:tours.length,
            data:tours
        })
    } catch (err) {
        res.status(404).json({
            sucess:false,
            message:"not found"
        })
    }
  }













