var playlist = {
  'Beatles': 'Paperback Writer',
  'Justin Timberlake': 'Supplies',
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  
  retun playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist;
}