using System;
using System.Collections.Generic;

namespace SodaVendingMachine.Models
{
    public partial class SodaStorage
    {
        public int Id { get; set; }
        public int SodaId { get; set; }
        public int? Value { get; set; }

        public virtual Soda Soda { get; set; }
    }
}
