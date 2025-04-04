# Use OpenJDK 17 as the base image
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the generated JAR file from your local machine to the Docker container

COPY ./target/event_management_system_backend-0.0.1-SNAPSHOT.jar app.jar


# Expose the port the application will run on
EXPOSE 8080

# Run the application using the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]
