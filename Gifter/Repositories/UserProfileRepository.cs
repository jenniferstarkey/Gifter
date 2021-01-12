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
            _context.Entry(userProfile).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public void Delete(int id)
        {
            var userToDelete = _context.UserProfile
                .Where(u => u.Id == id) // Find the user by id
                .Include(u => u.Comments) // Comments they've made
                .Include(u => u.Posts) // Posts they've written
                .ThenInclude(p => p.Comments); // All Comments on posts they've written

            _context.UserProfile.RemoveRange(userToDelete);
            _context.SaveChanges();
        }
    }
}
