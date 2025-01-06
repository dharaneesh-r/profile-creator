 # PROFILE CREATOR PROJECT

 # TEST SUMMARY

Test Suite: 1 passed, 1 total
Tests: 5 passed, 5 total
Time : 4.02s


# INSTALLATION

1. RUNNING THE TEST : 
To execute the unit tests:

Install all dependencies by running npm install.
Run the tests by using npm test.

2. CLONE THE REPO:

   git clone https://github.com/dharaneesh-r/profile-creator [while using github repo]
   cd interview
   npm install  - to run application
   npm start  - to execute the code
   npm test - to check its working correct or not

## REGISTER WITH FORM VALIDATION 

This project is implements a simple form using React, Material-UI and sweetalert2, and It includes for form validation for Yup, Formik and Jest for Testing Library

## USAGES

React : React is to manage the components to make it in a controlled form validations
Material-UI : This a UI based library which can implement designed and unique input boxes for users
sweetalert2 : This is a Validating the form is successfully submit or failed it will notify for the user while registeration
Yup : Yup is like Schema which we will initialize the form inputs and to give form validation using Regular expression and to make required or optional one
Formik : Formik to make controller components
React Testing Library: For rendering React components and simulating user interactions.


### FEATURES


- **FORM FIELDS**
  - Name
  - Email
  - Phone (Optional)
  - Password

- **VALIDATION**
  - Required fields: Name, Email, Password.
  - Email must be in a valid format.
  - Phone is optional but must be 10 digits if provided.
  - Password must contain uppercase, lowercase, a number, and a special character.

**ALERTS**
  - Success alert on successful form submission.


#### UNIT TESTING

**RENDERING FORM FIELDS**

Verifies that all the form fields (Name, Email, Phone, Password) are correctly rendered.

**VALIDATION MESSAGE**

If youre missed to type the input box it checks for error message for name, email password

**INVALID EMAIL ADDRESS ASD PHONE AND PASSWORD**

If the email, phone, and password pattern is different and it does not match with regular expression it display the error message

**FORM SUCCESS ALERT**

If the datas are valid it will show the "profile successfully created" and if not it will display the error by sweetalert 

**MOCKING DEPENDENCY**

The SweetAlert2 library is mocked using jest.mock to prevent the actual pop-up alerts from being shown during tests. This ensures a smooth testing experience.

**FILE STRUCTURE**

Register.test.js is contains all testing validation which is inside the register folder



#### CONCLUSION

This unit testing setup helps ensure that the Register component behaves as expected, handling form validation, user inputs, and displaying success messages correctly.


