#!/bin/sh
jar=DynamoDBLocal.jar
lib=DynamoDBLocal_lib
dynamodir=/Users/luisjasso/MaterSoft/Dynamodb/dynamodb_local_latest
java -Djava.library.path=$dynamodir/$lib -jar $dynamodir/$jar -sharedDb
