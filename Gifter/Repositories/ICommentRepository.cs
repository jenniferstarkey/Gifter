using Gifter.Models;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> GetCommentsOnPost(int postId);
        public Comment GetById(int id);
        public void Add(Comment comment);
        public void Update(Comment comment);
        public void Delete(int id);
    }
}