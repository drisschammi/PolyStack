#This base image contains Java runtime
FROM openjdk:21-jdk-slim

# Me :)
LABEL "org.opencontainers.image.authors"="chammidriss.com"

# Set the working directory inside the container
WORKDIR /app

# Copy the build JAR file into the container
COPY build/libs/data-analysis-api-0.0.1-SNAPSHOT.jar /app/data-analysis-api-0.0.1-SNAPSHOT.jar

# Expose the port on which the application will run
EXPOSE 8080

# execute the application
ENTRYPOINT ["java", "-jar", "data-analysis-api-0.0.1-SNAPSHOT.jar"]