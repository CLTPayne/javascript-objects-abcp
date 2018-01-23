var playlist = {
  'Beatles': 'Paperback Writer',
  'Justin Timberlake': 'Supplies',
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist;
}