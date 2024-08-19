let names = ['Erika Musterman', 'John Doe'];
let phoneNumber = ['01742938413', '01741278645'];

function render() {
  let content = document.getElementById("content");
  content.innerHTML = '';
  content.innerHTML += `<h1>My Contacts</h1>`;

  for(let i = 0; i < names.length; i++){

    const name = names[i];
    const phoneNumber = phoneNumber[i];

    content.innerHTML += `
    <div>
    <b>Name:</b>${name}<br>
    <b>Telefon:</b>${phoneNumber}<br> 
    </div>
    
    `;
  }
}
