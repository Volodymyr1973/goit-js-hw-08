import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
// console.dir(iframe);

const player = new Player(iframe);
// console.dir(player);

player.on(
  'timeupdate',
  throttle(event => {
    // console.log(event);
    // console.log(event.seconds);
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(event.seconds)
    );
  }, 1000)
);

const forTime = +localStorage.getItem('videoplayer-current-time');
// console.log(forTime);

player
  .setCurrentTime(forTime)
  .then(function (seconds) {
    console.log('player');
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
