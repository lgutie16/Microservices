## Technical Overview
It's an architectonic style, so it's a service oriented architecture composed of loosely couple of elements that have bounded context.

Concept of modular design is when there is different context defined and in each context there is microservices

### BENEFITS
No IT dependency (technology side)
Very fast developments and error correction and risk is less (Bussines side)
Increase productivity


### HOW DO WE GET THERE?
Is good to start with monolothic programs (The Clean Architecture - The onion architecture)	done with good interfaces and architecture.

After, when One starts to detect certain beheavior in the app, for example:
	Increasing of concurrent users,
	Parts of the software where there are a lot of changes or realeases

That is the signal to make la section a microservice.

So... if a microservice is chose, think about devOps
1. Deployment
2. Configuration
3. Secrets
4. Scaling
5. Metrics and monitoring
6. Testing
7. Log management
8. Service Discovery

DevOps
Is a cultural change about how to planning software development
and QAs

## Folder Structure

```
microservices-micro/
	saved/
	uploads/
	Service-Preview.js
	Service-Upload.js
	package.json
microservices-seneca/
	ext2.js
	math.js
	operation.js

```

