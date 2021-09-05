
- "npm start" run server;

ENV vars:
  - PORT (default 3000)


  1.
    URL - /api/users/registration - User registration
    Method - POST
    URL Params - none
    Success Response:
        Code:200
        Content: {name:"Hakob",email:"Ghazaryan@gmail.com",password:"$2a$07$gqqV7sF46IVcGoEMUr8ZQeztmgiyKfknpEb08/x4.VJrfvMcmXNLG"} 
    Error Response:
        Code:400
        Content:"Not correct email"
      OR
        Code:400
        Content:"Password must be more thean 5 characters"
      OR 
        Code:400
        Content:"Email exists"

  2.
    URL - /api/users/registration - User login
    Method - POST
    URL Params - none
    Success Response:
        Code:200
        Content: "Logging in"
    Error Response:
        Code:400
        Content:"No user with that email"
      OR
        Code:400
        Content:"Password was wrong"

  3.
    URL - /api/users/posts/:mail/all - get users all posts
    Method - GET
    URL Params - mail=[gmail account]
    Success Response:
        Code:200
        Content:  [
          {
            _id:6046442ca155a7309888b838
            userMail:"Hakob@gmail.com"
            text:"My name is Hakob"
            images:
                  Object
                    img1:Binary('iVBORw0KGgoAAAANSUhEUgAAAoEAAAB7CAYAAAALxVruAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
                    img0:Binary('iVBORw0KGgoAAAANSUhEUgAAAYkAAADICAYAAAAdrh3AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
            date:2021-03-08T15:35:08.728+00:00
          }
          ...
        ]
    Error Response:
        Code:400
        Content:"No user with such mail"
      OR
        Code:401
        Content:"You are not in account"

  4.
    URL - /api/users/update/password - password update
    Method - POST
    URL Params - none
    Success Response:
        Code:200
        Content: {name:"Hakob",email:"Ghazaryan@gmail.com",password:"$2a$07$gqqV7sF46IVcGoEMUr8ZQeztmgiyKfknpEb08/x4.VJrfvMcmXNLG"} 
     Error Response:
        Code:401
        Content:"You are not in account"
  
  5.
    URL - app/posts/create - create post
    Method - POST
    URL Params - none
    Success Response:
        Code:200
        Content: {
            _id:6046442ca155a7309888b838
            userMail:"Hakob@gmail.com"
            text:"My name is Hakob"
            images:
                  Object
                    img1:Binary('iVBORw0KGgoAAAANSUhEUgAAAoEAAAB7CAYAAAALxVruAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
                    img0:Binary('iVBORw0KGgoAAAANSUhEUgAAAYkAAADICAYAAAAdrh3AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
            date:2021-03-08T15:35:08.728+00:00
            }
        Error Response:
          Code:401
          Content:"You are not in account"
    
  6.
    URL - /api/posts/work/delete/:id - deleting post by id  
    Method - DELETE
    URL Params - id=[collection id]
    Success Response:
        Code:200
        Content:"Successful deletion"
    Error Response:
        Code:400
        Content:"Its not your post"
      OR
        Code:400
        Content:"Cant find post with such id"

  7.
    URL - /api/users/posts/all - user gets his all posts
    Method - GET
    URL Params - none
    Success Response:
        Code:200
        Content: [
          {
            _id:6046442ca155a7309888b838
            userMail:"Hakob@gmail.com"
            text:"My name is Hakob"
            images:
                  Object
                    img1:Binary('iVBORw0KGgoAAAANSUhEUgAAAoEAAAB7CAYAAAALxVruAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
                    img0:Binary('iVBORw0KGgoAAAANSUhEUgAAAYkAAADICAYAAAAdrh3AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
            date:2021-03-08T15:35:08.728+00:00
          }
          ...
        ]
    Error Response:
        Code:401
        Content:"You are not in account"

  8.
    URL - /api/posts/get/last - get last 10 posts
    Method - GET
    URL Params - none
    Success Response:
        Code:200
        Content: [
          {
            _id:6046442ca155a7309888b838
            userMail:"Hakob@gmail.com"
            text:"My name is Hakob"
            images:
                  Object
                    img1:Binary('iVBORw0KGgoAAAANSUhEUgAAAoEAAAB7CAYAAAALxVruAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
                    img0:Binary('iVBORw0KGgoAAAANSUhEUgAAAYkAAADICAYAAAAdrh3AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
            date:2021-03-08T15:35:08.728+00:00
          }
          ...
        ]
    Error Response:
        Code:401
        Content:"You are not in account"

  9.
    URL - /api/posts/desc/:desc - search postby their description
    Method - GET
    URL Params - desc=[querystring]
    Success Response:
        Code:200
        Content: [
          {
            _id:6046442ca155a7309888b838
            userMail:"Hakob@gmail.com"
            text:"My name is Hakob"
            images:
                  Object
                    img1:Binary('iVBORw0KGgoAAAANSUhEUgAAAoEAAAB7CAYAAAALxVruAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
                    img0:Binary('iVBORw0KGgoAAAANSUhEUgAAAYkAAADICAYAAAAdrh3AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
            date:2021-03-08T15:35:08.728+00:00
          }
          ...
        ]
      Error Response:
        Code:401
        Content:"You are not in account"

  10.
    URL - /api/posts/work/:id - getting post by id
    Method - GET
    URL Params - id=[collection id]
    Success Response:
        Code:200
        Content:
          {
            _id:6046442ca155a7309888b838
            userMail:"Hakob@gmail.com"
            text:"My name is Hakob"
            images:
                  Object
                    img1:Binary('iVBORw0KGgoAAAANSUhEUgAAAoEAAAB7CAYAAAALxVruAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
                    img0:Binary('iVBORw0KGgoAAAANSUhEUgAAAYkAAADICAYAAAAdrh3AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
            date:2021-03-08T15:35:08.728+00:00
          }
      Error Response:
        Code:401
        Content:"You are not in account"
      OR
         Code:400
          Content:"Cant find post with such id"

  11.
    URL - /api/post/photos/:id - getting post photos
    Method - GET
    URL Params - id=[collection id]
    Success Response:
        Code:200
        Content:
            Object
              img1:Binary('iVBORw0KGgoAAAANSUhEUgAAAoEAAAB7CAYAAAALxVruAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
              img0:Binary('iVBORw0KGgoAAAANSUhEUgAAAYkAAADICAYAAAAdrh3AAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMA...', 0)
      Error Response:
        Code:401
        Content:"You are not in account"
      OR
         Code:400
          Content:"Cant find post with such id"
  12.
    URL - api/users/search/:mail - User search by mail
    Method - GET
    URL Params - mail=[gmail]
    Success Response:
        Code:200
        Content:{name:"Hakob",email:"Ghazaryan@gmail.com",password:"$2a$07$gqqV7sF46IVcGoEMUr8ZQeztmgiyKfknpEb08/x4.VJrfvMcmXNLG"} 
        Error Response:
            Code:401
            Content:"You are not in account"
          OR
            Code:400
            Content:"No user with such mail"
