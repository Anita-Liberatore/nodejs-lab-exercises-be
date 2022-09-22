Lab 10.1 - Block an Attackers IP Address with Express

The labs-1 folder contains an Express application along with a validate.js file.
Imagine this is a deployed service, which is receiving a DoS attack from the IP address
111.34.55.211.

Edit the service so that this IP address, and only this IP address, receives a 403 Forbidden
response from the service.

Execute the following command to check the mitigation step worked:
node validate.js

