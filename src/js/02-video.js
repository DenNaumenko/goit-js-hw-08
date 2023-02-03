import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localStorageItemName = 'videoplayer-current-time';
const videoplayerCurrentTime = Number(localStorage.getItem(localStorageItemName));

if (videoplayerCurrentTime) {
  player
    .setCurrentTime(videoplayerCurrentTime)
    .then(function () {
      localStorage.removeItem(localStorageItemName);
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          alert(
            'the time was less than 0 or greater than the video’s duration'
          );
          break;

        default:
          alert('some other error occurred');
          break;
      }
    });
}
function hendler(data) {
  localStorage.setItem(localStorageItemName, data.seconds);
}

player.on('timeupdate', throttle(hendler, 1000));