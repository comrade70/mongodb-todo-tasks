const Title = require("../model/Title");

//get all titles
exports.getAllTitles = async (req, res) =>{
    try {
        let titles = await Title.find();
        if(titles.length===0){
            return res.status(404).json({
                success: false,
                message: "No title Found",
            })
        }
        res.status(200).json({
            success: true,
            message: "Title Found",
            titles
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

//get single title
exports.getTitle = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let title = await Title.findOne(id);
        if(!title) return res.status(404).json({
            success: false,
            message: "Title not found"
        });
        res.status(200).json({
            success: true,
            message: "Title found",
            title,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });  
    }
}

//create title
exports.createTitle = async (req, res) => {
   try {
    let title = await req.body;
    let created = await Title.create(title);
    if(!created) return res.status(400).json({
        success: false,
        message: "Title creation failed!"
    });
    res.status(201).json({
        success: true,
        message: "User created successfully",
        title: created
    })
   } catch (error) {
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message
   });
}}

//update title
exports.updateTitle = async (req, res) => {
    try {
        let id = {_id : req.params.id};
        let title = await req.body;
        let update = await Title.findOneAndUpdate(id, title, {new: true});
    
        if(!update) return res.status(400).json({
            success: false,
            message: "Title not updated"
        });
    
        res.status(200).json({
            success: true,
            message: "Title updated",
            title: update
        }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
       });
    }
    
}

//delete title
exports.deleteTitle = async (req, res) => {
    try {
        let id = {_id : req.params.id};
        let deleted = await Title.findOneAndRemove(id);
    
        if(!deleted) return res.status(400).json({
            success: false,
            message: "Title not deleted"
        });
    
        res.status(200).json({
            success: true,
            message: "Title successfully deleted",
            title: deleted
        }) 
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
       });
    }
    
}
