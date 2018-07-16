import moment from 'moment';

function getValueFromMap(obj, map) {
    map = map.split('.');
    var value = obj || {};
    for (var i = 0; i < map.length; i++) {
        var item = map[i];
        value = value[item];
        if (!value) {
            value = null;
            break;
        }
    }
    return value;
}

function isAfterDay(a, b) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    return !isBeforeDay(a, b) && !isSameDay(a, b);
}

function isBeforeDay(a, b) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;

    const aYear = a.year();
    const aMonth = a.month();

    const bYear = b.year();
    const bMonth = b.month();

    const isSameYear = aYear === bYear;
    const isSameMonth = aMonth === bMonth;

    if (isSameYear && isSameMonth) return a.date() < b.date();
    if (isSameYear) return aMonth < bMonth;
    return aYear < bYear;
}

function isInclusivelyBeforeDay(a, b) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    return !isAfterDay(a, b);
}

function isSameDay(a, b) {
    if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
    // Compare least significant, most likely to change units first
    // Moment's isSame clones moment inputs and is a tad slow
    return a.date() === b.date()
        && a.month() === b.month()
        && a.year() === b.year();
}

var Helpers = {
    getValueFromMap: getValueFromMap,
    isAfterDay: isAfterDay,
    isBeforeDay: isBeforeDay,
    isSameDay: isSameDay,
    isInclusivelyBeforeDay: isInclusivelyBeforeDay,
}

export default Helpers;