const fashion = [
    {
        image: "https://img.freepik.com/premium-vector/dollar-usd-currency-golden-sign-front-view-isolated-white-currency-by-central-bank-america-design-element_337410-1964.jpg?w=360",
        title: "CURRENCY OF UNITED STATES",
        brand: "DOLLAR",
        price: "USD"
       
    },
    {
        image: "https://thumbs.dreamstime.com/b/gold-sign-euro-currency-vector-illustration-isolated-white-concept-investment-european-market-savings-power-luxury-185635838.jpg",
        title: "CURRENCY OF EUROPE",
        brand: "EURO",
        price: "EUR"
    },
    {
        image: "https://img.freepik.com/premium-vector/shiny-golden-yen-currency-symbol-isolated-white_149267-2881.jpg?w=360",
        title: "CURRENCY OF JAPAN",
        brand: "YEN",
        price: "JPY"
    },
    {
        image: "https://png.pngtree.com/png-vector/20191023/ourmid/pngtree-pound-sign-icon-cartoon-style-png-image_1841699.jpg",
        title: "CURRENCY OF UNITED KINGDOM",
        brand: "British pound sterling",
        price: "GBP"
    },
    {
        image: "https://t4.ftcdn.net/jpg/04/35/91/41/360_F_435914123_d0ZjWYGMGSUHKzUFBltryElTewFYXr70.jpg",
        title: "CURRENCY OF SWITZERLAND",
        brand: "SWISS FRANCE",
        price: "CHF"
    },
    {
        image: "https://img.freepik.com/premium-photo/australian-dollar-currency-symbol-australia-golden-3d_373783-335.jpg?w=2000",
        title: "CURRENCY OF AUSTRELIA",
        brand: "AUSTRELIAN DOLLAR",
        price: "AUD"
    },
    {
        image: "https://cdn1.iconfinder.com/data/icons/currency-100/32/cad_canadian_dollar_canada_money_currency-512.png",
        title: "CURRENCY OF CANADA",
        brand: "CANADIAN DOLLAR",
        price: "CAD"
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/3033/3033765.png",
        title: "CURRENCY OF NEW ZEALAND",
        brand: "CNEW ZEALAND DOLLAR",
        price: "NZD",
        link:  "cur.html"
    }

]
for (let i = 0; i <= 7; i++) {
    const main = document.querySelector(".main");
    console.log(main);

    const card = document.createElement('div');
    card.classList = 'card';

    const clothCard = `
            <a href="#">
                <div class="img">
                    <img src=${fashion[i].image} alt="">
                </div>
                <div class="details">
                    <h3>${fashion[i].title}</h3>
                    <h4>${fashion[i].brand}</h4>
                    <h5>${fashion[i].price}</h5>
                </div>
            </a>
        `;

    card.innerHTML += clothCard;
    main.appendChild(card)
}