const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    const theatersresults =  theaterIXX.concat(theaterVGC)
    return theatersresults.map((theater) => theater.hasil === emosi).reduce((a, b) => a + b, 0);
  }
  catch (err) {
    console.log(err);
  };
};

module.exports = {
  promiseOutput,
};
