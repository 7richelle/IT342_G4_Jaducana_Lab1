# MiniApp Authentication Project

## Project Description

This project demonstrates the **flow of user authentication**. It shows how a user can **register, login, and view their profile** securely using a backend, web frontend, and a database. 

---

## Tech Stack

**Backend:**  
- Java Spring Boot  
- MySQL  

**Web Frontend:**  
- React.js / Vite  
- React Router for route protection  

**Other Tools:**  
- XAMPP (for MySQL)  
- Node.js & npm  

---

## Backend Setup

1. Clone the repository:  
```bash
git clone https://github.com/7richelle/IT342_G4_Jaducana_Lab1
cd IT342_G4_Jaducana_Lab/backend/miniapp

2. Run the backend:
./mvnw spring-boot:run

1. Web Setup
Navigate to the web folder:
cd IT342_G4_Jaducana_Lab/web
npm install
npm run dev
Open your browser at: http://localhost:5173

Database Setup

1. Open XAMPP and start MySQL.
2. Create a database:
CREATE DATABASE mini_app_auth;

3. Create a table called user with the following attributes:

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50),
    email VARCHAR(100),
    password VARCHAR(255)
);

Environment Variables / Config
Add the following configuration in application.properties:

spring.application.name=miniapp

spring.datasource.url=jdbc:mysql://localhost:3306/mini_app_auth
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect

server.port=8080


API Endpoints
| Endpoint        | Method | Description                         |
| --------------- | ------ | ----------------------------------- |
| `/api/register` | POST   | Register a new user                 |
| `/api/login`    | POST   | Login user and return token/session |
| `/api/logout`   | POST   | Logout current user                 |
