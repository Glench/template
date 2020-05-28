import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
    }
});

// // For pasting in web browsers on other pages
// var div = document.querySelector('#svelte-app');
// if (!div) {
//     div = document.createElement('div');
//     div.setAttribute('id', 'svelte-app');
// }
// const app = new App({
//     target: div,
//     props: {
//     }
// });

export default app;
