using Gifter.Models;
using Gifter.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;

        public CommentController(ICommentRepository commentRepo)
        {
            _commentRepo = commentRepo;
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var comment = _commentRepo.GetById(id);
            if (comment == null)
            {
                return NotFound();
            }
            return Ok(comment);
        }

        [HttpGet("getbypost/{id}")]
        public IActionResult GetByPost(int id)
        {
            return Ok(_commentRepo.GetByPostId(id));
        }

        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            _commentRepo.Add(comment);
            return CreatedAtAction("Get", new { id = comment.Id }, comment);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Comment comment)
        {
            var c = _commentRepo.GetById(id);
            if (id != comment.Id || c == null)
            {
                return BadRequest();
            }
            _commentRepo.Update(comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Comment comment = _commentRepo.GetById(id);

            if (comment == null)
            {
                return BadRequest();
            }

            _commentRepo.Delete(id);
            return NoContent();
        }
    }
}
