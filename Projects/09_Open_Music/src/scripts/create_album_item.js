export function create_album_item(album) {
  const album_item = document.createElement('li');
  album_item.id = 'album_item';
  album_item.className = 'albums_items';

  const album_card_img = document.createElement('div');
  album_card_img.className = 'album_card_img'
  const album_img = document.createElement('img');
  album_img.src = album.img;
  album_img.alt = `${album.title} - ${album.genre} - ${album.band}`;

  album_card_img.appendChild(album_img);
  album_item.appendChild(album_card_img);

  const album_title = document.createElement('h2');
  album_title.innerText = album.title;
  album_item.appendChild(album_title);

  const album_card_info = document.createElement('div');
  album_card_info.className = 'albums_info';
  const album_info_band = document.createElement('p');
  album_info_band.innerText = album.band;
  const album_info_genre = document.createElement('p');
  album_info_genre.innerText = album.genre;
  album_card_info.appendChild(album_info_band);
  album_card_info.appendChild(album_info_genre);

  album_item.appendChild(album_card_info);

  const album_card_action = document.createElement('div');
  album_card_action.className = 'albums_action';
  const album_act_price = document.createElement('h2');
  album_act_price.innerText = `R$${album.price}`;
  const album_act_btn = document.createElement('button');
  album_act_btn.innerText = 'Comprar';
  album_card_action.appendChild(album_act_price);
  album_card_action.appendChild(album_act_btn);

  album_item.appendChild(album_card_action);

  return album_item;
}