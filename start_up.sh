#!/bin/bash

# Runs the Ganache Network
ECHO Starting up Ganache Network...;
start sh --login -e ganache-cli --allowUnlimitedContractSize -l 8000000

ECHO Compiling the Smart Contracts...;
npm run compile

ECHO Deploying the Smart Contracts...;
npm run deploy

# Starts the server for the Application
ECHO Starting up Application Server...;
npm run dev
