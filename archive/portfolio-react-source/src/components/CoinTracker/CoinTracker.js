import React, { useState, useEffect } from 'react';
import Dropdown from '../../core/Dropdown/Dropdown';

const CoinTracker = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const coinList = coins.map(
    (coin) => `${coin.symbol}: ${coin.quotes.USD.price.toFixed(5)} USD`
  );

  const beginIndex = 0;
  const endIndex = 20;
  const truncatedCoinList = coinList.slice(beginIndex, endIndex);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Dropdown
          name='Coin Tracker'
          label={loading ? 'Coins' : `Coins (${truncatedCoinList.length})`}
          placeholder='Select your coin...'
          optionList={truncatedCoinList}
        />
      )}
    </>
  );
};

export default CoinTracker;
