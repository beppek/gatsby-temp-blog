---
title: 'Docker Quick Tips: How to fix docker error no space left on device'
date: '2019-03-28'
tags: ['docker', 'quick-tip']
---

Docker is great for many things, but there are times when you run into issues with docker. I have often had an issue with docker running out of space during the build process. The fix is usually quick and easy. Simply run the following commands to clear some unused containers that might be taking up space on your computer.

```bash
docker rm $(docker ps -q -f 'status=exited')
```

and

```bash
docker rmi $(docker images -q -f "dangling=true")
```

This could take some time, especially if you have rebuilt your containers a lot. The last time I ran these commands I cleared about 30gb of space from my harddrive.

Try building your docker container(s) again, hopefully your issue was resolved and your container builds successfully.
