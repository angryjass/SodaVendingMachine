using SodaVendingMachine.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SodaVendingMachine.Repositories
{
    public class SVMRepository
    {
        SodaVendingMachineContext context;
        public SVMRepository()
        {
            context = new SodaVendingMachineContext();
        }
        public Dictionary<Soda, int?> GetSodaStorage()
        {
            return context.SodaStorage.ToDictionary(s => s.Soda, v => v.Value);
        }

        public Dictionary<Coins, int?> GetCoinsStorage()
        {
            context.Coins.ToDictionary(c => c, a => a.CoinsStorage.First().Value);
            var coins = context.Coins.ToList();
            Dictionary<Coins, int?> coinsStorage = new Dictionary<Coins, int?>();
            foreach(var coin in coins)
            {
                int? value = context.CoinsStorage.FirstOrDefault(a => a.CoinId == coin.Id).Value;

                coinsStorage.Add(coin, value);
            }
            return coinsStorage;
        }
    }
}
