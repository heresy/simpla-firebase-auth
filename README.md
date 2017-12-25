Firebase adapter for Simpla CMS.

Install:

``` npm i simpla-firebase-auth --save ```

Configuration:

1. Go to firebase console and enable github authentication in Authentication section. Its well documented.
2. Create a git repository as usual(refer Simpla documentation).

In your HTML:

```
<script src="./node_modules/simpla-firebase-auth/dist/auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
<script>
      var config = {
        apiKey: "xxxxxx",
        authDomain: "xxxxxxx",
        databaseURL: "xxxxx",
        projectId: "xxxxxxxx",
        storageBucket: "xxxxxxx",
        messagingSenderId: "xxxxxxxxxxx"
      };
      firebase.initializeApp(config);

      Simpla.init({

        // The Github repo you want Simpla to use
        repo: 'username/repo',

        // Firebase auth adapter, initialize with your Netlify site name
         auth: new FirebaseAuth(firebase)

      })
 </script>```

 The config part is provided by Firebase. Thats it!

 Note that a single firebase project can be used to authenticate multiple domains. You just have to configure that in firebase console admin.
