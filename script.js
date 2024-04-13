'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecords => {
    console.log(MutationRecords);
});