import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Task = () => {

    let [TaskData, setTaskData] = useState([])
    let [ID, setID] = useState("")


    useEffect(() => { getTask() }, [])

    const getTask = async () => {
        let id = JSON.parse(localStorage.getItem("userId"))
        console.log(id);
        let result = await fetch(`http://localhost:3001/getTask`,
            {
                headers: {
                    'authorization': JSON.parse(localStorage.getItem("token"))

                }
            })

        result = await result.json()

        if (result.status === false) {
            // alert(result.message)
        } else {
            setTaskData(result.data)
        }
    }



    const deleteTasks = async (ID) => {
        let result = await fetch(`http://localhost:3001/deleteTask/${ID}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': JSON.parse(localStorage.getItem("token"))
            }
        })

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            alert(result.message)
            getTask()
        }
    }


    return (

        <div>

            <div className='search'>
                <input
                    type="text"
                    placeholder='Task ID'
                    value={ID}
                    onChange={(e) => setID(e.target.value)} />

                <button onClick={getTask}>All Task</button>
            </div>



            <ul>
                <li><h3>TASK</h3></li>
                <li><Link to="/" >LogOut</Link></li>
            </ul>

            <div>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Priority</th>

                    </tr>
                    {TaskData.length > 0 ?

                        TaskData.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.title}</td>
                                    <td>{val.description}</td>
                                    <td>{val.priority}</td>
                                    <td><Link to={'/updateTask/' + val._id}  ><div>Update</div></Link></td>
                                    <td><button onClick={() => deleteTasks(val._id)}>Delete</button></td>
                                </tr>
                            )
                        }) : <h3>No Task Available!</h3>
                    }
                </table>


            </div>

        </div>
    )

}

export default Task