#!/usr/bin/env bash
set -e

echo "  0% -- Setting Environment Variables"
export DEBIAN_FRONTEND=noninteractive

echo "  5% -- Installing Needed Utilities"
{
sudo apt-get update 
sudo apt-get install -y git curl
}

echo " 40% -- Installing NVM and Node"
{
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
nvm install --lts
}

echo " 45% -- Installing NPM Packages"
{
cd /vagrant
npm install
}

echo "100% -- Ready to Roll!"
