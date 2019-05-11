'use strict'; 
    const fs = require('fs'); 
    let rawdata = fs.readFileSync('st2.json');
    let student = JSON.parse(rawdata); 
    console.log(student);
