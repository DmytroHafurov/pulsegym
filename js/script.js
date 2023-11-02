let scrollwhy = document.getElementById('scrollwhy');
let targetwhy = document.getElementById('why');

scrollwhy.addEventListener('click', function() {
  targetwhy.scrollIntoView({ behavior: 'smooth' });
});

let scrolltrainers = document.getElementById('scrolltrainers');
let targettrainers = document.getElementById('trainers');

scrolltrainers.addEventListener('click', function() {
  targettrainers.scrollIntoView({ behavior: 'smooth' });
});

let scrollcontact = document.getElementById('scrollcontact');
let targetcontact = document.getElementById('contact');

scrollcontact.addEventListener('click', function() {
  targetcontact.scrollIntoView({ behavior: 'smooth' });
});