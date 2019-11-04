# mongoqcm

## start project
- clone repository
``` bash
$ git clone https://github.com/jeremydiot/mongoqcm.git
```
- configuration
  - add database connexion information in **.env** file
  
- in repository
``` bash
# install packages
$ npm install

# run server
$ npm start
```
---
## use
- extract of all postman requests in **/example** folder
- default url **http://localhost:3005**

###    question
- get all questions with subjects title => **GET /questions** 
- get one question => **GET /questions/:id** 
- add question => **POST /questions** 
```json
{
	"userId":"",
	"subjectId":"",
	"question":{
	"title":"question1",
	"answers":[
			{
				"value":"mauvaise",
				"correct":false
			},
			{
				"value":"bonne",
				"correct":true
			}
		]
	}
}
```
- update question => **PUT /questions/:id** 
```json
{
	"title":"",
	"answers":[
			{
				"value":"bonne",
				"correct":false
			},
			{
				"value":"mauvaise",
				"correct":true
			}
	]
}
```
- remove question => **DELETE /questions/:id** 

### subjects
- get all subjects => **GET /subjects** 
- get one subject => **GET /subjects/:id** 
- add subject => **POST /subjects** 
```json
{
    "name": "sujet1",
    "questions":[
		 {
		 	"title":"question1",
		 	"answers":[
		 			{
		 				"value":"mauvaise",
		 				"correct":false
		 			},
		 			{
		 				"value":"bonne",
		 				"correct":true
		 			}
		 		]
		 },
		 {
		 	"title":"question2",
		 	"answers":[
		 			{
		 				"value":"mauvaise",
		 				"correct":false
		 			},
		 			{
		 				"value":"bonne",
		 				"correct":true
		 			}
		 		]
		 }    	
   ]
}
```
- update subject => **PUT /subjects/:id** 
- remove subject => **DELETE /subjects/:id** 

### users
- get all users => **GET /users**  
- get one user => **GET /users/:id** 
- add user => **POST /users** 
```json
{
	"username": "user",
	"email": "user@user.fr",
	"password": "user"
}
```
- update user => **PUT /users/:id** 
- remove user => **DELETE /users/:id** 

---
## membres du groupe
- Chloé NOGER
- Matteo MOISAN
- Jérémy DIOT
---