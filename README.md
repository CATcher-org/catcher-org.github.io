# CATcher Product Site

# Setting up 
This section guides you through the steps required to set up your computer for developing CATcher's product site.

## Prerequisites
You need Node 12 to develop this project. 
Run `node -v` in your OS terminal to check the version of Node on your computer. 

If you do not have Node 12 installed in your computer, click on [this link](https://nodejs.org/en/blog/release/v12.20.0/) to download Node 12. 

## Getting Started
1. Fork this repository into your Github account.

2. Clone the forked repository into your computer.

3. Install Markbind with npm: Run `npm install -g markbind-cli`.

4. Compile and start the application: Run `markbind serve`.
    - **Note**: If this step fails, it may be possible that the port that `Markbind` is attempting to serve the site in is being used. This may be rectified wit the following command: `markbind serve -p <available_port>`.
