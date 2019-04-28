import * as types from "./mutation-type.js";

export default {
    nameAsyn({ commit }, { name, age }) {
        commit(types.SET_NAME, name);
        commit(types.SET_AGE, age);
    }
};
