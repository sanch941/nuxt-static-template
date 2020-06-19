import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';
import 'codemirror/mode/javascript/javascript.js';

Vue.use(VueCodemirror, {
    options: {
        readOnly: true,
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        theme: 'dracula'
    }
});
