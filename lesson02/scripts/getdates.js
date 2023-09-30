// set current year in footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// set the last modified date in footer
const lastmodifiedDate = new Date(document.lastModified);
document.querySelector('#lastModified').innerHTML = lastmodifiedDate;




