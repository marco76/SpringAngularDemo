FROM eclipse-temurin:17-jre

RUN mkdir /opt/app
COPY delivery/target/*.jar /opt/app/myApp.jar
CMD ["java", "-jar", "/opt/app/myApp.jar"]
