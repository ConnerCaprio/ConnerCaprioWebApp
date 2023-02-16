namespace Domain.Models_or_Entities
{
    public class WineVariety
    {
        public Guid Id { get; set; }
        public string Brand { get; set; }
        public string? Name { get; set; }
        public string? Review { get; set; }
        public int? Year { get; set; }
        public int? Price { get; set; }
        public int? BrandId { get; set; }
        public string? GrapeType { get; set; }
        public string? Notes { get; set; }
        public Enum? WineType { get; set; }
    }
}