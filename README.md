/* 

CREATE REACT APP (default)
stap 1	:	create-react-app
stap 2 	:	npm i
stap 3 	: 	.env file toevoegen met ( SKIP_PREFLIGHT_CHECK=true )
stap 4 	: 	npm start om te kijken als het werkt.

GH-PAGES (for deploying application on github pages)
stap 5	:	npm install gh-pages --save-dev
stap 6	:	github.com/new
stap 7	:	make a new repo with a name you choose by yourself
stap 8	:	create a new repo on the commeand line ( information copy paste from the just created repo on the github site ) 
stap 8.1:	*zelf nog wel even een tweede gh-pages branch aanmaken in je github (leeg)
stap 9	: 	package.json add ( "homepage": "https://yourgithubname.github.io/reponame") * you need to preform 2 changes here in the url
stap 10	:	package.json scripts add ( "predeploy": "npm run build", "deploy": "gh-pages -d build" )
stap 11	:	npm run deploy

*Final step to save you master stuff
stap 12	:	git add . / git commit -m 'masterStuffWhatYouMade' / git push

voor later withrouter kan je niet gebruiken etc etc en meerdere functies deze moet je op een ander manier aanroepen ..... let google be your best friend

https://www.youtube.com/watch?v=4NapRkCazks

*/
