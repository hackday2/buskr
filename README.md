Edinburgh Busker App
=======================


> Note, this is just a clone of https://github.com/sahat/hackathon-starter, please see all help information from that repo.


### Start/stopping

#### Locally

To run this locally it's just a normal `npm install`, then `npm start` however there has to be a omogodb connection. If you have mongodb installed locally and running the defaults are fine.

However, if you don't want to install mongodb, will take too long for the hack, we should be able to give you a bit of config (connection url) to connect to the remote db. 


#### Remotely
You can scale the app down or up to switch it off (remove) and on

    heroku ps:scale web=1

    heroku ps:scale web=0


### Increasing remote log levels

    heroku config:set NODE_ENV=development

(think it works)

