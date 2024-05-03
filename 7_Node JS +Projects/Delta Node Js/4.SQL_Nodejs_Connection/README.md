# Mysql Connection with Node js

1.We are going to use faker packeage .It creates fake data for users
```
npm i @faker-js/faker
```
This is how we can get fake data from faker
```
let getRandomUser=()=>{
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ]
};
```
2.Also install  `mysql2` package for all the oparation
```
npm i mysql2
```
## Create connection with the Mysql using createConnection 
```
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'NodeDemo',
    password:'system'
});
```
## Use Query object for operation 
```
try{
    connection.query(q,[data],(err, result) => {
          if(err) throw err;
          console.log('Connection made successfully 😋');
          console.log(result);
    })
}
catch(err){
    console.log(err);
}

connection.end();   -> used for the connection close
```

## Create Schema.sql for the input data format
```
CREATE TABLE USER(
 ID VARCHAR(50) PRIMARY KEY,
 USERNAME VARCHAR(50) UNIQUE,
 EMAIL VARCHAR(50) UNIQUE NOT NULL,
 PASSWORD VARCHAR(50) NOT NULL
);

source schema.sql
```

## Insert Data