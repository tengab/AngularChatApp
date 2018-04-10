
//action
const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
let nextNotificationId = 0

export const addNotification = (name, lastName, text) => ({
    type: ADD_NOTIFICATION,
    id: nextNotificationId++,
    name,
    lastName,
    text,
})

//reducer
const initialState = {
    notifications: [],
}

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTIFICATION:
            console.log('STATE', state.notifications)
            return {
                ...state,
                notifications: state.notifications.concat([
                    {
                        id: action.id,
                        name: action.name,
                        lastName: action.lastName,
                        text: action.text
                    }
                ])
            }
        default:
            return state
    }
}



