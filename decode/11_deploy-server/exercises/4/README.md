## Description

In this exercise, you'll be running two express servers. Each one will be in its own tmux session.

If you needed any help for exercise 3 or if it was a challenge, you MUST start from scratch.


## Steps

1. Create a new express project using first-express-server.js. That program needs the node-fetch npm package to run.
2. Create another express project using second-express-server.js. That program needs the node-fetch npm package to run.
3. Run both servers on your local machine to make sure they work. You should see a message saying you are done.
4. Push both projects to github.
5. Create a droplet
6. SSH into your server
7. Install NodeJS on your server
8. Pull the two repositories onto your server
9. Create a new tmux session
10. Run the first server from your newly created tmux session
11. Load the page from on browser of any computer. You should see an error message.
12. Leave the tmux session and create another tmux session
13. Run the other server
14. Load the page from on browser of any computer


## Reference

See the /videos directory

Tmux commands you'll be needing:

```
tmux new -s somename
tmux attach -t somename
```

To leave a tmux session, press ctrl then while the control key is pressed press b then let go of both keys and press d.
