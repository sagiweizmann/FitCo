import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()

    const [form, setForm] = useState({
        title: '',
        load: '',
        reps: ''
    })

    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    
    const { title, load, reps } = form;

    const handleChange = (e) => {
        setForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    console.log('WorkoutForm state:', form)
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in to add a workout')
            return
        }

        const workout = { title, load, reps }

        const response = await fetch('https://fitco-oblz.onrender.com/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(workout)
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setForm({ title: '', load: '', reps: '' })
            setError(null)
            setEmptyFields([])
            console.log('Workout added successfully', json)
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
        }
    }
    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            {
                [{ name: 'title', label: 'Exercise Title' }, { name: 'load', label: 'Load (in kg)' }, { name: 'reps', label: 'Reps' }]
                    .map(field => {
                        return (
                            <div key={field.name}>
                                <label>{field.label}:</label>
                                <input
                                    name={field.name}
                                    type="text"
                                    onChange={handleChange}
                                    value={form[field.name]}
                                />
                            </div>
                        )
                    }
                    )}
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>

    )
}

export default WorkoutForm