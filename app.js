function datetimeDiff (from, to) {

    const min = [-Infinity, 1, 1, 0, 0, 0, 0];
    const max = [Infinity, 12, null, 24, 60, 60, 1000];

    if (to < from) {
        const temp = to;
        to = from;
        from = temp;
    }

    let start = [from.getUTCFullYear(), from.getUTCMonth() + 1, from.getUTCDate(), from.getUTCHours(),
            from.getUTCMinutes(), from.getUTCSeconds(), from.getUTCMilliseconds()],
        end = [to.getUTCFullYear(), to.getUTCMonth() + 1, to.getUTCDate(), to.getUTCHours(), to.getUTCMinutes(),
            to.getUTCSeconds(), to.getUTCMilliseconds()],
        i = 7;

    const dec = (i) => {
        --end[i];
        while (end[i] < min[i]) {
            const r = dec(i - 1);
            end[i] += max[i] === null
                ? r
                : max[i];
        }
        return i === 1 ? new Date(Date.UTC(end[0], end[1], 0)).getUTCDate() : max[i + 1];
    };

    while (i > 0) {
        --i;
        let diff = end[i] - start[i];
        while (diff < 0) {
            end[i] += dec(i - 1);
            diff = end[i] - start[i];
        }
        end[i] = diff;
    }

    return {
        years: end[0],
        months: end[1],
        days: end[2],
        hours: end[3],
        minutes: end[4],
        seconds: end[5],
        millisecond: end[6]
    };

};

let togetherTimeDiff = document.getElementById("together");
function calc (){
const date1 = new Date("5/21/2020, 00:00:00 AM");
const date2 = new Date(Date.now());

const result = datetimeDiff(date1, date2);

console.log(result.seconds)

togetherTimeDiff.innerHTML = `Years: ${result.years} \n Months: ${result.months} \n Days: ${result.days} \n Hours: ${result.hours} \n Minutes: ${result.minutes} \n Seconds: ${result.seconds} \n Milliseconds: ${result.millisecond}` 
}

let shams = document.getElementById("shamsAge");
function calc1 (){
const date1 = new Date("11/28/2002, 12:00:00 AM");
const date2 = new Date(Date.now());

const result = datetimeDiff(date1, date2);

console.log(result.seconds)

shams.innerHTML = `Years: ${result.years} \n Months: ${result.months} \n Days: ${result.days} \n Hours: ${result.hours} \n Minutes: ${result.minutes} \n Seconds: ${result.seconds} \n Milliseconds: ${result.millisecond}` 
}

let mango = document.getElementById("mangoAge");
function calc2 (){
const date1 = new Date("06/19/2003, 12:00:00 AM");
const date2 = new Date(Date.now());

const result = datetimeDiff(date1, date2);

console.log(result.seconds)

mango.innerHTML = `Years: ${result.years} \n Months: ${result.months} \n Days: ${result.days} \n Hours: ${result.hours} \n Minutes: ${result.minutes} \n Seconds: ${result.seconds} \n Milliseconds: ${result.millisecond}` 
}


function calculation() {
    calc();
    calc1();
    calc2();
}

setInterval(calculation,1)
