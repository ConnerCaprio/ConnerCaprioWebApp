using AutoMapper;
using Domain.Models_or_Entities;
using MediatR;
using Persistence;

namespace Application.Wines
{
    public class Edit
    {

        public class Command: IRequest
        {
            public WineVariety Wine { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {

            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler (DataContext context, IMapper mapper){
                _mapper = mapper;
                _context = context;
            }
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var wine = await _context.WineVarieties.FindAsync(request.Wine.Id);
                _mapper.Map(request.Wine, wine);

                await _context.SaveChangesAsync();
            }
        }
    }
}