/*////////////////////////////////////////////////////////////////////////////
This file contains the NumberContext class which is used to create the database context
Mateusz Judka
*/////////////////////////////////////////////////////////////////////////////

using Microsoft.EntityFrameworkCore;

namespace EurofinsCodingTask.Models;

public class NumberContext : DbContext
{
    public NumberContext(DbContextOptions<NumberContext> options): base(options)
    {
    }

    public DbSet<NumberEntry> NumberEntries { get; set; }

    
}


