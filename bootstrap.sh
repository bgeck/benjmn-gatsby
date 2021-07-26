#!/usr/bin/env bash
set -e

echo "  0% -- Setting Environment Variables"
export DEBIAN_FRONTEND=noninteractive
export ANDROID_SDK_ROOT=/home/vagrant/Android/sdk
export PATH="$PATH:/home/vagrant/Android/sdk/platform-tools"
export PATH="$PATH:/home/vagrant/flutter/bin"

# permanently set for future logins
sudo tee "/etc/profile.d/flutter.sh" > "/dev/null" <<EOF
export ANDROID_SDK_ROOT=/home/vagrant/Android/sdk
export PATH="$PATH"
cd /home/vagrant/projects
EOF

echo "  5% -- Installing Needed Utilities"
{
sudo apt-get update 
sudo apt-get install -y openjdk-8-jdk wget unzip git
} &> /dev/null

echo " 40% -- Initializing Workspace"
{
sudo rm -rf Android .android flutter
mkdir -p Android/sdk .android && touch .android/repositories.cfg
} &> /dev/null

echo " 45% -- Downloading Android SDK"
{
wget -q -O sdk-tools.zip https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip
unzip sdk-tools.zip && rm sdk-tools.zip
mv tools Android/sdk/tools
} &> /dev/null

echo " 55% -- Installing Android SDK"
{
cd Android/sdk/tools/bin && yes | ./sdkmanager --licenses
./sdkmanager "build-tools;30.0.3" "patcher;v4" "platform-tools" "platforms;android-30" "sources;android-30" "cmdline-tools;latest"
} &> /dev/null

echo " 70% -- Installing Flutter"
{
cd /home/vagrant
git clone https://github.com/flutter/flutter.git
flutter doctor --android-licenses
flutter doctor
} &> /dev/null

echo "100% -- Ready to Roll!"
