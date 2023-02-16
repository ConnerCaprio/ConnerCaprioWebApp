using Domain.Models_or_Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<WineVariety> WineVarieties { get; set; }
    }
}
