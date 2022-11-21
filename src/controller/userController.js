const User = require("../model/User");

//get all users
exports.getAllUsers = async(req, res) =>{
    try {
        let users = await User.find();
        if(users.length===0){
            return res.status(404).json({
                success: false,
                message: "No user Found",
            })
        }
        res.status(200).json({
            success: true,
            message: "User Found",
            users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

//get single user
exports.getUser = async(req, res) => {
    try {
        let id = {_id: req.params.id}
        let user = await User.findOne(id);
        if(!user) return res.status(404).json({
            success: false,
            message: "User not found"
        });
        res.status(200).json({
            success: true,
            message: "User found",
            user,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });  
    }
}

//create user
exports.createUser = async(req, res) => {
   try {
    let user = await req.body;
    let created = await User.create(user);
    if(!created) return res.status(400).json({
        success: false,
        message: "User creation failed!"
    });
    res.status(201).json({
        success: true,
        message: "User created successfully",
        user: created
    })
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
   });
}}

//update user
exports.updateUser = async (req, res) => {
    try {
        let id = {_id : req.params.id};
        let user = await req.body;
        let update = await User.findOneAndUpdate(id, user, {new: true});
    
        if(!update) return res.status(400).json({
            success: false,
            message: "User not updated"
        });
    
        res.status(200).json({
            success: true,
            message: "User updated",
            user: update
        }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
       });
    }
    
}

//delete user
exports.deleteUser = async (req, res) => {
    try {
        let id = {_id : req.params.id};
        let deleted = await User.findOneAndRemove(id);
    
        if(!deleted) return res.status(400).json({
            success: false,
            message: "User not deleted"
        });
    
        res.status(200).json({
            success: true,
            message: "User successfully deleted",
            user: deleted
        }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
       });
    }
    
}
