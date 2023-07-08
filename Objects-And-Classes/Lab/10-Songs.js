function findSongs(input) {
  const number = input.shift();
  const type = input.pop();

  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  const songs = input.reduce((acc, curr) => {
    const [typeList, name, time] = curr.split("_");

    acc.push(new Song(typeList, name, time));

    return acc;
  }, []);

  if (type === "all") {
    songs.forEach((s) => console.log(s.name));
  } else {
    let filtered = songs.filter((s) => s.typeList === type);
    filtered.forEach((s) => console.log(s.name));
  }
}

findSongs(
    [2,
        'like_Replay_3:15',
        'ban_Photoshop_3:48',
        'all']
        
        
);
