# FakeBook-Facebook-Clone-
A fully functioning MERN application.
No Youtube Tutorial used ;)

![2022-08-06](https://user-images.githubusercontent.com/45381049/183822795-26804a48-8da1-43c7-8605-d88fbdcc6ef0.png)
![2022-08-08](https://user-images.githubusercontent.com/45381049/183822813-756d2b02-d11e-43bf-8559-d04156ef091e.png)
![2022-08-08 (1)](https://user-images.githubusercontent.com/45381049/183822828-12e11720-7ebc-4773-b2db-89588f291365.png)
![2022-08-08 (2)](https://user-images.githubusercontent.com/45381049/183822851-95e369ba-0c32-4233-9c39-5b89ba17c60f.png)
![2022-08-10](https://user-images.githubusercontent.com/45381049/183822894-b87bf12f-b96c-4fc2-8518-097f308f839b.png)



##################################################################################################

INITIALISE NODE MODULES IN BOTH CLIENT & SERVER FOLDERS BEFORE RUNNING. (Also Check for .env file)
CORS ORIGIN SHOULD BE http://192.168.0.6:3000, OR CHANGE AS PER NEED.

##################################################################################################


This is a fully functioning Facebook clone, built using MERN Framework (Single Page Application).
Used ReactJs for frontend with Bootstrap library, ExpressJs (in NodeJs) used for backend, MongoDB (on Atlas) used as database, and many more libraries like jwt, bcrypt, React-Router, cookieParse, dotenv, helped me a lot create this website.

Functionalities include:
- Username, Password validation while signing up.
- Storing of Password in MongoDB in ENCRYPTED form, rather than in plain text. (Using bcrypt)
- JWT Authorization instead of just plain cookie-session authorization, which is a lot helpful in distributed servers system.
- Updating of details of new user in the MongoDB (Atlas).
- Showing Suggestions by retrieving Random users from userPass model through mongoose.
- Adding suggestion as friend on MongoDB, & showing up them in Friends section.
- Website is fully SPA (Single Page Application) just except the login authentication process (to make website more secure).
- Used Bootstrap for components like card, buttons & used FontAwesome Icons.


Functioning Explanation in Brief:
- Welcome Page, Signup & Login Page are working as SPA. As you click SignUp/Login website checks for cookies, if cookies found, it redirects you to Dashboard, else the Signup/Login Page will load up. It'll ask for basic account details to signup (will check if user exists/ passwd is insufficient), & will store the passwd & username on DB server in encrypted form and then will redirect you to login page. After logging in, a jwt token will be generated that'll be sent to user & the website will store a cookie as {key={jwt token}}, and dashboard will load up. Dashboard will make a request from server to get details, get suggestions, get friends with this 'key' cookie.

Learnings:
- I got to learn a lot about routing in react, and communicating between server and frontend by get/post requests.
- I got some revision on css, about positioning, flex display etc.
- I learnt about JWT Authorization, as well as basic session authorization.
- I got to learn about Encrypting passwords.
- I got to learn about CORS Policy used by browsers for security (that screwed my 4-5 hourse :/).
- I learnt how to work with NoSql Databases like MongoDB & also how to work with mongoose.
- Got to learn Bootstrap classes.
- Got to learn Middleware in ExpressJs.
- At last, I learnt Patience & Perseverance ;)

