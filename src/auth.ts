export default class FirebaseAuth{
  private firebase:any;
  constructor(firebase){
    this.firebase = firebase;
  }

  authenticate(){
    let provider = new this.firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    provider.addScope('administration');
    return this.firebase.auth().signInWithPopup(provider).then((result) =>  {
      let token = result.credential.accessToken;
      return {token};
    }).catch((error) => {
      return {error};
    });
  }
}
