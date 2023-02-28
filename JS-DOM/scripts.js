const container = document.querySelector('#container');

const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

const redText = document.createElement('p');
    redText.textContent = 'Hey I’m red!'
    redText.style.color = 'red';

const blueH3 = document.createElement('h3');
    blueH3.textContent = 'Hey I’m blue h3!'
    blueH3.style.color = 'blue';

const child = document.createElement('div');
    child.classList.add('children');
    child.style.cssText = "background-color: pink; border: 2px black solid;"

const subChildrenH1 = document.createElement('h1');
    subChildrenH1.textContent = 'I am in a div & I am H1'

const subP = document.createElement('p')
    subP.textContent = 'I am too'


container.append(content);
container.append(redText);
container.append(blueH3);
container.append(child);
child.append(subChildrenH1);
child.append(subP)



//const subH1 = document.createElement('h1');
//subH1.textContent = 'Hey I`m a div'


// const btn = document.querySelector('#btn');
//     btn.onclick = () => alert("Hello World");


// const bt2 = document.querySelector('#btn2');
//     btn2.addEventListener('click', () => {
//         alert("Hello World");
//       });

//     btn2.addEventListener('click', function (e) {
//         console.log(e.target);
//         e.target.style.background = 'blue';
//       });


const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
      });
    });