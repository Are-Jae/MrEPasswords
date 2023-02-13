Mr. E. Password Generator 
##
I was provided with starter code to develop into a passowrd generator. My first task is to figure out how to complete the code in order to reach the acceptance criteria. 

Firstly, I need to determine how the code provided to me functions. So far I can see that there is a box for inputting user information and a red button to submit that information. However, the button currently does not respond when a user clicks it. 

I need to add an eventListener in order to make the button work properly

The application does not currently generate a password due to their being no prompts for the user to choose from. I will have to modify the code so that the user is prompted to choose the criteria for their password 

When deciding how to get this code to execute properly I wanted to pass all the data within the given arrays through a 'For Loop' that would then prompt the user to choose their password criteria. However this won't work because the user first needs to be prompted in order to input any criteria. I need to add a prompt function in order for the array data to populate for user. 

Adding an event listener to the button is proving to be difficult as I cannot successfully run the method for this issue. Whenever I add 'onclick' to my button function it does not read as a proper javascript event. 

When I rearranged how my function was written I was no longer recieving any error messages in the console but my button still does not seem to be responding to the event assigned to it. It could also be that my code for the password input values is incomplete and is therefore not being read so the button will also not be functional. 

Placed code inside of button function while using if/else statements to prompt user on password criteria. 

Used For Loop function in order to pass values through array and print the password to the console.


## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security



## Acceptance Criteria 
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


BIGGEST CHALLENGES
##
My biggest challenges were trying to figure how to research information and being able to use that information to write functioning code. I was understanding how the code should work but was unable to write it out. Once I had figured out which tools I needed to be using I was still missing key components to the funtions themselves. I worked with my tutor to go over the gaps in my knowledge and break down the parts that were incomplete and that I did not fully understand. After doing this I was able to write functioning for my password generator. 


Sources 
##
https://htmlcheatsheet.com/js/

codegrepper.com/code-examples/javascript/how+to+add+onclick+event+in+javascript

Tutor
Jacob Nordan 


Working code
##
[!picture](./Assets/js%20password%20pic.JPG) 

## Repo 
![https://github.com/Are-Jae/MrEPasswords]


## Deployed App
![]