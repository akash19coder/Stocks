const basePath = 'https://www.alphavantage.co';

export const searchQueryStock = async (symbol: string) => {
   const url = `${basePath}/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=PWB5NMY28MAJ5OU6`
   const data = await fetch(url);

   if(!data.ok){
     throw new Error("Symbol not listed");
   }
   return await data.json();
}

export const showStockDetails = async (symbol: string, interval: string) => {
  const url = `${basePath}/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=${interval}&apikey=PWB5NMY28MAJ5OU6`
  const data = await fetch(url);

  if(!data.ok){
    throw new Error("Stock not Found");
  }
  return await data.json();
}

export const getCompanyOverview = async (symbol: string) => {
  const url = `${basePath}/query?function=OVERVIEW&symbol=${symbol}&apikey=PWB5NMY28MAJ5OU6`
  
  const data = await fetch(url);

  if(!data.ok){
    throw new Error("Overview not available");
  }
  return await data.json();
}