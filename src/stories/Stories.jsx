import React, { useEffect } from "react";
import Zuck from "zuck.js";
import "zuck.js/dist/zuck.css";
import "zuck.js/dist/skins/snapgram.css";

const CreateStory = () => {
  let timeIndex = 0;
  const shifts = [
    35,
    60,
    60 * 3,
    60 * 60 * 2,
    60 * 60 * 25,
    60 * 60 * 24 * 4,
    60 * 60 * 24 * 10,
  ];

  const TimeStamp = () => {
    const now = new Date();
    const shift = shifts[timeIndex++] || 0;
    const date = new Date(now - shift * 1000);
    return date.getTime() / 1000;
  };

  useEffect(() => {
    new Zuck("stories", {
      backNative: true,
      previousTap: true,
      autoFullScreen: true,
      skin: "snapgram",
      avatars: true,
      list: false,
      cubeEffect: true,
      localStorage: true,
      stories: [
        {
          id: "ramon",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg",
          name: "ramon",
          link: "https://facebook.com",
          lastUpdated: TimeStamp(),
          items: [
            Zuck.buildItem(
              "ramon-1",
              "photo",
              3,
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg",
              "link to image",
              false,
              false,
              TimeStamp()
            ),
            Zuck.buildItem(
              "ramon-2",
              "video",
              0,
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4",
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg",
              "link to image",
              false,
              false,
              TimeStamp()
            ),
            Zuck.buildItem(
              "ramon-3",
              "photo",
              3,
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.jpg",
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.jpg",
              "link to image",
              "You Caption in stories",
              false,
              TimeStamp()
            ),
          ],
        },
        {
          id: "Youname2",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg",
          name: "Youname2",
          link: "https://facebook.com",
          lastUpdated: TimeStamp(),
          items: [
            Zuck.buildItem(
              "Youname2-1",
              "video",
              0,
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4",
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg",
              "link to image",
              false,
              false,
              TimeStamp()
            ),
            Zuck.buildItem(
              "Youname2-2",
              "photo",
              3,
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg",
              "link to image",
              false,
              false,
              TimeStamp()
            ),
          ],
        },
        {
          id: "Youname3",
          photo:
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg",
          name: "Youname3",
          link: "https://facebook.com",
          lastUpdated: TimeStamp(),
          items: [
            Zuck.buildItem(
              "Youname3-1",
              "photo",
              3,
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg",
              "link to image",
              false,
              false,
              TimeStamp()
            ),
            Zuck.buildItem(
              "Youname3-2",
              "photo",
              3,
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
              "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg",
              "link to image",
              false,
              false,
              TimeStamp()
            ),
          ],
        },
      ],
    });
  }, []);

  return <div id="stories"></div>;
};

export default CreateStory;
