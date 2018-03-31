## Description

In the last exercise, you put up a server locally and made it accessible to the outside world. However, this has the disadvantage that your server stops running when your computer is turned off. You'll solve this issue in this exercise by putting an express server on a remote machine.

The steps are described in the videos in the /videos directory

## Steps

1. Create a droplet
2. SSH into your server
3. Install NodeJS on your server
4. Write an express server
5. Push it to github
6. Pull it onto your server
7. Run it
8. Load the page from on browser of any computer

## Reference

The steps are illustrated in the /videos directory

Tmux commands you'll be needing:

```
tmux new -s somename
tmux attach -t somename
```

To leave a tmux session, press ctrl then while the control key is pressed press b then let go of both keys and press d.
