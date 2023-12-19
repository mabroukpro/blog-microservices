# Microservices Application

This is a practice microservices application built with Node.js, React, and Kubernetes. The application is structured into several services, each with its own distinct role.

## Services

- Posts Service (posts/index.js): Handles all operations related to posts. It allows creating posts and emits an event when a new post is created.
- Comments Service (comments/index.js): Manages comments on posts. It emits an event when a new comment is created and listens for events related to comment moderation.
- Query Service (query/index.js): Maintains and provides access to a data view that includes both posts and comments.
- Moderation Service (moderation/index.js): Performs comment moderation and emits events after moderation.
- Event Bus (event-bus/index.js): Facilitates communication between services through events.
- Client (client/src/index.js): A React application that provides the frontend for the application.

## Communication

Services communicate with each other using events. When a service performs an operation that other services might be interested in, it emits an event. Other services listen for these events and perform their own operations in response.

## Kubernetes and Skaffold

Kubernetes is used for orchestrating the services. Each service runs in its own pod, and services communicate with each other through cluster IP services.

Skaffold is used for workflow automation. It rebuilds and redeploys your application on code changes, making the development process smoother.

For more details on the Kubernetes configuration, check the `infra/k8s` directory.

## Running the Application

To run the application, make sure you have Kubernetes and Skaffold installed, then run `skaffold dev`.

Please note that this is a practice application and is not intended for production use.