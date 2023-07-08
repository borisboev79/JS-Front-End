function enterTown(input) {

  input.reduce((acc, curr) => {
    const [name, lat, lon] = curr.split(" | ");

    const latitude = Number(lat).toFixed(2);
    const longitude = Number(lon).toFixed(2);

    acc.push({ name, latitude, longitude });

    return acc;
  }, []).forEach(t => console.log(t))

}

enterTown(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
