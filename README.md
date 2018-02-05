# Assessment 2

## Problem statement

```
Create a server which would be used to create a personalised book library given two external APIs that can be used to retrieve information:
API 1 - GET - https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks
API 2 - GET - https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/{id}

Requirements:
1. Create an API to get all books from given API 1 and ratings from API 2. API 1 returns an array of books with their id, name and author. Use the ids to get rating for each of the books using API 2. Combine the responses to create a json with books grouped by author names, i.e., author names should be keys and the corresponding value should be an array of author's books with the rating. 
2. Create an api which will get data from API 1 and 2 and store this data(list of all books with their ratings) in a database. Make this transaction idempotent
3. Create an api so that a user can like or dislike a book. The like/dislike state should be stored in the database. Make this idempotent

Points to note:
1. Do not cheat/lie
2. No not use any external helper libraries for parsing data(e.g. lodash, underscore.js)
3. Can use google
4. Make sure to do TDD
5. A working code > A non working, well modularised code
6. APIs should be idempotent
7. Post on slack channel to clarify doubts
8. Priority of APIs to be 1>2>3
9. Bonus points if you can also sort the books on rating in the first API (low priority)

Sample response for first API to be created:
{
  "J K Rowling": [
    {
      "Author": "J K Rowling",
      "id": 1,
      "Name": "Harry Potter and the Sorcerers Stone (Harry Potter, #1)",
      "rating": 4.45
    },
    {
      "Author": "J K Rowling",
      "id": 2,
      "Name": "Harry Potter and the Chamber of Secrets (Harry Potter, #2)",
      "rating": 4.38
    },
    {
      "Author": "J K Rowling",
      "id": 3,
      "Name": "Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)",
      "rating": 4.54
    },
    {
      "Author": "J K Rowling",
      "id": 4,
      "Name": "Harry Potter and the Goblet of Fire (Harry Potter, #4)",
      "rating": 4.53
    },
    {
      "Author": "J K Rowling",
      "id": 5,
      "Name": "Harry Potter and the Order of the Phoenix (Harry Potter, #5)",
      "rating": 4.47
    },
    {
      "Author": "J K Rowling",
      "id": 6,
      "Name": "Harry Potter and the Half-Blood Prince (Harry Potter, #6)",
      "rating": 4.54
    },
    {
      "Author": "J K Rowling",
      "id": 7,
      "Name": "Harry Potter and the Deathly Hallows (Harry Potter, #7)",
      "rating": 4.62
    }
  ],
  "Sidney Sheldon": [
    {
      "Author": "Sidney Sheldon",
      "id": 8,
      "Name": "If Tomorrow Comes (Tracy Whitney Series, #1)",
      "rating": 4.02
    },
    {
      "Author": "Sidney Sheldon",
      "id": 10,
      "Name": "Tell Me Your Dreams",
      "rating": 3.93
    },
    {
      "Author": "Sidney Sheldon",
      "id": 9,
      "Name": "Master of the Game",
      "rating": 4.1
    },
    {
      "Author": "Sidney Sheldon",
      "id": 11,
      "Name": "The Other Side of Midnight (Midnight #1)",
      "rating": 3.9
    },
    {
      "Author": "Sidney Sheldon",
      "id": 12,
      "Name": "Rage of Angels",
      "rating": 3.92
    }
  ]
}
```

## API endpoints

1. The endpoint `/combine` combines all the book data and ratings into a single json file and returns it.
2. The endpoint `/combineAndSave` takes the json from endpoint 1, checks if it is same as the one saved in the DB. If not, it updates it.
3. The endpoints `/like/{id}` and `/unlike/{id}` takes a book id and adds a like to it. One user can like only once. 

## Schema

### books table

| id | author | name | rating | likes |
|----|--------|-----|----------|-------|
| INTEGER:PRIMARY KEY | STRING | STRING | FLOAT | INTEGER |