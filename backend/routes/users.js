const User = require("../Models/User");
const router = require("express").Router();
const verify = require('./verified')


// update
// so when i hit this endpoint, verify is going to run first because it's middleware and the pass to the main function
router.put("/:id",verify,async(req,res)=>{
    console.log("This is params from the url ",req.params);
    // req should have an id?
    console.log(req.body);
    try{
        if(req.user.id===req.params.id){

            let updateUser = await User.findById(req.params.id);
            if(!updateUser) return res.send("User not found, id does not exist");

            // SUCH AN ELEGANT SOLUTIONS, TAKE A NOTE OF THIS

            Object.entries(req.body).forEach(([key,value])=>updateUser[key]=value);
            // by writing save this wil go through all the validation and pre middleware
            await updateUser.save();
            res.json(updateUser)
        }else{res.send("Lmao galat id hai ")}
    }catch(err){
        res.send(err.message);
    }
})
// delete
router.delete('/:id',verify,async(req,res)=>{
    if(req.user.id === req.params.id){
        console.log("valid id")
        try{

            await User.findByIdAndDelete(req.params.id);
             res.status(200).json("User had been deleted");
        }catch(err){
            res.send(err.message);
        }
    }
    else{
        res.send("This Id does not belong to use")
    }
})

// get  

router.get('/find',verify,async(req,res)=>{
        console.log(req.user.id)
        try{

            res.json(await User.findOne(req.user.id));
            //  res.status(200).json("User had been deleted");
        }catch(err){
            res.send(err.message);
        }
   
})

// get all
router.get('/find/all',verify,async(req,res)=>{
    try{
        res.json(await User.find(req.user.id))
    }catch(err){
        res.send(err.message);
    }

})
// get user stats



module.exports = router;