using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LBMCtunez.DataModels
{
    public class Artist
    {
        [Key]
        public int ArtistID { get; set; }
        public string ArtistName { get; set; }
        public string ImgUrl { get; set; }
    }
}