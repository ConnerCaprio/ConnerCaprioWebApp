using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain.Models_or_Entities;
using MediatR;
using Application.Wines;

namespace API.Controllers
{
    public class WinesController : BaseApiController
    {

        [HttpGet] //api/Wines
        public async Task<ActionResult<List<WineVariety>>> GetWines()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/Wines/{id}
        public async Task<ActionResult<WineVariety>> GetWineById (Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateWine(WineVariety newWine)
        {
            await Mediator.Send(new Create.Command{Wine=newWine});
            return Ok();
        }

        [HttpPut("{id}")] //api/wines/{id}
        public async Task<IActionResult> EditWine (Guid id, WineVariety wine) {
            
            wine.Id = id;
            await Mediator.Send(new Edit.Command{Wine = wine});
            return Ok();
        }

        [HttpDelete("{id}")] //api/Wines/{id}
        public async Task<IActionResult> DeleteWineById (Guid id)
        {
            await Mediator.Send(new Delete.Command{Id = id});
            return Ok();
        }

    }
}
