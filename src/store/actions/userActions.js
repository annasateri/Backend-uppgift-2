import axios from 'axios';
import actiontypes from '../actiontypes';
// import jwt_decode from 'jwt-decode';
import jwt from 'jsonwebtoken'


export const registerUser = user => {
  return async dispatch => {
    const _user = {
      email: user.email,
      password: user.password
    }
    await axios.post('http://localhost:9999/api/users/register', user)
    dispatch(login(_user))
  }
}

export const login = (user) => {
    return async dispatch => {
        axios.post('http://localhost:9999/api/users/login', user)
        .then(res => {
            if(res.status === 200) {
                localStorage.setItem('token', res.data.token)
                dispatch(checkUser(true))
                dispatch(check())
            }
        })
        .catch(err => console.log(err))
    }
}

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token')
        dispatch(check())
    }
}

  export const checkUser = data => {
    return {
      type: actiontypes().users.loggedIn,
      payload: data
    }
  }

  export const check = () => {
    return dispatch => {
      let token = localStorage.getItem('token')
      let _user = jwt.decode(token)
      if(token) {
        dispatch(user(_user))
        dispatch(checkUser(true))
      } else {
        // console.log('error')
        dispatch(checkUser(false))
        // dispatch(user(null))
      }
    }
  }

  export const user = data => {
    return {
      type: actiontypes().users.oneUser,
      payload: data.user
    }
  }

  export const getUsers = () => {
    return async dispatch => {
      const res = await axios.get('http://localhost:9999/api/users')
      dispatch(setUsers(res.data))
    }
  }

  export const setUsers = (users) => {
    return {
        type: actiontypes().users.setUsers,
        payload: users
    }
}

export const getOneUser = (_id) => {
  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/users/'+ _id)
    dispatch(setUser(res.data))
  }
}

export const setUser = user => {
  return {
    type: actiontypes().users.getUser,
    payload: user
  }
}

export const deleteUser = (_id) => {
  return async dispatch => {
    await axios.delete('http://localhost:9999/api/users/' + _id)
    console.log('user deleted successfully')
  }
}

export const updateUser = (user) => {
  return async dispatch => {
    let update = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
    
    await axios.patch('http://localhost:9999/api/users/' + user._id, update)
    console.log('user updated successfully')
    dispatch(getOneUser(user._id))
  }
}