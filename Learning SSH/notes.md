#Check if SSH is installed or not
ssh -V
dpkg -l | grep openssh-client
dpkg -l | grep openssh-server

##SSH installation
sudo apt update
sudo apt install openssh-server

##Check SSH server status
sudo systemctl status ssh

##Start SSH server
sudo systemctl start ssh
sudo systemctl enable ssh

##Allow Firewall to connect SSH
sudo ufw allow ssh