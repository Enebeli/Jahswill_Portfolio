const currentYear = new Date().getFullYear();
document.getElementById('my-footer').innerHTML = `&copy; ${currentYear} Enebeli Jahswill. All rights reserved.`;

document.getElementById('btn-alert').addEventListener('click', () => {
    alert('Hi Stephen, I am so sorry this is coming late.');
});

const hoverButton = document.getElementById('btn-hover');

hoverButton.addEventListener('mouseover', () => {
    hoverButton.textContent = 'New button label';
});

hoverButton.addEventListener('mouseleave', () => {
    hoverButton.textContent = 'Default button label';
});
let count = 1;
        document.getElementById('btn-counter').onclick = () => {
            count = count + 1;
            document.getElementById('txt-counter').innerHTML = `Number: ${count}`;
        };
        const numbersList = document.getElementById('numbers');
        for (let i = 1; i <= 100; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
            numbersList.appendChild(listItem);
        }
        