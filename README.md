### My first DB usage 

This was made to learn the basics of interaction between frontend - backend - database. 

In the input fields you write the data you would like to store in the database, which will be sent in the body of a POST request through a FETCH to the POST endpoint made in the backend. 
When the server receives the information, it connects to the database through the URI (must be declared in a .env file) and inserts a document with the information in the "users" collection.
