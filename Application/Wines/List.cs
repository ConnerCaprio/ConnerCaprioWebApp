using Domain.Models_or_Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Wines
{
    public class List
    {
        public class Query : IRequest<List<WineVariety>> { }

        public class Handler : IRequestHandler<Query, List<WineVariety>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context) {
                _context = context;
            }

            public async Task<List<WineVariety>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.WineVarieties.ToListAsync();
            }
        }
    }
}
