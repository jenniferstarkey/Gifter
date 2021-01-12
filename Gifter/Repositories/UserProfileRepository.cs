using Gifter.Data;
using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Repositories
{
    public class UserProfileRepository : IUserProfileRepository
    {
        private readonly ApplicationDbContext _context;

        public UserProfileRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public List<UserProfile> GetAll()
        {
            return _context.UserProfile.ToList();
        }
        public UserProfile GetUserById(int id)
        {
            return _context.UserProfile.FirstOrDefault(u => u.Id == id);
        }
        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }
        public void Update(UserProfile userProfile)
        {
            _context.Entry(userProfile).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            //Delete the post from that user first & include the comments on the post
            var userPost = _context.Post.Include(p => p.Comment).Where(p => p.UserProfileId == id);
            _context.Post.RemoveRange(userPost);

            //Delete the comments the user has made on other posts
            var commmentsToDelete = _context.Comment.Where(c => c.UserProfileId == id);
            _context.Comment.RemoveRange(commmentsToDelete);

            //Delete the user
            var userProfile = GetUserById(id);
            _context.UserProfile.Remove(userProfile);
            _context.SaveChanges();
        }
    }
}
