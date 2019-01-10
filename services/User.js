
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
}

export default User;
