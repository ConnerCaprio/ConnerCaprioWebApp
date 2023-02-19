using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Domain.Enums;
using Domain.Models_or_Entities;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.WineVarieties.Any()) return;

            var winesList = new List<WineVariety>
            {
                new WineVariety
                {
                    Brand = "TestBrand1",
                    Name = "TestName1",
                    Review = "TestReview1",
                    Year = 2000,
                    Price = 10,
                    GrapeType = "TestGrapeType1",
                    WineType = WineTypes.NA,
                    Notes = "TestNotes1"
                },
                new WineVariety
                {
                    Brand = "TestBrand2",
                    Name = "TestName2",
                    Review = "TestReview2",
                    Year = 2000,
                    Price = 10,
                    GrapeType = "TestGrapeType2",
                    WineType = WineTypes.NA,
                    Notes = "TestNotes2"
                },
                new WineVariety
                {
                    Brand = "TestBrand3",
                    Name = "TestName3",
                    Review = "TestReview3",
                    Year = 2000,
                    Price = 10,
                    GrapeType = "TestGrapeType3",
                    WineType = WineTypes.NA,
                    Notes = "TestNotes3"
                },
                new WineVariety
                {
                    Brand = "TestBrand4",
                    Name = "TestName4",
                    Review = "TestReview4",
                    Year = 2000,
                    Price = 10,
                    GrapeType = "TestGrapeType4",
                    WineType = WineTypes.NA,
                    Notes = "TestNotes4"
                },
                new WineVariety
                {
                    Brand = "TestBrand5",
                    Name = "TestName5",
                    Review = "TestReview5",
                    Year = 2000,
                    Price = 10,
                    GrapeType = "TestGrapeType5",
                    WineType = WineTypes.NA,
                    Notes = "TestNotes5"
                },
            };

            await context.WineVarieties.AddRangeAsync(winesList);
            await context.SaveChangesAsync();
        }
    }
}