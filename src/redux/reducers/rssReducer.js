const rss = (state = [], action) => {
    if (action.type === 'RSS') {
        return action.payload;
    }
    return state;
}

export default rss;