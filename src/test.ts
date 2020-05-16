import cheerio from "cheerio";
import fetch from "node-fetch";
import { foodClubParser } from "./foodclub-parser";

const url = "https://www.foodclub.ru/detail/solyanka-sbornaya-myasnaya/";

const test = async () => {
  const html = await fetch(url).then((x) => x.textConverted());
  const $ = cheerio.load(html);

  console.log(foodClubParser($, url));
};

test();
