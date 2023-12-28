# Build for WAR

This branch shows how to build the project described in the post https://marco.dev/angular-with-java with a WAR target.

The idea is to build 2 independent JARs, 1 for backend + 1 for the frontend and merge together in the delivery module.

The artifact created is in this case a WAR that can be deployed in Servlet containers, e.g. Tomcat.

In the current implementation the frontend (Angular) works only if the application is deployed as ROOT context in Tomcat (aka as /).

You can deploy as root renaming the WAR file in ROOT.war or changing the deployment configuration.

I guess that the problem can be solved with a proxy or relative path in Angular, I have to investigate the issue.