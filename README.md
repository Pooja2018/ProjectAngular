# Frontend
By

Puja Bera(pujaberamis@gmail.com)

Frontend of Vyntra - an E-Commerce Application built using Spring + Angular

Backend of the application: https://github.com/Pooja2018/SpringApplication.git

Goal Of Our Application:
We build an e-commerce application that performs user authentication/user registration before giving user access to our hosted products on the platform. 
Actors Of The System-
•	Admin
•	Users
User can – 
1.	Login with existing username and password.
2.	User can register for fresh username if he/she does not have an already existing account.
3.	After user authentication, user can –
•	View Products
•	Search for Products
•	Add them to cart
•	Update Cart by choosing various quantities of products as per choice and need.
•	Cart Amount automatically updated once quantities of products in cart are changed.
•	User can choose from 2 methods of payment-
o	Cash On Delivery
o	Card Payment – We have mocked this service using stripe payment gateway.


Admin can – 

1.	Admin Username: admin
Admin Password: 123456789
2.	Manage Existing Products by ‘Edit’ option. It allows admin to change all attributes related to the product that is visible to the user.
3.	 Add a new product to the database using ‘Add New Product’ option.

Technology Used: 

1.	Angular 9
2.	Spring Boot
3.	Jwt Authentication for authorization of users and admins
4.	Hibernate for accessing database in our local system.





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
