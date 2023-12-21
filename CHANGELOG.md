# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Changelogs

### [0.1.5] - 2023-12-21

* Add birthdays and holidays to calendar and image view

### [0.1.4] - 2023-12-18

* Adopt things to new api structure (image instead of title_image, calendar path without all

### [0.1.3] - 2023-12-18

* Change calendars to pages on calendar page
* Add bootstrap to npm packages
  * Remove cdn include
* Calendars page refactoring
* Fix api link on about page
* Fix image width on mobile devices
* Disable social links in footer

### [0.1.2] - 2023-12-17

* Fix image redirect

### [0.1.1] - 2023-12-17

* Add sass preprocessor

### [0.1.0] - 2023-12-17

* Initialize project using Create React App
* First changes; Add calendar overview; calendar page, about and contact page and more

## Add new version

```bash
# → Either change patch version
$ vendor/bin/version-manager --patch

# → Or change minor version
$ vendor/bin/version-manager --minor

# → Or change major version
$ vendor/bin/version-manager --major

# → Usually version changes are set in the main or master branch
$ git checkout master && git pull

# → Edit your CHANGELOG.md file
$ vi CHANGELOG.md

# → Commit your changes to your repo
$ git add CHANGELOG.md VERSION .env && git commit -m "Add version $(cat VERSION)" && git push

# → Tag your version
$ git tag -a "$(cat VERSION)" -m "Version $(cat VERSION)" && git push origin "$(cat VERSION)"
```
