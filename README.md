## Deploy react app


1. Create empty repo
2. Clone it and create react app
3. install gh-pages "npm install gh-pages --save-dev"
4. Add homepage property to package.json file after private: true. Example 
  "homepage": "http://marlenaw.github.io/marlen-awwad"

5. Add deploy scripts to package.json file --> under scripts:
    ```"predeploy": "npm run build",
    "deploy": "gh-pages -d build"```

6. git init
7. npm run deploy
8. go to github --> settings --> pages --> change the branches to gh-pages and click on save
9. commit the changes to master
