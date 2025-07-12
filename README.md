
# Version Control Basic Proficiency
<p align="center">
  <img width="600" alt="image" src="https://github.com/user-attachments/assets/2e0e1dd0-c9f8-43ed-9d14-65d2298ce4c1" />
</p>

This free certification exists to promote collaboration among coders and artists of the Baltimore Metropolis. Learning **Version Control** will enable you to collaborate effectively with others to develop quality products quickly. We hope that it will lay the groundwork for a high-tech local economy where talented folks can make use of their skills.

Successfully merging a pull request into this repository will result in a Code Collective Version Control Basic Proficiency Certification with your name and username on it. Make sure to set your name in GitHub when making an account, if you would like it to appear on this certification!

This program has been run at Baltimore Code and Coffee and Code Collective, and we are scheduled to run it at [Baltimore Indie Game Devs (BIG)](https://www.meetup.com/baltimore-indie-game-developers-group/events/309057584) on August 16, 2025.


## Getting Started

### 0. Create and Account and Install tools
Create an account on GitHub.com

Install on your Windows, Mac, or Linux Machine
- Git, and
- A Graphical User Interface (GUI): GitHub Desktop, VSCode, or GitKraken, or
- GitHub (gh) for the command line

gh (the GitHub CLI) is highly recommended for managing your Git credentials when using the command line
<p align="center">
<img width="600" alt="image" src="https://github.com/user-attachments/assets/b49c50ab-b5e4-4851-b62e-4fc588fdcf48" />
</p>

A screenshot of GitHub Desktop showing the changes made at one point in code history

#### On Mac
Install GitHub Desktop
https://github.com/apps/desktop
You may need to install Git and VSCode (optional) separately

#### On Windows
For advanced coders, I recommend using WSL2 to run Ubuntu, then follow the Ubuntu installation below  
Otherwise, installing GitHub Desktop is sufficient
https://desktop.github.com/download/

#### On Ubuntu
```bash
# Update package list
sudo apt update
sudo apt install git -y # Install Git
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-key C99B11DEB97541F0
sudo apt-add-repository https://cli.github.com/packages
sudo apt update # Update package list again with GitHub CLI repo
sudo apt install gh -y # Install GitHub CLI
wget https://github.com/shiftkey/desktop/releases/download/release-3.3.8-linux1/GitHubDesktop-linux-3.3.8-linux1.deb # (Optional) Install GitHub Desktop (Unofficial community build)
sudo apt install ./GitHubDesktop-linux-3.3.8-linux1.deb
```
If you don't have it already, install VSCode
```bash
sudo snap install code --classic
```

### 1. Fork the Repository
<p align="center">
  <img width="600" alt="fork" src="https://github.com/user-attachments/assets/e399c0c8-cf7d-4ea4-b239-de3e17e6fcb4" />  
</p>

Fork the repository by clicking the "Fork" button at the top right corner of this page. This will create a copy of the repository in your GitHub account.

### 2. Clone the Repository
Clone your forked repository to your local machine using the following command:

```sh
git clone https://github.com/YOUR-USERNAME/version-control-basic.git
```

Replace `YOUR-USERNAME` with your GitHub username.

### 3. Make Your Changes
Add a file named `yourname.txt` to the `editme` folder. Open this file and add some content that identifies you, such as your name and a brief introduction. You may also add an image `yourimage.jpeg`. Please keep it clean and less than 1MB in size. Your GUI tool (or `git diff`) should show that it has been added. 

### 4. Commit Your Changes
Once you've made your changes, commit them with a descriptive message:  

<p align="center">
  <img width="600" alt="image" src="https://github.com/user-attachments/assets/2254bfc2-4f3e-43d9-a6a9-d1178970c472" />
</p>  

or, on the command line

```sh
git add -A
git commit -m "Add yourname.txt to names folder"
```

### 6. Push Your Changes
Push your changes to your forked repository:  

<p align="center">
  <img width="600" alt="image" src="https://github.com/user-attachments/assets/062e3e99-a3ad-4a95-b583-bf6e972bc7fa" />
</p>  

or, on the command line

```sh
git push
```

### 7. Submit a Pull Request
Go to your copy of the repository on GitHub, and you should see a prompt to submit a pull request from your new branch. Click "Compare & pull request" and provide a descriptive title and comment for your pull request. The session leader will need to approve it. 

Congratulations! You’ve successfully contributed to Code Collective's Version Control Basic Proficiency repository. We will review your pull request and merge it if everything looks good.
