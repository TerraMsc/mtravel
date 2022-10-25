var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const now = new Date();

now.setMinutes(now.getMinutes());

minutes = ('0' + now.getMinutes()).slice(-2)

hours = ('0' + now.getHours()).slice(-2)

seconds = ('0' + now.getSeconds()).slice(-2)

const current = hours + ':' + minutes;

today = dd + '.' + mm + '.' + yyyy + 'r.' + " " + current;

console.log(today)

var MS_PER_MINUTE = 60000;
var past = new Date(now - 6 * MS_PER_MINUTE);

minutesPast = ('0' + past.getMinutes()).slice(-2)
hoursPast = ('0' + past.getHours()).slice(-2)
secondsPast = ('0' + past.getSeconds()).slice(-2)

pastTime = dd + '.' + mm + '.' + yyyy + 'r.' + " " + hoursPast + ':' + minutesPast;

pastTimeSeconds = dd + '.' + mm + '.' + yyyy + 'r.' + " " + hoursPast + ':' + minutesPast + ':' + secondsPast;

const currentSeconds = hoursPast + ':' + minutesPast + ':' + secondsPast

console.log(pastTimeSeconds)

document.getElementById("time").innerHTML = hours + ":" + minutesPast;

var start = new Date(now - 6 * MS_PER_MINUTE);

function trackTime()
{
    var str = "";

    var elapsed = new Date() - start;
    var minutes = Math.floor(elapsed / 60000);
    var seconds = ((elapsed % 60000) / 1000).toFixed(0);

    if (minutes < 1) {
        var track = seconds + "s temu"
        document.getElementById("time-passed").innerHTML = track;
    } else if (minutes => 1) {
        var track = minutes + "min " + seconds + "s temu"
        document.getElementById("time-passed").innerHTML = track;
    }

    document.getElementById("date").innerHTML = pastTime;
    
}

setInterval(trackTime, 1000);