using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain.Models_or_Entities;

namespace API.Controllers
{
    public class WinesController : BaseApiController
    {
        private readonly DataContext _context;
        public WinesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet] //api/Wines
        public async Task<ActionResult<List<WineVariety>>> GetWines()
        {
            return await _context.WineVarieties.ToListAsync();
        }

        [HttpGet("{id}")] //api/Wines/{id}
        public async Task<ActionResult<WineVariety>> GetWineById (Guid id)
        {
            return await _context.WineVarieties.FindAsync(id);
        }

    }
}
