# Medicines Management Prototype

## Project Setup
### Cloning the project
Clone the project using git:
```shell
git clone git@dps-gitlab.service.nhsbsa:prescriptions/master-data-replacement-prototype.git
```
### NPM Setup
Once the project is cloned, run the following command to download and install node dependencies:
```shell
npm install
```
If there are issues downloading dependencies, you may need to add the nhsbsa npm repository.
To do this:
- Create the file ~/.npmrc
- Add the following configuration:
```shell
registry=https://dps-nexus.service.nhsbsa:8443/repository/npm
strict-ssl=false
```

### Install the live reload plugin
Install the live reload plugin for your browser
* [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei/related)

## Heroku Setup
Heroku acts as a seperate repository which is added as a remote to this repository.
In order to be able to push code to both repositories, you need to be added as a contributor to
the Heroku repository. Contact [Jannes-Proctor-Leake](mailto:janssen.howitson-morley@nhs.net?subject=[Master data replacement Prototype Heroku Access]) to be added.

The Heroku app dashboard can be found [here](https://dashboard.heroku.com/apps/master-data-replacement-prototype).
### Dependencies
In order to push and build to the Heroku repository, the [Heroku toolbelt](https://devcenter.heroku.com/articles/heroku-cli) 
needs installing through npm:
```shell
npm install -g heroku
```

### Authentication
In order to push to the Heroku repository, you need to be authenticated on your machine with Heroku:
```shell
heroku login
```

Your browser will open a window for you to complete the login process.

### Remote repositories
Since Heroku builds itself when a user pushes code to its repository, and the code is hosted on GitLab,
new remotes need to be added to your local project so that when you push code, it pushes to both
the repository on GitLab and the repository on Heroku.

1. Add Heroku remote to your local repository:
```shell
heroku git:remote -a master-data-replacement
```
2. Add GitLab origin as remote (This shouldn't be needed as it should already exist but just in case)
```shell
git remote add origin git@dps-gitlab.service.nhsbsa:prescriptions/master-data-replacement-prototype.git
```
3. Add Heroku repository as a push destination
```shell
git remote set-url --push --add origin https://git.heroku.com/master-data-replacement.git
```
4. Add GitLab repository as a push destination (required as the previous command overrides 
   the defaults so you need to re-add the GitLab repository):
```shell
git remote set-url --push --add origin git@dps-gitlab.service.nhsbsa:prescriptions/master-data-replacement-prototype.git
```
5. Finally check your local repository remotes:
```shell
git remote -v
# Should be similar to the following:
# heroku  https://git.heroku.com/master-data-replacement.git (fetch)
# heroku  https://git.heroku.com/master-data-replacement.git (push)
# origin  git@dps-gitlab.service.nhsbsa:prescriptions/master-data-replacement-prototype.git (fetch)
# origin  https://git.heroku.com/master-data-replacement.git (push)
# origin  git@dps-gitlab.service.nhsbsa:prescriptions/master-data-replacement-prototype.git (push)
```

Now when code is pushed, it should update both repositories and in turn, also deploy the Heroku app
automatically.

## Running the Prototype locally
To run the prototype locally, use gulp:
```shell
gulp
```

The prototype will then open a window in your browser on http://localhost:3000.

Browser sync settings can be accessed on http://localhost:3001.

## Running Pa11y accessibility checks
 
```shell
pa11y-ci -c pa11y.json
```
