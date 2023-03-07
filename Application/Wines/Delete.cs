using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models_or_Entities;
using MediatR;
using Persistence;

namespace Application.Wines
{
    public class Delete
    {
        public class Command : IRequest 
        {
            public Guid? Id { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context) {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var wineToDelete = await _context.WineVarieties.FindAsync(request.Id);
                if (wineToDelete != null) {
                    _context.Remove(wineToDelete);
                    await _context.SaveChangesAsync();
                }
                
            }
        }
    }
}