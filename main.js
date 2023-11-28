

const team = [
    {
        name: 'Bill Mahoney',
        role: 'Product Owner',
        img: 'Assets/photo1.png'
    },
    {
        name: 'Saba Cabrera',
        role: 'Art Director',
        img: 'Assets/photo2.png'
    },
    {
        name: 'Shae Le',
        role: 'Tech Lead',
        img: 'Assets/photo3.png'
    },
    {
        name: 'Skylah Lu',
        role: 'UX Designer',
        img: 'Assets/photo4.png'
    },
    {
        name: 'Griff Richards',
        role: 'Developer',
        img: 'Assets/photo5.png'
    },
    {
        name: 'Stan John',
        role: 'Developer',
        img: 'Assets/photo6.png'
    }
];


const teamContainer = document.querySelector('#team-container');

team.forEach(member => {
    const memberDiv = document.createElement('li');
    memberDiv.classList.add('member');

    const memberImg = document.createElement('img');
    memberImg.src = member.img;
    memberImg.alt = member.name;

    const memberName = document.createElement('h3');
    memberName.innerText = member.name;

    const memberRole = document.createElement('p');
    memberRole.innerText = member.role;

    memberDiv.appendChild(memberImg);
    memberDiv.appendChild(memberName);
    memberDiv.appendChild(memberRole);

    teamContainer.appendChild(memberDiv);
}   );