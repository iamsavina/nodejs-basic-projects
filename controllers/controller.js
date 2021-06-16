let list = require("../res/list")

let currentList = list

const showToDo = (req,res)=>{
    res.status(200).json(currentList)
}

const createDo = (req,res)=>{
    const {id,task} = req.body
    if (!id || !task){
        return res.status(404).json({status:"failed",error:"id or task not defined correctly"})
    }
    currentList = [...currentList,{id:id,task:task}]
    res.status(201).json(currentList)
}

const editDo = (req,res)=> {
    const { id }  = req.params
    const { task } = req.body

    //check if that task exists    
    const chosenOne = currentList.find((task)=> task.id === Number(id)) 
    if (!chosenOne){
        return res.status(404).json({status:"failed",error:"task id not found"})
    }

    //editing the specific task
    currentList = currentList.map((tasks)=>{
        if (tasks.id === Number(id)){
            tasks.task = task
        }
        return tasks
    })
    res.status(201).json(currentList)
}

const deleteDo = (req,res)=>{
    const task = currentList.find((tasks)=> tasks.id === Number(req.params.id))
    if (!task){
        //no task
    }

    currentList = currentList.filter(
        (tasks) => tasks.id !== Number(req.params.id)
    )
    res.status(201).json(currentList)
}

module.exports = { showToDo,createDo,editDo,deleteDo }