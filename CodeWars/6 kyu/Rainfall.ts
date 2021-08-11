export class G964 {
  public static mean = (town, strng: string) => {
    const city = strng.split("\n").find((city) => city.split(":")[0] === town);

    if (!city) return -1;

    return (
      city
        .split(":")[1]
        .split(",")
        .map((month) => Number(month.split(" ")[1]))
        .reduce((prev, current) => prev + current, 0) / 12
    );
  };
  public static variance = (town, strng) => {
    const mean = G964.mean(town, strng);

    const city = strng.split("\n").find((city) => city.split(":")[0] === town);

    if (!city) return -1;

    return (
      city
        .split(":")[1]
        .split(",")
        .map((month) => (Number(month.split(" ")[1]) - mean) ** 2)
        .reduce((prev, current) => prev + current, 0) / 12
    );
  };
}