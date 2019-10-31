const csvUrl =
  'https://gist.githubusercontent.com/rohame/c66da4d5fb31f35bf2a02d6417a38f64/raw/combined_logan_data.csv';

let data = [];
const loadData = () => {
  return Promise.all([d3.csv(csvUrl)]).then(datasets => {
    data = datasets[0];
    data = data.map(d => {
      // d.DATE = d.DATE.slice(0, -3);
      return {
        DATE: d.DATE,
        date: new Date(d.DATE),
        TMAX: +d.TMAX,
        PRCP: +d.PRCP,
        AWND: +d.AWND,
        WSF2: +d.WSF2,
        DEP_DELAY: +d.WEATHER_DELAY,
        year: +d.YEAR,
        WT01: +d.WT01,
        WT02: +d.WT02,
        WT03: +d.WT03,
        WT04: +d.WT04,
        WT05: +d.WT05,
        WT06: +d.WT06,
        WT08: +d.WT08,
        WT09: +d.WT09
      };
    });
    return data;
  });
};

