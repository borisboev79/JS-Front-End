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

  // LECTURER's SOLUTION

  const songList = input
    .map((songAsText) => {
      const [typeList, name, time] = songAsText.split("_");
      const song = new Song(typeList, name, time);

      return song;
    })
    .filter((song) => {
        if (type === "all"){
            return song;
        }

        return song.typeList === type;
    })
    .map((song) => song.name)
    .join("\n");

    console.log(songList);


  // MY SOLUTION
  //   const songs = input.reduce((acc, curr) => {
  //     const [typeList, name, time] = curr.split("_");

  //     acc.push(new Song(typeList, name, time));

  //     return acc;
  //   }, []);

  //   if (type === "all") {
  //     songs.forEach((s) => console.log(s.name));
  //   } else {
  //     let filtered = songs.filter((s) => s.typeList === type);
  //     filtered.forEach((s) => console.log(s.name));
  //   }
}

findSongs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
