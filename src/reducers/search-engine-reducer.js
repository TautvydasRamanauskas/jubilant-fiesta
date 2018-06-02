const changeGoogleState = (state, action) => {
    const {yandex, cache} = state;
    const google = action.state;
    return {
        ...state,
        google,
        cache: cache || (!yandex && !google)
    }
};

const changeYandexState = (state, action) => {
    const {google, cache} = state;
    const yandex = action.state;
    return {
        ...state,
        yandex,
        cache: cache || (!yandex && !google)
    }
};

const changeCacheState = (state, action) => {
    const {yandex, google} = state;
    const cache = action.state;
    return {
        ...state,
        cache: cache || (!yandex && !google)
    }
};

export default (state = {}, action) => {
    switch (action.type) {
        case 'GOOGLE_CHANGE':
            return changeGoogleState(state, action);
        case 'YANDEX_CHANGE':
            return changeYandexState(state, action);
        case 'CACHE_CHANGE':
            return changeCacheState(state, action);
        default:
            return state;
    }
};
