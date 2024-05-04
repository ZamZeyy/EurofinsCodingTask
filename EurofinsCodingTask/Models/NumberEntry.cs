using System;
using System.ComponentModel.DataAnnotations;

namespace EurofinsCodingTask.Models;
public class NumberEntry
{
    [Key]
    public Int32 Id { get; set; }
    public String? FirstNumber { get; set; }
    public String? LastNumber { get; set; }
    public DateTime? DateUpdated { get; set; }
}
