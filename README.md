# BBCNotificationProject

This is a REST API Based tool to Management Users and Send Notification using PushBullet for BBC Notification Project

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for Production/development and testing purposes. 

### Prerequisites

you need to have NodeJs on your mechine.


### Installation Instructions

Download this repository as Zip file from github and Un-Zip Code. 
CD into the folder containing the code
```
cd BBCNotificationProject
```

And Run the following command to start the tool

```
npm start
```
### User Guide

after going the above installasion instructions the REST services should be avalable on port 3000.
#### To see all the users in the system send a GET request on http://localhost:3000/bbc/api/v1/users as shown below
![upandrunningbbcnotif](https://user-images.githubusercontent.com/13693247/44214403-f80b6580-a167-11e8-8548-42ea71445ee6.PNG)
#### To Register a new users in the system send a POST request on http://localhost:3000/bbc/api/v1/users with user data in request body as shown below
![registeruserbbcnotifications](https://user-images.githubusercontent.com/13693247/44215098-93510a80-a169-11e8-9b7a-dce11221d42b.png)
#### To check if the recently registered user is in the system send a GET request on http://localhost:3000/bbc/api/v1/users as shown below
![listallusersbbcnotification](https://user-images.githubusercontent.com/13693247/44215212-e3c86800-a169-11e8-9211-03896bb53d1f.png)
#### Finaly to Send a Notifications to a registered users send a POST request on localhost:3000/bbc/api/v1/notifications/{username} with username in path as shown below
![sendnotificationbbcnotification](https://user-images.githubusercontent.com/13693247/44215259-fe024600-a169-11e8-8b5d-61fa89278c29.png)

## Running the automated tests

To run the automated tests for this system

run the following command

```
npm test
```
it will show the outcomes of the test as shown below.

![testrunningbbcnotification](https://user-images.githubusercontent.com/13693247/44214676-a0212e80-a168-11e8-9415-5f6fc855d9c3.PNG)


## Built With

* [NodeJs](https://nodejs.org/en/) - The BackEnd framework used
* [ExpressJs](https://nodejs.org/en/) - The MVC web framework used
* [Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running 
* [Chai](http://www.chaijs.com/) - Chai is a BDD / TDD assertion library

## Design Details

As shown below the illustration of all the API Used in Swagger Format swagger file can be found at 

(https://github.com/wl0akh/BBCNotificationProject/blob/master/swagger/BBCNotificationSwagger.yaml)

![swaggerimage](https://user-images.githubusercontent.com/13693247/44215862-76b5d200-a16b-11e8-984d-757551468225.PNG)

## Authors

* **Adil Khan** - *Design & Build* - [LinkedIn](https://uk.linkedin.com/in/adil-khan-466155b7)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
