## CREATE REACT APP (default)
1. ```create-react-app myApp```
2. ```npm i```
3. .env file add ( ```SKIP_PREFLIGHT_CHECK=true ```)
4. ```npm start ``` to test its working

## GH-PAGES (for deploying application on github pages)
5. ```npm install gh-pages --save-dev``` !!
6. [make new branch on github.com/new](github.com/new)
7. make a new repo with a name you choose by yourself
8. create a new repo on the commeand line (information copy paste from the just created repo on the github site)
9. Make new branch in github with name ```gh-pages```
9. package.json add (``` "homepage": "https://yourgithubname.github.io/reponame"```) you need to preform 2 changes here in the url
10. package.json scripts add (```"predeploy": "npm run build", "deploy": "gh-pages -d build" ```)
11. ```npm run deploy```

### Final step to save you master stuff
12. ```git add . / git commit -m 'masterStuffWhatYouMade' / git push ```

### Code is written in the master-branch and can also be pushed in this way.
### When your happy with the runnen localhost you con run "npm run deploy" to deploy the code to github.

###### gp-pages have other implementations (withrouter / hashrouter) etc.
