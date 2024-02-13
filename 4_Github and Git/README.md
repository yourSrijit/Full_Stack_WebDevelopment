# Git and GitHub Prompts

## Git Prompts

### Basic Commands

- **git init**: Initialize a new Git repository.
- **git clone [url]**: Clone a repository into a new directory.
- **git add [file]**: Add file(s) to the staging area.
- **git commit -m "[message]"**: Commit changes to the repository with a message.
- **git status**: Show the status of the working directory and staging area.
- **git diff**: Show changes between commits, commit and working tree, etc.
- **git log**: Show commit logs.
- **git branch**: List, create, or delete branches.
- **git checkout [branch/commit]**: Switch branches or restore working tree files.
- **git merge [branch]**: Merge changes from another branch.
- **git pull**: Fetch from and integrate with another repository or a local branch.
- **git push**: Update remote refs along with associated objects.
- **git remote**: Manage sets of tracked repositories.

### Advanced Commands

- **git reset**: Reset current HEAD to the specified state.
- **git revert**: Revert some existing commits.
- **git rebase**: Reapply commits on top of another base tip.
- **git cherry-pick**: Apply the changes introduced by some existing commits.
- **git stash**: Stash the changes in a dirty working directory.
- **git tag**: Create, list, delete, or verify a tag object.

## GitHub Prompts

### Repository Management

- **Create Repository**: Create a new repository on GitHub.
- **Fork Repository**: Create a fork of a repository on GitHub.
- **Clone Repository**: Clone a repository from GitHub to your local machine.
- **Pull Request**: Propose changes to a repository and request they be merged.

### Issue Tracking

- **Create Issue**: Open a new issue to track bugs, tasks, or enhancements.
- **Close Issue**: Close an issue once it's been resolved.
- **Reopen Issue**: Reopen a closed issue if it's not fully resolved.

### Collaboration

- **Add Collaborator**: Grant repository access to another GitHub user.
- **Review Pull Request**: Review changes proposed in a pull request and leave comments.
- **Merge Pull Request**: Merge approved changes from a pull request into the main branch.

### Branching

- **Create Branch**: Create a new branch to work on a specific feature or fix.
- **Delete Branch**: Remove a branch once its changes have been merged or are no longer needed.

### GitHub Pages

- **Set Up GitHub Pages**: Host a website directly from your GitHub repository.


Git Commands
============

_A list of Git commands
___
___

### Tell Git who you are

| Description | Command |
| ------- | ----------- |
| Configure the author name.|`git config --global user.name "<username>"`|
| Configure the author email address.|`git config --global user.email <email address>`|



### Getting & Creating Projects

| Description | Command  |
| ------- | ----------- |
| Initialize a local Git repository | `git init` |
| Create a local copy of a remote repository | `git clone ssh://git@github.com/<username>/<repository-name>.git` |

### Basic Snapshotting

| Description | Command |
| ------- | ----------- |
| Check status | `git status` |
| Add a file to the staging area | `git add <file-name.txt>` |
| Add all new and changed files to the staging area | `git add -A` or <br> `git add .` |
| Commit changes | `git commit -m "<commit message>"` |
| Remove a file (or folder) | `git rm -r <file-name.txt>` |



### Inspection & Comparison

| Description | Command |
| ------- | ----------- |
| View changes | `git log` |
| View changes (detailed) | `git log --summary` |
| View changes in one line (briefly) | `git log --oneline` or <br> `git log --pretty=oneline` or<br> `git log --pretty=short` |




### Undo to previous file

| Description | Command |
| ------- | ----------- |
| List of all commit with commit id and commit message) | `git log --oneline` |
| Return to previous commit <commit id> | `git checkout<commit id>` |
| Revert commit <commit id> (undo one particular commit) | `git revert <commit id>` |
| Reset to previous commit <commit id> (remove history of all commit after <commit id> ) | `git reset --hard <commit id>`|
| Stop a file being tracked | `git rm --cached <file/folder>` |
| Restore a file to a previous commit| `git checkout <file/to/restore>` |



### Branching & Merging

| Description | Command |
| ------- | ----------- |
| List branches (the asterisk denotes the current branch) | `git branch` |
| List all branches (local and remote) | `git branch -a` |
| Create a new branch | `git branch <branch name>` |
| Create a new branch and switch to it | `git checkout -b <branch name>` |
| Clone a remote branch and switch to it | `git checkout -b <branch name> origin/<branch name>` |
| Rename a local branch | `git branch -m <old branch name> <new branch name>` |
| Switch to a branch | `git checkout <branch name>` |
| Switch to the branch last checked out | `git checkout -` |
| Discard changes to a file | `git checkout -- <file-name.txt>` |
| Delete a branch | `git branch -d <branch name>` |
| Delete a remote branch | `git push origin --delete <branch name>` |
| Preview changes before merging | `git diff <source branch>  <target branch>` |
| Merge a branch into the active branch | `git merge <branch name>` |
| Merge a branch into a target branch | `git merge <source branch> <target branch>` |
| Stash changes in a dirty working directory | `git stash` |
| Remove all stashed entries | `git stash clear` |

### Sharing & Updating Projects

| Description | Command |
| ------- | ----------- |
| Push a branch to your remote repository | `git push origin <branch name>` |
| Push changes to remote repository (and remember the branch) | `git push -u origin <branch name>` |
| Push changes to remote repository (remembered branch) | `git push` |
| Push changes to remote repository all branch | `git push --all` |
| Push changes to remote repository (Force) | `git push -f` |
| Delete a remote branch | `git push origin --delete <branch name>` |
| Update local repository to the newest commit | `git pull` |
| Pull changes from remote repository | `git pull origin <branch name>` |
| Add a remote repository | `git remote add origin ssh://git@github.com/<username>/<repository-name>.git` |
| Set a repository's origin branch to SSH | `git remote set-url origin ssh://git@github.com/<username>/<repository-name>.git` |


[Follow me 🍵](https://github.com/yourSrijit)
