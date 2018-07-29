/* This rappresent the main window or browser process */

// IPC throw broser process and electron app process
const electron = require('electron');
const { ipcRenderer } = electron;

/* // IPC file system
const fs = require('fs');
console.log(fs); */

// debugging purposes
document.querySelector('input')
        .addEventListener('change', (event) => {
            console.log("file selected");
        });
// when user submit form arrow function ()=> called
document.querySelector('form')
        .addEventListener('submit', (event)=>{
            console.log("form submitted");
            // prevent form to submit it self
            event.preventDefault();
            const { path } = document.querySelector('input').files[0];
            /* send message from main window to electron app process
                video: submittedit's just a name */
            ipcRenderer.send('video:submit', path);
            console.log('ipcRenderer.send: ' + path);
        }); 

// listening for video:metadata event from electron app process
ipcRenderer.on('video:metadata', (event, duration)=>{
    document.querySelector("#result").innerHTML = `video is ${duration} seconds`;
});

//console.log(document.querySelector('#video_inspector'));
        
