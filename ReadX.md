yarn init -y
yarn add --save-dev hardhat // adds all modules like ethers (--dev is used for recent versions + both do the exactly same job)
yarn hardhat
ADD SOLHINT --- formatter and error dector for solidity (eslint for js)-----LINTING
ADD prettier
ctl+p =>ext install esbenp.prettier-vscode..i settings.json add default formatter\_\_\_\_for each project
yarn add --dev @chainlink/contracts

FOR EASY DEPLOYMENT AND TESTING----to different network
yarn add--save-dev hardhat-deploy
add hardhat-ethers-deploy override + require()
Make a seperate deploy folder and create 01-deploy-fundMe.js
create helper-hardhat-config.js to store network and address of contracts

// Use yarn hardhat deploy --network goreli

In hardhat.config() add namedAccounts


solhint 'contracts/**/*.sol---- **/ subdirectory or * current one any file with .sol lint it 