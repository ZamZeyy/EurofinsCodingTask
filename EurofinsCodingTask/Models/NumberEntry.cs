/*/////////////////////////////////////////////////////////////////////////
This file contains the model for the NumberEntry table in the database.
* It contains the following properties:
* 1. Id: The primary key for the table.
* 2. FirstNumber: The first number in the range.
* 3. LastNumber: The last number in the range.
* 4. DateUpdated: The date and time the entry was last updated.
Mateusz Judka
*//////////////////////////////////////////////////////////////////////////


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
