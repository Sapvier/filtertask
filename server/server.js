const {data} = require("./mocks/data");
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    const {color = [], sdd = [], size = [], length = []} = req.query;


    const dataAfterColorFilter = color.length
        ? data.filter((v) => color.includes(v.color))
        : data;
    const dateAfterSddFilter = sdd.length
        ? dataAfterColorFilter.filter((v) => sdd.includes(v.sdd))
        : dataAfterColorFilter
    const dateAfterSizeFilter = size.length
        ? dateAfterSddFilter.filter((v) => size.includes(v.size))
        : dateAfterSddFilter
    const dateAfterLengthFilter = length.length
        ? dateAfterSizeFilter.filter((v) => length.includes(v.length))
        : dateAfterSizeFilter



    // const dataAfterColorFilter = colors.length
    //     ? dataAfterRamFilter.filter((v) => colors.includes(v.colorId))
    //     : dataAfterRamFilter;
    // const dataAfterDiscountFilter = discounts.length
    //     ? dataAfterColorFilter.filter((v) => discounts.includes(v.discountId))
    //     : dataAfterColorFilter;
    // //
    // const createFiltersArray = (data, property) => {
    //     return data.map((a) => a[property]);
    // };
    //
    // const createFilterObj = (array) =>
    //     array.reduce((obj, id) => {
    //         const amount = obj[id] || 0;
    //         return { ...obj, [id]: amount + 1 };
    //     }, {});
    //
    // const createNewFilter = (obj, type) =>
    //     filters[type].map(({ amount, id, ...rest }) => ({
    //         id,
    //         amount: obj[id] || 0,
    //         ...rest,
    //     }));
    //
    // const getFilters = () => {
    //     const colorsArr = createFiltersArray(dataAfterDiscountFilter, "colorId");
    //     const discountsArr = createFiltersArray(dataAfterDiscountFilter, "discountId");
    //     const ramsArr = createFiltersArray(dataAfterDiscountFilter, "ramId");
    //
    //     const colorsObj = createFilterObj(colorsArr);
    //     const discountObj = createFilterObj(discountsArr);
    //     const ramsObj = createFilterObj(ramsArr);
    //
    //     const newColor = createNewFilter(colorsObj, "colors");
    //     const newDiscount = createNewFilter(discountObj, "discounts");
    //     const newRam = createNewFilter(ramsObj, "rams");
    //
    //     return {
    //         discounts: newDiscount,
    //         rams: newRam,
    //         colors: newColor,
    //     };
    // };
    //
    // const newFilters = getFilters();

    res.send({
        data: dateAfterLengthFilter, filters: {
            color, sdd, length, size
        }
    });
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

