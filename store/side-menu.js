const SHOW_SIDE_MENU = 'SHOW_SIDE_MENU';
const HIDE_SIDE_MENU = 'HIDE_SIDE_MENU';

export const state = () => ({
    isActive: false
});

export const mutations = {
    [SHOW_SIDE_MENU](state) {
        state.isActive = true;
    },
    [HIDE_SIDE_MENU](state) {
        state.isActive = false;
    }
};

export const actions = {
    showSideMenu({ commit }) {
        commit(SHOW_SIDE_MENU);
    },
    hideSideMenu({ commit }) {
        commit(HIDE_SIDE_MENU);
    }
};
