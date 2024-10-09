const players = [75, 65, 66, 48, 35, 56, 32, 79, 21];
// const filterAges = players.filter(p => p > 50);
// const filterAges = players.filter(p => p > 70);
// const filterAges = players.filter(p => p > 80);
// const filterAges = players.filter(p => p % 2 === 1);
const filterAges = players.filter(p => p % 2 === 0);
console.log(filterAges);


const friends = ['Kalam', 'balamn', 'salam', 'Doyalmia', 'tim'];
const oddFriends = friends.filter(frd => frd.length > 5);
console.log(oddFriends);