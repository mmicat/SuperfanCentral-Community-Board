# Web Development Project 1 - _Community Board_

Submitted by: **Mira Mohamad Ismail**

This web app: **Superfan Central is a community board for the UAE's pop-culture and fandom scene. It showcases recurring and upcoming events — comic cons, gaming festivals, anime conventions, cosplay meetups, and trading-card shows — happening across the Emirates, so superfans can find their next gathering at a glance. Each card displays the event's poster, category, schedule, venue, and a link to learn more.**

Time spent: **~4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app has a cohesive, unique theme for events or resources relevant to a specific community**
  - [x] Header/title describing the theme is displayed
- [x] **At least 10 unique events or resources are displayed in a responsive card format**
  - [x] There are at least 10 cards displayed for 10 different events
  - [x] The cards should be displayed in an organized format (ex. a grid, or in one line)
  - [x] Each card should include some information about the event or resource

The following **optional** features are implemented:

- [x] Buttons or links to a related resources are on each card component
  - [x] All cards have buttons or links in addition to text
- [x] The site is responsive for both desktop and mobile formats
  - [x] Web app is shown in a mobile format
  - [x] **Video Walkthrough Special Instructions**: To ease the grading process, please use Chrome Developer Tools' "Toggle Device" button to demonstrate that your web application's responsiveness in both a desktop _and_ a mobile format. Detailed instructions can be found below this stretch feature on the project page.

The following **additional** features are implemented:

- [x] Event data is kept in a separate `src/data/events.js` file, so the Board and Event components stay generic and reusable.
- [x] Category badges visually tag each event by type (Comic Con, Gaming, Anime, etc.).
- [x] Cards have a hover-lift effect, and links to real event sites open safely in a new tab (`rel="noopener noreferrer"`).
- [x] Responsive grid built with CSS Grid `auto-fill` + `minmax`, so it reflows from multi-column to single-column with no media queries.

## Video Walkthrough

Here's a walkthrough of implemented required features:

![Superfan Central Community Board Video Walkthrough](https://i.imgur.com/eWXTCbw.gif)
(https://i.imgur.com/eWXTCbw.gif)

GIF created with Snip & Sketch for Windows 11

## Notes

A few challenges encountered while building the app:

- **Sourcing real event images:** a few images had to be re-hosted on a reliable image host to load consistently or in better quality; some photos were also generally hard to source, so some posters instead of stills (the preferred) were used!
- **Aligning cards of different heights:** event names wrap to different line counts, which could've left the "More info" buttons at uneven heights. Fixed by making the card a flex column, letting the card body grow (`flex: 1`), and pushing the button down with `margin-top: auto` so every button lines up at the bottom.
- **Responsiveness without media queries:** learned to use CSS Grid `repeat(auto-fill, minmax(280px, 1fr))`, which reflows the layout automatically across screen sizes.

## License

    Copyright 2026 Mira Mohamad Ismail

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
