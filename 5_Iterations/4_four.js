// forof Loop on Object



const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key); //only print key info
    // console.log(myObject[key]); //only print values info
    // console.log(`${key} shortcut is for ${myObject[key]}`); //print both key & values
}


