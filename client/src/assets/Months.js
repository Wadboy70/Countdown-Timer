export default (year) => {
        return([
        {
            name: "January",
            length: 31
        },
        {
            name: "February",
            length: year % 4 === 0 ? 29 : 28
        },
        {
            name: "March",
            length: 31
        },
        {
            name: "April",
            length: 30
        },
        {
            name: "May",
            length: 31
        },
        {
            name: "June",
            length: 30
        },
        {
            name: "July",
            length: 31
        },
        {
            name: "August",
            length: 31
        },
        {
            name: "September",
            length: 30
        },
        {
            name: "October",
            length: 31
        },
        {
            name: "November",
            length: 30
        },
        {
            name: "December",
            length: 31
        }
    ])
};