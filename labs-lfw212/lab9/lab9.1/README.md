This is a small Express service that uppercases any input sent via a un query string parameter,
but it waits one second before sending the response.

This service is vulnerable to parameter pollution. A URL such as
http://localhost:3000/?un=a&un=b will cause the service to crash, assuming the service is
listening on port 3000.

Fix it, without changing any of the current functionality.

The parameter pollution attack may be handled as seen fit. For instance upper casing all forms,
or sending a 400 Bad Request, or any kind of response. 

The only thing that must not happen is
the service crashing and requests containing query-strings with a single un parameter must
continue to respond with the uppercased version of that value.

Run the validate.js file as follows, to validate the fix:
node validate.js