import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        // remove user from local storage to log user out
        localStorage.removeItem('user')

        // update the user in the AuthContext
        dispatch({type: 'LOGOUT'})
    }

    return { logout }
}