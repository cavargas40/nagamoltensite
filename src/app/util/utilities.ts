export class Utilities {

    //replace all elements of mapObj in string
    public replaceAll(str: string, mapObj: Object) {
        var re = new RegExp(Object.keys(mapObj).join('|'), "gi")
        return str.replace(re, (matched) => {
            return mapObj[matched];
        });
    }
}