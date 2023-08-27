import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './Todo.css'

function Todo() {

    // Task (Todo List) State
    const [todo, setTodo] = useState([
        
    ])

    // Temp State

    const [newTask, setNewTask] = useState('')
    const [updateData, setUpdateData] = useState('')

    // Add Task
    const addTask = () => {
        if (newTask) {
            let num = todo.length + 1;
            let newEntry = { id: num, title: newTask, status: false }
            setTodo([...todo, newEntry])
            setNewTask('');
        }

    }
    // delet Task
    const deletTask = (id) => {
        let newTask = todo.filter(task => task.id !== id)
        setTodo(newTask)

    }
    // mark TaskDon
    const markTaskDon = (id) => {
        let newTask = todo.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task;

        })
        setTodo(newTask)

    }
    // UpdateCancel Task
    const UpdateCancel = () => {
        setUpdateData('');

    }
    // ChangeTask Task
    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title: e.target.value,
            status: updateData.status ? true : false
        }
        setUpdateData(newEntry)

    }
    // ChangeTask Task
    const updateTask = () => {
        let filterRecord = [...todo].filter(task => task.id !== updateData.id)
        let updatedObject = [...filterRecord, updateData]
        setTodo(updatedObject)
        setUpdateData('')


    }

    return (
        <>
            {/* Update Task */}
            {
                updateData && updateData ? (
                    <>
                        <div className="row">
                            <div className="col">
                                <input value={updateData && updateData.title} onChange={(e) => changeTask(e)} className="form-control form-control-lg m-3" />
                            </div>
                            <div className="col-auto  ">
                                <button className="btn btn-lg btn-success" onClick={updateTask}>
                                    Update
                                </button>
                                <button onClick={UpdateCancel} className="btn btn-lg btn-warning m-3 ">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </>


                ) : (
                    <>
                        {/* Add Task */}
                        <div className="row p-3">
                            <div className="col">
                                <input value={newTask} onChange={(e) => setNewTask(e.target.value)} className="form-control form-control-lg " />
                            </div>
                            <div className="col-auto">
                                <button onClick={addTask} className="btn btn-lg btn-success">
                                    Add Task
                                </button>
                            </div>
                        </div>
                    </>

                )
    }


            {/* Display Todo */}

            {todo && todo.length ? '' : 'No Task'}

            {todo && todo
                .sort((a, b) => a.id > b.id ? 1 : 1)
                .map((task, index) => {
                    return (
                        <React.Fragment key={task.id} >
                            <div className="col taskBg">
                                <div className={task.status ? 'done' : ''}>
                                    <span className='taskNumber'>{index + 1}</span>
                                    <span className='taskText'>{task.title}</span>
                                </div>
                                <div className="iconwrap">
                                    <span title='Completed / Not Completed' onClick={(e) => markTaskDon(task.id)}><FontAwesomeIcon icon={faCircleCheck} /></span>
                                    {task.status ? null : (
                                        <span title='Edit' onClick={() => setUpdateData({
                                            id: task.id,
                                            title: task.title,
                                            status: task.status ? true : false
                                        })}><FontAwesomeIcon icon={faPen} /></span>

                                    )}

                                    <span title='delete' onClick={() => deletTask(task.id)}               ><FontAwesomeIcon icon={faTrashCan} /></span>
                                </div>
                            </div>

                        </React.Fragment>
                    )

                })}
        </>
    )
}

export default Todo
