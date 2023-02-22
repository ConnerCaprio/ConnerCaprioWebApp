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
    public class Details
    {
        public class Query : IRequest<WineVariety>
            {
                public Guid Id { get; set; }
            }

        public class Handler : IRequestHandler<Query, WineVariety>
        {
            private readonly DataContext _context;
            public Handler(DataContext context) { 
                _context = context;
            }

            public async Task<WineVariety> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.WineVarieties.FindAsync(request.Id);
            }
        }
    }
}
