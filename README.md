# SPA_ANGULARJS

Fullstack development of as SPA with Angular JS to the frontend and Adonis JS for the APIs and webservicecs

## Start API:
Reach the API folders first with the follow command at terminal:
``` 
cd ./ API-com-ADONISJS 
```
### Type at terminal the follow instructions to generate a new Adonis Key:

``` 
node ace generate:key 
```
- Use the key at .env file at "APP_KEY"

### Start Lucid ORM:

```
node ace install @adonisjs/lucid
 ```
- Then configure it to use SQLite Database with the instructions at terminal:
```
 node ace configure @adonisjs/lucid 
 ```
- This command will offer Database options, select SQLite.

### At this point, you already have one Database linked to this API, now generate all tables.

``` 
node ace migration:run 
```
 - This command will create two tables which are already relationed.

### Run Adonis Server:

Type at terminal ``` node ace serve ``` to start one port at localhost:3333 or
use ``` node ace serve -w ``` to start and keep watching this port.

#### Configuring .ENV:
Create a .env file and past this instructions at it:
```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=gD4hFikFOa1OA35dW_8o5r3G-84XnRYV
DRIVE_DISK=local
DB_CONNECTION=sqlite
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=gD4hFikFOa1OA35dW_8o5r3G-84XnRYV
DRIVE_DISK=local
DB_CONNECTION=sqlite
```