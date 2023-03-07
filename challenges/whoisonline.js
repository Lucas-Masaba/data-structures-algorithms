
// whosOnline(arrOfObjs) === {
//   onlineArr
//   offlineArr
//   awayArr
//   if arrOfObjs.length === 0
//     return {}

//   loop arrOfObjs 
//     if user is empty 0 
//       continue
//     if is online and lastActivity > 10
//       place username in the away Array

//     while looping through the Array, place users according to there status onto the return object

// }


// whosOnline([]) === {}

// whosOnline([{}]) === {}

// whosOnline([ {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// },
// {},
// {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }])  === {
//           offline: ['Lucy'],
//           away: ['Bob']
//           }

// whosOnline([{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy', 
//   status: 'offline',
//   lastActivity: 22
// },
// {
//   username: 'Vero', 
//   status: 'offline',
//   lastActivity: 22
// },
// {
//   username: 'Bob', 
//   status: 'online',
//   lastActivity: 104
// }])  === {online: ['David'],
//           offline: ['Lucy', 'Vero'],
//           away: ['Bob']
//           }

const whosOnline = (friends) => {
  let onlineArr = []
  let awayArr = []
  let offlineArr = []
  let returnObj = {}

  if (!friends.length) {
    return {}
  }

  friends.forEach(friend => {
    if (friend.length) {
      console.log('Here')
      return
    } else if (friend.status === 'online' && friend.lastActivity > 10) {
      awayArr.push(friend.username)
    } else if (friend.status === 'offline') {
      offlineArr.push(friend.username)
    } else {
      onlineArr.push(friend.username)
    }
  });


  if(onlineArr.length) returnObj.online = onlineArr
  if(offlineArr.length) returnObj.offline = offlineArr
  if(awayArr.length) returnObj.away = awayArr

  return returnObj

}

console.log(whosOnline([{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
},{
  username: 'Raul',
  status: 'online',
  lastActivity: 104
}]))