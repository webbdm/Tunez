namespace LBMCtunez.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class tunez3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Artists", "ImgUrl", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Artists", "ImgUrl");
        }
    }
}
