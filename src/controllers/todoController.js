import todoModel from "../Model/todoModel";
// add task
export const addTask = async (req,res)=>{
    try{
        const {Task,Duration} =req.body;
        const newTask = await todoModel.create({
            Task,
            Duration,
        })
        return res.status(200).json({
            status:"200",
            message:"New task added succesful",
            data:newTask,
        })
    }
    catch (error){
       return res.status(500).json({
        status:"500",
        message:"Failed to add task",
        error: error.message,
       })
    }
}
// view Tasks
export const ViewAlltask = async(req,res)=>{
try{
    const tasks= await todoModel.find();
    return res.status(200).json({
        status:"200",
        message:"Your tasks are below:",
        data:tasks,
             });
}
catch (error){
    return res.status(500).json({
        status:"500",
        message:"Failed to display Tasks",
        error: error.message,
    })
}
}
// View Task By Id
export const ViewTaskbyId = async (req, res) => {
    const { id } = req.params;
    try {
        const gettask = await todoModel.findById(id);

        if (!gettask) {
            return res.status(404).json({
                status: "404",
                message: "Task not found",
                data: null,
            });
        }

        return res.status(200).json({
            status: "200",
            message: "Task found",
            data: gettask,
        });
    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "Internal Server Error",
            error: error.message,
        });
    }
}
// update Task
export const updateTasks = async(req,res)=>{
    const {id} = req.params;
    try{
const {name,category}= req.body;
const taskId = await todoModel.findById(id);
if(!taskId)
res.status(404).json({
    status:"404",
    message:"Id not found try again",
});
const task = await todoModel.findByIdAndUpdate(id,
    {
        name,
        category,
    })
return res.status(200).json({
    status:"200",
    message:"Task updated succesful",
    data:task,
})
    }
    catch (error){
        return res.status(500).json({
            status:"500",
            message:"Failed to update Tasks",
            error: error.message,
        })
    }
}
// Delete Task
export const Deletetask = async(req,res)=>{
    const {id}=req.params;
    try{
const findId = await todoModel.findById(id);
if(!findId)
return res.status(404).json({
    status:"404",
    message:"Id not found",
    data:null,
});
const deleteTask = await todoModel.findByIdAndDelete(id);
return res.status(200).json({
    status:"200",
    message:"Task deleted successful",
    data:deleteTask,})
    }
    catch (error){
        return res.status(500).json({
            status:"500",
            message:"Failed to Delete Task",
            error: error.message,
        })
    }
}