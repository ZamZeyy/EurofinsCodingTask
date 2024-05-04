using Microsoft.EntityFrameworkCore;

namespace EurofinsCodingTask.Models;

public class NumberContext : DbContext
{
    public NumberContext(DbContextOptions<NumberContext> options): base(options)
    {
    }

    public DbSet<NumberEntry> NumberEntries { get; set; }

    
}


