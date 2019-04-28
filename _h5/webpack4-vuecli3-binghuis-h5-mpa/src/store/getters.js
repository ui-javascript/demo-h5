export const name = state => {
    return state.name;
};

export const age = state => {
    return state.age;
};

export const other = state => {
    return `My name is ${state.name}, I am ${state.age}.`;
};
export const coinHasReceived = state => {
    return state.coinHasReceived;
};
export const avatarFrameHasReceived = state => {
    return state.avatarFrameHasReceived;
};
