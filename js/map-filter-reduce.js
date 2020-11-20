const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeOrMore = users.filter(user => user.languages.length > 2);
console.log(threeOrMore);

const arrayOfStrings = users.map(user => user.email);
console.log(arrayOfStrings);


const experience = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
}, 0);
console.log(experience);
console.log(experience / users.length);


const longestEmail = arrayOfStrings.reduce((a, b) => {
    return a.length > b.length ? a:b;
},"");
console.log(longestEmail);

const usernames = users.reduce((users,user) =>{
    return users + ", " + user.name;
},"");
console.log(usernames.split(" "));



