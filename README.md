# Text to curves convertor for CorelDRAW

Do you sometimes have to convert text to curves on hundreds of pages in a CorelDRAW document? Well, I do! 

I've used a `.gms` macro for that when I was using Windows. But now I've switched to MacOS and `.gms` macros are unusable here. So I had to rewrite my most-used macro with JavaScript.

## Installation
1. Download the [TextToCurvesConvertor.js](TextToCurvesConvertor.js) file.
2. As per [official instruction](https://community.coreldraw.com/sdk/w/guide/347/5-1---working-with-javascript-js-scripts#LoadScript) you should open up the `Scripts` docker (`Tools > Scripts > Scripts`), click `Load`, and then choose the folder where the [downloaded `.js` file](TextToCurvesConvertor.js) is located.

## Usage

Just launch the script. It will iterate all shapes in the active document and convert text to curves. It dives into groups and `PowerClip`s too!

## License
Copyright (c) 2022 Anton Syuvaev

Licensed under the MIT license.
