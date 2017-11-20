using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using LBMCtunez.DataModels;
using LBMCtunez.ViewModels;

namespace LBMCtunez.Controllers
{
    public class ArtistsController : ApiController
    {
        private AppDbContext db = new AppDbContext();
        //private ISpotifyGrabber grabber = new SpotifyGrabber();


        // GET: api/Artists
        public IQueryable<Artist> GetArtists()
        {
            return db.Artists;
        }

        // GET: api/Artists/5
        public IHttpActionResult GetArtistCatalog(int id)
        {
            var albums = db.Albums.Where(a => a.ArtistID == id);

            Artist artist = db.Artists.Find(id);
            if (artist == null)
            {
                return NotFound();
            }

            return Ok(albums);
        }

        

        // POST: api/Artists
        [HttpPost]
        //[Route("Artists/{custID}")]
        public IHttpActionResult PostEntry(Entry entry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Artist artistEntry = new Artist
            {
                ArtistName = entry.ArtistName
            };

            Album albumEntry = new Album
            {
                AlbumName = entry.AlbumName,
                ArtistName = entry.ArtistName
            };

            db.Artists.Add(artistEntry);
            db.SaveChanges();
            albumEntry.ArtistID = artistEntry.ArtistID;
            db.Albums.Add(albumEntry);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = artistEntry.ArtistID }, entry);
        }

        // DELETE: api/Artists/5
        [ResponseType(typeof(Artist))]
        public IHttpActionResult DeleteArtist(int id)
        {
            Artist artist = db.Artists.Find(id);
            if (artist == null)
            {
                return NotFound();
            }

            db.Artists.Remove(artist);
            db.SaveChanges();

            return Ok(artist);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ArtistExists(int id)
        {
            return db.Artists.Count(e => e.ArtistID == id) > 0;
        }
    }
}