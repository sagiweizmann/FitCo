import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: dispatchWorkouts } = useWorkoutsContext()

    const logout = () => {
        // remove user from local storage to log user out
        localStorage.removeItem('user')
        // update the workouts in the WorkoutsContext to be null
        dispatchWorkouts({type: 'SET_WORKOUTS', payload: null})
        // update the user in the AuthContext
        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}