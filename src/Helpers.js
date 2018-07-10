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

var Helpers = {
    getValueFromMap: getValueFromMap
}

export default Helpers;