var playlist = {
  'Beatles': 'Paperback Writer',
  'Justin Timberlake': 'Supplies',
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.Justin Timberlake
  return playlist;
}