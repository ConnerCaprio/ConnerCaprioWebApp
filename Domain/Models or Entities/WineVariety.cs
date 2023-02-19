using Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace Domain.Models_or_Entities
{
    public class WineVariety
    {
        [Key]
        public Guid Id { get; set; }
        public string Brand { get; set; }
        public string? Name { get; set; }
        public string? Review { get; set; }
        public int? Year { get; set; }
        public int? Price { get; set; }
        public string? GrapeType { get; set; }
        public WineTypes? WineType { get; set; } = WineTypes.NA;
        public string? Notes { get; set; }    
    }
}