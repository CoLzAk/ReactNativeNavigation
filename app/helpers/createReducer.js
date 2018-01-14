export const createReducer = (initialState, handlers) => {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type) === false) {
            return state;
        }

        return handlers[action.type](state, action);
    };
};
