using AutoMapper;
using Domain.Models_or_Entities;

namespace Application.Core
{
    public class MappingProfiles : Profile
    {

        public MappingProfiles() {
            CreateMap<WineVariety, WineVariety>();
        }

    }
}