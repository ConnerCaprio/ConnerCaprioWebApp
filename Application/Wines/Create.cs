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
    public class Create
    {
        public class Command : IRequest
            {
                public WineVariety? Wine { get; set; }
            }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                _context.WineVarieties.Add(request.Wine);

                await _context.SaveChangesAsync();

            }
        }
    }
}
