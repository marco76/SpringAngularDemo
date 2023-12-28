# Build for WAR

This branch shows how to build the project described in the post https://marco.dev/angular-with-java with a WAR target.

The idea is to build 2 independent JARs, 1 for backend + 1 for the frontend and merge together in the delivery module.

The artifact created is in this case a WAR that can be deployed in Servlet containers, e.g. Tomcat.

In the current implementation the frontend (Angular) works only if the application is deployed as ROOT context in Tomcat (aka as /).

## Server path

You can deploy as root renaming the WAR file in ROOT.war or changing the deployment configuration.

If the application doesn't run on `[server]/` but on '[server]/[AppName]/' you need to adapt the configuration for Angular.

In the file `index.html` of Angular you need to specify the correct path or the frontend won't find the resources:

Angular documentation: https://angular.io/guide/deployment#the-base-tag
example `<base href="/AppName/">`
