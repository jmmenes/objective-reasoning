// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function isAdmin(user) {
  if (user.userRole === "ADMIN") {
    return true;
  } else {
    return false;
  }
}

// function isAdminAlternate(user) {
//   return user.userRole === 'ADMIN';
// }

function getEmail(user) {
  const lowerFirst = user.firstName.toLowerCase();
  const lowerLast = user.lastName.toLowerCase();

  return `${lowerFirst}.${lowerLast}@codeimmersives.com`;

  // return user.firstName.toLowerCase() + "." + user.lastName.toLowerCase() + "@codeimmersives.com";
}

function getPlaylistLength(playlist) {
  return playlist.songs.length;
}

function getHardestHomework(homeworks) {
  let lowestAvg = 100; // Can use Infinity
  let hardestHw = "";

  for (const item of homeworks) {
    if (item.averageScore < lowestAvg) {
      hardestHw = item.name;
      lowestAvg = item.averageScore;
    }
  }
  return hardestHw;
}

function createPhonebook(names, phoneNums) {
  // phonebook object, empty brackets
  const phonebook = {};

  for (let i = 0; i < names.length; i++) {
    phonebook[names[i]] = phoneNums[i];
  }

  return phonebook;

  //     for (let i = 0; i < names.length; i++) {
  //         const name = names[i];
  //         const number = phoneNums[i];
  //         phonebook[name] = number;
  //     }

  //     return phonebook;
}

// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === "undefined") {
  isAdmin = undefined;
}
if (typeof getEmail === "undefined") {
  getEmail = undefined;
}
if (typeof getPlaylistLength === "undefined") {
  getPlaylistLength = undefined;
}
if (typeof getHardestHomework === "undefined") {
  getHardestHomework = undefined;
}
if (typeof createPhonebook === "undefined") {
  createPhonebook = undefined;
}

module.exports = {
  isAdmin,
  getEmail,
  getPlaylistLength,
  getHardestHomework,
  createPhonebook,
};
