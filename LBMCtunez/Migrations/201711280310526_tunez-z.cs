namespace LBMCtunez.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tunezz : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Artists", "ImgUrl");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Artists", "ImgUrl", c => c.String());
        }
    }
}
