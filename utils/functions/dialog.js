export const showDialog = () => {
    const body = document.body;
    body.classList.add('body-overflow-hidden');
};

export const closeDialog = () => {
    const body = document.body;
    body.classList.remove('body-overflow-hidden');
};
