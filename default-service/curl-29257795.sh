#!/bin/sh
while true; do
        sleep 10
        date -u
        curl -i --silent https://ai-static.play.tv2.no/v4/content/a-1614551 | egrep -i '(content-type:)|(modified)'
done;
