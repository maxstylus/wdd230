// set current year in footer
const currentDate = new Date.now();
document.querySelector('#year').textContent = currentDate.getFullYear();

// set the last modified date in footer
const lastmodifiedDate = new Date(document.lastModified).toLocaleDateString()
+ " " + new Date(document.lastModified).toLocaleTimeString();

document.querySelector('#lastModified').innerHTML = lastmodifiedDate;