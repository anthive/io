
const baseURL = "https://anthive.io/"

class User {
  static langUrl(lang){
    return baseURL+"skins/lang/"+lang+".png";
  }

  static photoUrl(username, size){
    if (username.startsWith('sample-')) {
      return this.langUrl(username.substring(7))
    }
    return "https://github.com/"+username+".png?size="+size;
  }

  static skinUrl(skin) {
      return baseURL+"skins/client/"+skin+"/ant.png";
  }

  static scoreString(value){
    var suffixes = ["", "K", "M", "B","t"];
    var suffixNum = Math.floor(((""+value).length-1)/3);
    console.log(value, suffixNum);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000,suffixNum)) : value).toPrecision(2));
    return shortValue+suffixes[suffixNum];
  }

  static timeAgo(epochStamp){
    const diff = Math.round(new Date()) - epochStamp;
    const periods = {
          month: 30 * 24 * 60 * 60 * 1000,
          week: 7 * 24 * 60 * 60 * 1000,
          day: 24 * 60 * 60 * 1000,
          hour: 60 * 60 * 1000,
          minute: 60 * 1000,
          second: 1000,
        };
    if (diff > this._periods.month) {
      // it was at least a month ago
      return Math.floor(diff / periods.month) + "m ago";
    } else if (diff > periods.week) {
      return Math.floor(diff / periods.week) + "w ago";
    } else if (diff > periods.day) {
      return Math.floor(diff / periods.day) + "d ago";
    } else if (diff > periods.hour) {
      return Math.floor(diff / periods.hour) + "h ago";
    } else if (diff > periods.minute) {
      return Math.floor(diff / periods.minute) + "m ago";
    } else if (diff > periods.second) {
      return Math.floor(diff / periods.second) + "s ago";
    }
    return "Just now";
  }
}

export default User;
