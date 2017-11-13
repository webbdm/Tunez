namespace LBMCtunez.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tunez2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Albums", "ArtistName", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Albums", "ArtistName");
        }
    }
}
