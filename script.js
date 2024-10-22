const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const profileField = document.getElementById('profile');
const educationContainer = document.getElementById('education-container');
const experienceContainer = document.getElementById('experience-container');
const resetButton = document.getElementById('reset-form');

nameField.addEventListener('input', function() {
    document.getElementById('resume-name').textContent = this.value;
});

emailField.addEventListener('input', function() {
    document.getElementById('resume-email').textContent = this.value;
});

phoneField.addEventListener('input', function() {
    document.getElementById('resume-phone').textContent = this.value;
});

profileField.addEventListener('input', function() {
    document.getElementById('resume-profile').textContent = this.value;
});

document.getElementById('add-education').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter your education';
    educationContainer.insertBefore(input, this);
    
    input.addEventListener('input', function() {
        let listItem = document.createElement('li');
        listItem.textContent = this.value;
        document.getElementById('resume-education').appendChild(listItem);
    });
});

document.getElementById('add-experience').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter your experience';
    experienceContainer.insertBefore(input, this);
    
    input.addEventListener('input', function() {
        let listItem = document.createElement('li');
        listItem.textContent = this.value;
        document.getElementById('resume-experience').appendChild(listItem);
    });
});

document.querySelectorAll('#skills-container input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const selectedSkills = Array.from(document.querySelectorAll('#skills-container input[type="checkbox"]:checked')).map(skill => skill.value);
        const skillsList = document.getElementById('resume-skills');
        skillsList.innerHTML = ''; // clear the previous list
        selectedSkills.forEach(function(skill) {
            let listItem = document.createElement('li');
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
        });
    });
});

resetButton.addEventListener('click', function() {
    document.getElementById('resume-form').reset();
    document.getElementById('resume-name').textContent = '';
    document.getElementById('resume-email').textContent = '';
    document.getElementById('resume-phone').textContent = '';
    document.getElementById('resume-profile').textContent = '';
    document.getElementById('resume-education').innerHTML = '';
    document.getElementById('resume-skills').innerHTML = '';
    document.getElementById('resume-experience').innerHTML = '';
});
