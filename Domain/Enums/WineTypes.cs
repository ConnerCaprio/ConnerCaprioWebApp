using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Domain.Enums
{
    public enum WineTypes
    {
        [Display(Name = "Red")]
        RED,
        [Display(Name = "White")]
        WHITE,
        [Display(Name = "Sparkling")]
        SPARKLING,
        [Display(Name = "NA")]
        NA
    }
}
