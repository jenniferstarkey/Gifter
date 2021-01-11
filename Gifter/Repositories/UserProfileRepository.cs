using Gifter.Data;
using Gifter.Models;
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
    }
}
