
//constants for getting the elements from the HTML document by their class or ID
const table = document.getElementById('comments');
const button = document.querySelector('.js-submit-button');
const formName = document.querySelector('#name');
const email = document.querySelector('#email');
const comments = document.querySelector('#comment');

//adds an event listener to the submit button in the HTML that will take the name, email, and comment written in the form, and add them to the table in a new row, starting by adding the function for the default event that will create the constants for nameValue, emailValue, and commentValue, as well as console log it to make sure it works
button.addEventListener('click', (e) => {
    const nameValue =  formName.value;
    const emailValue = email.value;
    const commentValue = comment.value;
    console.log(`ADD: name= ${nameValue}, email= ${emailValue}, comments= ${commentValue}`);

    //creates a new row that will display the above created constants on the page in the table using a template literal and referencing the table constant created above and querying it for the tbody element, and creating a new HTML element to append to the table as a row
    let row = `<tr>
    <td>${nameValue}</td>
    <td>${emailValue}</td>
    <td>${commentValue}</td>
    </tr>`;
    table.querySelector('tbody').append(createHTMLElement(row));
});

//boilerplate code for appending html in javascript
function createHTMLElement(html) {
const element = document.createElement('template');
element.innerHTML =html;
return element.content.firstElementChild;
}