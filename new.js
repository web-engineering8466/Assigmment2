var myShows = ['You are beautifull', 'You live in Bd', 'Bd belongs to asia', 'Bd is so beautyfull', 'How are you', 'you belongs to Modern Family', 'hello boss', 'Im here web lab'];

function getRandomIndex(items) {
  return Math.floor(Math.random() * items.length);
}

for (var i = 0; i < 1; i++) {
  var removedItem = myShows.splice(getRandomIndex(myShows), 1);
  document.writeln(removedItem)
}