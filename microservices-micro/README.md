## Technical Overview
Micro is a tool to work with microservices using _#async#_ and _#await#_

## Folder Structure

```
saved/
uploads/
Service-Preview.js
Service-Upload.js
package.json


```


## Instruction to run this Project
Follow the next instructions to run this project localy

``` 
 git clone https://github.com/lgutie16/Microservices.git         [Clone the project in your selected directory]
 cd Microservices/microservices-micro                            [Go inside the main source directory]
 npm run start-upload                                            [Run upload service port 3000]
 npm run start-preview                                           [Run preview service port 3001]

``` 

To send info to the service Upload is necessary to use curl, if you are in Linux OS, if you aren't, you can use a tool as Postman.

``` 
curl -d "@image.ext" -X POST http://localhost:3000/               [Clone the project in your selected directory]
 
``` 

# LICENCE
#MIT#
 
