import { useState } from "react"

const AddTask = ({onAdd}) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()
    if(text === "" || day === "") {
        alert("Please fill in all fields")
        return
    }
    onAdd({text, day, reminder})
    setText("")
    setDay("")
    setReminder(false)
}

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label >Task Name</label>
                <input type="text" placeholder='add task'
                 value={text} onChange={(e)=>
                setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label >day and time</label>
                <input type="text" placeholder='add day and time'
                 value={day} onChange={(e)=>
                    setDay(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label >set reminder</label>
                <input type="checkbox" 
                checked={reminder} 
                 value={reminder} onChange={(e)=>
                    setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value='Save Task' className='btn btn-block'
            />
        </form>
    )
}

export default AddTask
