import { updateRangeBackground } from "./input_range.js";
import { albumList } from "./data.js";
import { create_album_item } from "./create_album_item.js";
import { btnThemeEvent } from "./theme.js";

const album_list_element = document.getElementById('album_list');

for (const album of albumList) {

  album_list_element.appendChild(create_album_item(album));

}

updateRangeBackground();
btnThemeEvent();



