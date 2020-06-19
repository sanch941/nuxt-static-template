const WIDGET_FORM_MODAL_TOGGLE = 'WIDGET_FORM_MODAL_TOGGLE';

export const state = () => ({
    open: false
});

export const mutations = {
    [WIDGET_FORM_MODAL_TOGGLE](state, payload) {
        state.open = payload;
    }
};

export const actions = {
    widgetFormModalToggle({ commit }, payload) {
        commit(WIDGET_FORM_MODAL_TOGGLE, payload);
    }
};
