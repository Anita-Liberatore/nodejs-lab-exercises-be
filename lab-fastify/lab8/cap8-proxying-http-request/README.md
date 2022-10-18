This is chapter 8 of proxying http-request

Chapter Overview 

08. PROXYING HTTP REQUESTS An HTTP Proxy is a server that forwards HTTP requests to backend services and then forwards responses to clients. 
As the system scales, at a certain point, the need for proxying tends to become inevitable. 
Generally speaking, proxying should be done with a specialized configurable piece of infrastructure, such as NGINX, Kong or proprietary cloud gateway services. 

However, sometimes there are complex requirements for a proxy that may be better met with a Node.js proxying service. 

Other times the requirements may be so simple (like proxying a single route) that it just makes sense to use what's already available instead of investing in something else. 

In other cases, a Node.js proxying service can be a stop-gap on the way to a more comprehensive infrastructural proxying solution. 

In this chapter, we'll explore proxying HTTP requests with Fastify, however the concepts translate to any web framework. 

Learning Objectives

By the end of this chapter, you should be able to:

Proxy HTTP requests for a single route,
Modify data during proxying,
Create a full proxying server.

