var hour = document.getElementById("h");
var minute = document.getElementById("m");
var second = document.getElementById("s");
var dn = document.getElementById("dy-ng");

setInterval(() => {
    
    let date = new Date ();
    let hr = date.getHours ();
    let min = date.getMinutes ();
    let sec = date.getSeconds ();
    let d_n = "AM";

    if (hr > 12) {
        d_n = "PM"
        hr = hr - 12;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (hr < 10) {
        hr = "0" + hr;
    }

    h.textContent = hr;
    m.textContent = min;
    s.textContent = sec;
    dn.textContent = d_n;

});