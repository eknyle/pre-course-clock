// code
let timerId=new Set(); // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    timerId.add( setInterval(updateClock, 1000)); // запускаем  updateClock() каждую секунду
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    timerId.forEach(item=>clearInterval(item)); // останавливаем таймер
    timerId.clear();
});


function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours()
    let minutesValue= now.getMinutes();
    const minutes = minutesValue<10?'0'+minutesValue:minutesValue;
    let secondsValue= now.getSeconds();
    const seconds = secondsValue<10?'0'+secondsValue:secondsValue;
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
