## Description

In this exercise you'll be loading an express server on a remote machine and then updating it. You can look at the videos in the /videos directory.

If exercise 2 was too easy, you can just continue from exercise 2.

If you needed any help for exercise 2 or if it was a challenge, you MUST start from scratch. This is MUCH more important than rushing so you can finish exercise 4. Exercise 4 is FAR less important than being comfortable with this exercise.

## Steps

1. Create a new express project using server-version-1.js
2. Push it to github
3. Create a droplet
4. SSH into your server
5. Install NodeJS on your server
6. Pull your repository onto your server
7. Create a new tmux session
8. Run your server from your newly created tmux session
9. Load the page from on browser of any computer
10. Update your express code locally (see server-version-2.js)
11. Push your project to github
12. SSH back into your droplet
13. Load your tmux session (see the attach command below)
14. Kill your express server running on the droplet
15. Pull the new code from Github
16. Run it
17. Load the page from on browser of any computer


## Reference

See the /videos directory

Tmux commands you'll be needing:

```
tmux new -s somename
tmux attach -t somename
```

To leave a tmux session, press ctrl then while the control key is pressed press b then let go of both keys and press d.
