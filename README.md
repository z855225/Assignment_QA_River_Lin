# Assignment_QA_River_Lin

## Question-1: Make a draft test plan.
As a sr QA engineer in medium.com, you want to make an overall test plan for its web site at the first day of onboard. So that you will use this draft plan to communicate with stakeholders including engineers and product manager to improve and maintain current public web site quality. 

Assumptions/Criteria:
* There is only one medium.com web site -> https://medium.com/
* The purpose of this test plan is for earlier communication, should no more than 4 pages. 
* There is NO responsive/mobile web site.
* The purpose of test plan is to communicate with engineers and QAs.

### Test Strategy
![testPyramid](/doc/testPyramid.png)

### Smoke Test Cases
![medium](/doc/medium.png)
* User can sign up
* User can sign in
* User can upgrade membership
* User can type keyword to search medium
* User can follow other people
* User can create a draft of article
* User can create and publish an article
* User can read article
* User can add article to bookmark
* User can clap for the article
* User can leave a response for the article
* User can edit article
* User can delete article

### Acceptance Criteria
* Smoke tests all passed, 0 bug

### Over All Workflow
![workFlow](/doc/workFlow.png)

## Question-2: Automation test script.
As a sr QA engineer in www.amazon.com, you want to prepare an automatic test script for login function. So that you and your colleagues can maintain current quality of login function. 

Assumptions:
* There is only one amazon web site -> https://www.amazon.com/
* This script is not only for you but also for your colleagues
* This test script focus on login only (no need to consider sign-up, logout)