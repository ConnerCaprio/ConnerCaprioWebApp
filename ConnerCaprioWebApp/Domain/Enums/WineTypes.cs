using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Domain.Enums
{
    internal class WineTypes
    {
        public enum SearchMatchStatus
        {
            [Display(Name = "Red")]
            RED,
            [Display(Name = "White")]
            WHITE,
            [Display(Name = "Sparkling")]
            SPARKLING
        }
    }
}
