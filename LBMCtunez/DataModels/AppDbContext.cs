using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace LBMCtunez.DataModels
{
    public class AppDbContext : DbContext
    {
        public AppDbContext() : base("LBMCtunez")
        {}

        public DbSet<Artist> Artists { get; set; }
        public DbSet<Album> Albums { get; set; }
        //public DbSet<Song> Songs { get; set; }

    }
}